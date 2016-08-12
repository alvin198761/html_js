var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname ;
  var filename = path.join(process.cwd(), uri);

  console.log("request url :" + filename);

  //响应格式
  var contentTypesByExtension = {
    '.html': "text/html",
    '.css':  "text/css",
    '.js':   "text/javascript"
  };
  //判断路径是否存在
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }
   //如果是目录，就返回 index.html
   if (fs.statSync(filename).isDirectory()) filename += '/index.html';
   //读取文件，并返回给客户端
   fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      var headers = {};
      var contentType = contentTypesByExtension[path.extname(filename)];
      if (contentType) headers["Content-Type"] = contentType;
      response.writeHead(200, headers);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));
console.log("Server has started. listen:80");


/*
var http = require('http');
var url = require('url');
var querystring = require("querystring");
 
function onRequest(request,response){
	var url_array = url.parse(request.url,true);
	var pathname = url_array.pathname;
	var query_param = url_array.query;
	    
	//
	console.log(url_array );
	console.log(pathname );
	console.log(query_param );
}
http.createServer(onRequest).listen(80);
console.log("Server has started. listen:80");
*/
/*
 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=alvin&pass=1111',
  query: { name: 'alvin', pass: '1111' },
  pathname: '/index.html',
  path: '/index.html?name=alvin&pass=1111',
  href: '/index.html?name=alvin&pass=1111' }
/index.html
{ name: 'alvin', pass: '1111' }

 */