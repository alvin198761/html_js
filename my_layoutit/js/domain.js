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
function LayoutManager (container,doLayoutFunction) {

	var c = new Component(container);

 	for(var p in c){
		this[p]=c[p];
	}

	this.add = function(childNode){
		this.children.add(childNode);
		this.doLayout();
	};

	//布局操作
	this.doLayout = doLayoutFunction;

	return this;
}
//简单的布局
function SimpleBorderLayoutManager (container){

	this.borderArray = [];
	this.currentSelectedNode = null;

	function doSimpleBorderLayout(obj){
		var container = obj.nodeObj;
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
		obj.borderArray[0] = top;

		var content = $("<div class='container row'></div>");
		content.css("border" , "dashed 1px #cccccc");
		content.css("margin","5px");
		content.height(h - 210);
		content.width(w - 20);
	 	content.attr("id","content");
	 	$(container).append(content);
		//obj.borderArray["content"] = content;

		var left = $("<div class='col-md-3'></div>");
		left.css("border-right" , "dashed 1px #cccccc");
	 	left.height(h - 220);
	 	left.attr("id","left");
	 	$(content).append(left);
		obj.borderArray[1] = left;

		var center = $("<div class='col-md-9'></div>");
		 
	 	center.height(h - 220);
	 	 
	 	center.attr("id","center");
	 	$(content).append(center);
		obj.borderArray[2] = center;
		
		

		var bottom = $("<div></div>");
	 	bottom.css("border" , "dashed 1px #cccccc");
		bottom.css("margin","5px");
		bottom.width(w - 20);
	 	bottom.height(80);
	 	bottom.attr("id","bottom");
		$(container).append(bottom);
		obj.borderArray[3] = bottom;

		for (var i = obj.borderArray.length - 1; i >= 0; i--) {
			$(obj.borderArray[i]).dblclick(function(){
				resetOtherDiv(this,obj.borderArray);
				obj.currentSelectedNode = this;
			});
		};
		return obj;
	}



	function resetOtherDiv(obj,array){
		for (var i = array.length - 1; i >= 0; i--) {
			 $(array[i]).attr("contenteditable",$(obj).attr("id") == $(array[i]).attr("id"));
		}
	}


	var c = new LayoutManager(container,doSimpleBorderLayout);

 	for(var p in c){
		this[p]=c[p];
	}
 
 	this.contains = function(x,y){
 		for (var i = this.borderArray.length - 1; i >= 0; i--) {
			var comp = this.borderArray[i];
		 	var offsetLeft = $(comp).offset().left;  
		 	var offsetTop = $(comp).offset().top;  
		 	var clientWidth = $(comp).width();
		 	var clientHeight = $(comp).height();
			if (x> offsetLeft &&x < (offsetLeft+clientWidth)  && y> offsetTop  && y <(offsetTop+clientHeight)){
				return comp;
			}
		}
		return null;
  	}

  	this.avtiveContainer= function(node,flag){
  		for (var i = this.borderArray.length - 1; i >= 0; i--) {
			 $(this.borderArray[i]).css('background-color' , "#ffffff");
		};
		if(flag){
			$(node).css('background-color' , "red");
		} 
		
	}

 	this.doLayout(this)
	return this;
}

 