//继承
function extentsObj(superObj , childObj){

	for(var p in superObj){
		childObj[p]=superObj[p];
	}
}
//重置编辑框
function resetOtherDiv(obj,array){
	for (var i = array.length - 1; i >= 0; i--) {
		 $(array[i]).attr("contenteditable",$(obj).attr("id") == $(array[i]).attr("id"));
	}
}
//判断是否选中
function containsPoint(x ,y,comp ){
	var offsetLeft = $(comp).offset().left;  
 	var offsetTop = $(comp).offset().top;  
 	var clientWidth = $(comp).width();
 	var clientHeight = $(comp).height();
	if (x> offsetLeft &&x < (offsetLeft+clientWidth)  && y> offsetTop  && y <(offsetTop+clientHeight)){
		return comp;
	}
}
//组件
function Component (nodeObj){

	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;

	this.children = [];

	this.editable = false;
	this.selected = false;
	this.nodeObj = nodeObj;

	this.contains = function(x,y){
		for (var i = this.children.length - 1; i >= 0; i--) {
			if(this.children[i].contains(x,y)){
				return this.children[i];
			}
		}
		if(nodeObj == null){
			return null;
		}
		var obj = nodeObj;
		if (x> obj.offsetLeft &&x < (obj.offsetLeft+obj.clientWidth)  && y> obj.offsetTop  && y <(obj.offsetTop+obj.clientHeight)){
			return this;
		}
		return null;
	}

	return this;
} 
//布局管理器
function LayoutManager (container,doLayoutFunction,typeName) {

	
	this.currentSelectedNode = null;
	this.typeName =typeName;
	this.add = function(childNode){
		this.children.add(childNode);
		this.doLayout();
	};

	//布局操作
	this.doLayout = doLayoutFunction;

	this.clean = function(){
		$(this.nodeObj).empty();
		this.doLayout(this);
	}

	this.layoutEdit =function(array,obj){
		for (var i = array.length - 1; i >= 0; i--) {
			$(array[i]).dblclick(function(){
				resetOtherDiv(this,obj.children);
				obj.currentSelectedNode = this;
			});
		};
	}

  	this.avtiveContainer= function(node,flag){
		//console.log($(node)); 
		for (var i = this.children.length - 1; i >= 0; i--) {
		 $(this.children[i]).css('background-color' , "#ffffff");
		};
		if(flag){
			$(node).css('background-color' , "red");
		} 
	
	}

	this.add = function(parentTag,node){
		 $(node).css("position",  "static");
		$(node).css("left",  "0px");
		$(node).css("top",  "0px");
		$(parentTag).append(node);
		this.avtiveContainer(parentTag,false);
	}



	extentsObj(new Component(container),this);

	//拖拽时用得着，预判算法
	this.contains = function(x,y){
		for (var i = this.children.length - 1; i >= 0; i--) {
			if(containsPoint(x,y,this.children[i])){
				return this.children[i];
			}
		}
		return null;
	}
	return this;
}
//简单的布局
function SimpleBorderLayoutManager (container){

 	function doSimpleBorderLayout(obj){
		var container = obj.nodeObj;
		$(container).empty();
		var x = 0 ;
		var y = 0;
		var w = container.clientWidth;
		var h = container.clientHeight;
		//创建四个 div ,放在 操作面板中
		var top = $("<div></div>");
		top.css("border" , "dashed 1px #cccccc");
		top.css("margin","5px");
		top.width(w - 20);
	 	top.height(100);
	 	top.attr("id","top");
		$(container).append(top);
		obj.children[0] = top;

		var content = $("<div class='container row'></div>");
		content.css("border" , "dashed 1px #cccccc");
		content.css("margin","5px");
		content.height(h - 210);
		content.width(w - 20);
	 	content.attr("id","content");
	 	$(container).append(content);
		//obj.children["content"] = content;

		var left = $("<div class='col-md-3'></div>");
		left.css("border-right" , "dashed 1px #cccccc");
	 	left.height(h - 220);
	 	left.attr("id","left");
	 	$(content).append(left);
		obj.children[1] = left;

		var center = $("<div class='col-md-9'></div>");
		 
	 	center.height(h - 220);
	 	 
	 	center.attr("id","center");
	 	$(content).append(center);
		obj.children[2] = center;
		
		

		var bottom = $("<div></div>");
	 	bottom.css("border" , "dashed 1px #cccccc");
		bottom.css("margin","5px");
		bottom.width(w - 20);
	 	bottom.height(80);
	 	bottom.attr("id","bottom");
		$(container).append(bottom);
		obj.children[3] = bottom;

		//双击编辑
		this.layoutEdit(obj.children,obj);
		return obj;
	}

  	//要重写方法，或者要调用方法，必须放后面
	extentsObj(new LayoutManager(container,doSimpleBorderLayout,"simpleLayout"),this);
 

 	this.doLayout(this)
	return this;
}

 