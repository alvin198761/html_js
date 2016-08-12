define(['app'], function(app){
	 app.service('httputils', function($http){
		 $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
			return {
				post:	function (url,params,success,error){
					var data = params || {};
					var successFun = success ||function(res){};
					var errorFun = success ||function(res){};
					$http.post(url,data).success(successFun).error(errorFun);
				},
			
				get:function (url,params,success,failed){
					var data = params || {};
					var successFun = success ||function(res){};
					var errorFun = success ||function(res){};
					$http.get(url,data).success(successFun).error(errorFun);
				}
				,
//				del :function (url,jsonData,success,failed){
//					var data = params || {};
//					var successFun = success ||function(res){};
//					var errorFun = success ||function(res){};
//					$http.delete(url,data).success(successFun).error(errorFun);
//				}
			}
		});
});

 

 