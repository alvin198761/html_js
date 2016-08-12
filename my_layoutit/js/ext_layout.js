//边框布局
function BorderLayout (container){

	//南
	this.south = null;
	this.north = null;
	this.west = null;
	this.east = null;
	this.center = null;
	//

	//具体的布局逻辑
	function doBorderLayout(obj){
		var container = obj.nodeObj;
		$(container).empty();
		var x = 0 ;
		var y = 0;
		var w = container.clientWidth;
		var h = container.clientHeight;

		//顶部
		var north = $("<div></div>");
		 north.css("border" , "dashed 1px #cccccc");
		 north.css("margin","5px");
		 north.width(w - 20);
	 	 north.height(100);
	 	 north.attr("id","north");
		 $(container).append(north);
		 obj.north = north;
 		//中间的控件
 		var content = $("<div class='container row'></div>");
		content.css("border" , "dashed 1px #cccccc");
		content.css("margin","5px");
		content.height(h - 210);
		content.width(w - 20);
	 	content.attr("id","content");
	 	$(container).append(content);

	 	var west = $("<div class='col-md-2'></div>");
		west.css("border-right" , "dashed 1px #cccccc");
	 	west.height(h - 220);
	 	west.attr("id","west");
	 	$(content).append(west);
	 	obj.west = west;
		 
		var center = $("<div class='col-md-8'></div>");
		center.height(h - 220);
	 	center.attr("id","center");
	 	$(content).append(center);
	 	obj.center = center;

	 	var east = $("<div class='col-md-2'></div>");
	 	east.css("border-left" , "dashed 1px #cccccc");
		east.height(h - 220);
	 	east.attr("id","east");
	 	$(content).append(east);
	 	obj.east = east;
	 

	 	//底部的控件
	 	var south = $("<div></div>");
	 	south.css("border" , "dashed 1px #cccccc");
		south.css("margin","5px");
		south.width(w - 20);
	 	south.height(80);
	 	south.attr("id","south");
		$(container).append(south);
		obj.south = south;

		obj.children = [obj.north,obj.south,obj.west,obj.center,obj.east];

		//双击编辑
		this.layoutEdit(obj.children,obj);
	}
	//重写方法必须放后面
 	extentsObj(new LayoutManager(container,doBorderLayout,"borderLayout"),this);

	
	 
	this.doLayout(this)
	return this;
}
//表格布局
function GridLayout(container,row,col){

	//this.hgap = 8;
	//this.vgap = 8;
	this.row = row;
	this.col = col;

	function doGridLayout(obj){
		var container = obj.nodeObj;
		$(container).empty();
		var x = 0 ;
		var y = 0;
		var w = container.clientWidth;
		var h = container.clientHeight;
		//
		var cw = w / col ;
		var ch = h / row ;
		 
		var childIndex = 0;
		for(var r = 0 ; r < row ; r++){
 
		 	for(var c = 0 ; c < col ;c++){
				var cell = $("<div style='float:left'></div>");
				cell.css("border-right" , "dashed 1px #cccccc");
				cell.css("border-bottom" , "dashed 1px #cccccc");
			 	cell.height(ch);
			 	cell.width(cw);
			 	cell.attr("id","cell"+r+c);
			    $(container).append(cell);
			 	obj.children[childIndex++] = cell;
			}
		}
		this.layoutEdit(obj.children,obj);
	}

	extentsObj(new LayoutManager(container,doGridLayout,"gridLayout"),this);
	
	this.doLayout(this)
	return this;
}
//水平布局
function HorizontalBoxLayout(container){

	this.hgap = 8; 
	this.childrenIndex = 0;
	this.subArray = [];
	   
	function doHorizentalBoxLayout(obj){
		var container = obj.nodeObj;
		$(container).empty();
		var x = 0 ;
		var y = 0;
		var w = container.clientWidth;
		var h = container.clientHeight;

		var content = $("<div class='container row'></div>");
		content.css("border" , "dashed 1px #cccccc");
		content.css("margin",(obj.hgap >> 1)+"px");
		content.height(h - 10);
		content.width(w - 10);
	 	content.attr("id","content");
	 	$(container).append(content);
	 	obj.children[0] = content;
	 	this.layoutEdit(obj.children,obj);
	}

	extentsObj(new LayoutManager(container,doHorizentalBoxLayout,"horizontal"),this);

	this.add = function(parentTag,node){
		$(node).css("position",  "static");
		$(node).css("float",  "left");
		this.childrenIndex ++;
		this.subArray[this.childrenIndex - 1] = node;
		var pw = $(parentTag).width()  -50;
	 	var cw = pw   / (this.subArray.length +1 );
	 	for (var i = this.subArray.length - 1; i >= 0; i--) {
	 		$(this.subArray[i]).width(cw);
	 	}
		 
		$(parentTag).append(node);
		this.avtiveContainer(parentTag,false);
	}

	this.doLayout(this)
	return this;

} 
//垂直布局
function VericalBoxLayout(container){

	this.vgap = 8;
	this.compHeight = 0;

	function doVericalBoxLayout(obj){
		var container = obj.nodeObj;
		$(container).empty();
		var x = 0 ;
		var y = 0;
		var w = container.clientWidth;
		var h = container.clientHeight;

		var content = $("<div ></div>");
		content.css("border" , "dashed 1px #cccccc");
		content.css("margin",(obj.vgap >> 1)+"px");
		content.height(h - 10);
		content.width(w - 10);
	 	content.attr("id","content");
	 	$(container).append(content);
	 	obj.children[0] = content;

	 	this.layoutEdit(obj.children,obj);
	}

	extentsObj(new LayoutManager(container,doVericalBoxLayout,"vertical"),this);

	this.doLayout(this)
	return this;

} 

//流布局
function FlowLayout (container){

	function doFlowLayout(obj){

		var container = obj.nodeObj;
		$(container).empty();
		var x = 0 ;
		var y = 0;
		var w = container.clientWidth;
		var h = container.clientHeight;

		var content = $("<div ></div>");
		content.css("border" , "dashed 1px #cccccc");
		 content.css("margin", "5px");
		content.height(h - 10);
		content.width(w - 10);
	 	content.attr("id","content");
	 	$(container).append(content);
	 	obj.children[0] = content;

		this.layoutEdit(obj.children,obj);
	}

	extentsObj(new LayoutManager(container,doFlowLayout,"flowLayout"),this);

	this.add = function(parentTag,node){
		$(node).css("position",  "static");
		$(node).css("float",  "left");
 
		$(parentTag).append(node);
		this.avtiveContainer(parentTag,false);
	}


	this.doLayout(this)
	return this;
}

