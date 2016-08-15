var app = angular.module('app', []);
//
app.controller("navBarController",function($scope,$rootScope){
	$scope.layoutClean = function(){
		$rootScope.layout.clean();
	} ;
});
//控件列表面板数据
app.controller("siteBarController",function($scope,$rootScope){
	 
 	$scope.layouts = eval($.get({url:"js/data/layout.json",async:false}).responseText) ;
	$scope.dataComponents= [];//eval ($.get({url:"js/data/components.json",async:false}).responseText);
	$scope.basicComponents = eval($.get({url:"js/data/basiccomp.json",async:false}).responseText);
	$scope.parentNode = null;

	$scope.init = function(){

		$(document).ready(function(){
			//实现拖拽功能
			$("#collapseOne li").mousedown(function(e){
				 
				var node = this.cloneNode(true);
				node.style.position ="absolute";
				node.style.left = (e.pageX - 10)+ "px";
				node.style.top = (e.pageY -10)+ "px";
				//node.style.width = "200px";
				//node.style.height = "100px";
				node.style.zIndex = 100;
				node.id ="drgeId";
				
				node.style.left = e.pageX ;
				node.style.top = e.pageY ;

				$scope.initDragComponet(node);
				//
				$("#dragId").append(node);
				//显示的东西 ，要放在添加以后，不然没效果
				//for(var i = 0 ; i < node.childNodes.length ;i++){
				//	if(node.childNodes[i].nodeName =="DIV"){
				//		$(node.childNodes[i]).show();
				//	}
				//}

			});
		});
	};

	 //初始化被拖拽的控件
	$scope.initDragComponet = function(node){
			//绑定鼠标事件
		$(node).bind("mousemove",function(ev){
				//console.log(ev.pageX +" , " + ev.pageY + "  -- " +node);
				$(this).css("left", (ev.pageX - 10)+ "px");
				$(this).css("top", (ev.pageY -10)+ "px");

				//this.style.left =(ev.pageX - 10)+ "px" ;
				//this.style.top = (ev.pageY - 10) + "px";
				var parentTag = $rootScope.layout.contains(ev.pageX,ev.pageY);
				if(parentTag!= null){
					 $rootScope.layout.avtiveContainer(parentTag,true);
				}else{
					$rootScope.layout.avtiveContainer(null,false);
				}
		});
		
		$(node).bind("mouseup",function(ev){
				//如果进入了操作面板，松开鼠标，就会加入到操作面板中
				var parentTag =$rootScope.layout.contains(ev.pageX,ev.pageY);
				if(parentTag!= null){
					$rootScope.layout.add(parentTag,this);
					$(this).unbind();
					$scope.initTargetDrag(node);
				}else{
					$(this).unbind();
					$(this).remove();
				}
				 
		});
		 
	};

	
	//拖到目标面板以后鼠标拖拽事件
	$scope.initTargetDrag = function (obj){
		$(obj).on("mousedown","",function(ev){
				//console.log(this);
				$scope.parentNode = $(this).parent();
				$(this).css("position", "absolute");
				$(this).css("left", (ev.pageX - 10)+ "px");
				$(this).css("top", (ev.pageY -10)+ "px");
				$(this).css("zIndex", 100);

				var node = $(this);
				$("#dragId").append(node);
			 
				$scope.initTargatComponet(this);
		});	
		
	};
	//
	$scope.initTargatComponet = function(obj){
		$(document).on("mousemove",$(obj),function(ev){
			//console.log(ev.pageX +" , " + ev.pageY );
			$(obj).css("left", (ev.pageX - 10)+ "px");
			$(obj).css("top", (ev.pageY -10)+ "px");
 
			var parentTag = $rootScope.layout.contains(ev.pageX,ev.pageY);
			if(parentTag!= null){
				 $rootScope.layout.avtiveContainer(parentTag,true);
			}else{
				$rootScope.layout.avtiveContainer(null,false);
			}
		}); 
		$(document).on("mouseup",$(obj),function(ev){
			 	var parentTag =$rootScope.layout.contains(ev.pageX,ev.pageY);
				if(parentTag!= null){
					//console.log(obj);
					$rootScope.layout.add(parentTag,$(obj));
					//$scope.addToDrawPane(parentTag,this);
				}else{
					$rootScope.layout.add($scope.parentNode,$(obj));		 
				}
		});
	};

	$scope.changeLayout = function(layoutObj){
		if(layoutObj.typeName == $rootScope.typeName){
			return ;
		}
		var childNodes = $rootScope.layout.children;
		var node = document.getElementById("drawPane");
		if(layoutObj.typeName == "simpleLayout"){
			$rootScope.layout = new SimpleBorderLayoutManager(node);
			return ;
		}
		if(layoutObj.typeName =="borderLayout"){
			$rootScope.layout = new BorderLayout(node);
			return  ;
		}
		if(layoutObj.typeName =="gridLayout"){
			$rootScope.layout = new GridLayout(node,2,2);
			return ;
		}
		if(layoutObj.typeName =="vertical"){
			$rootScope.layout = new VericalBoxLayout(node);
			return ;
		}
		if (layoutObj.typeName=="horizontal") {
			$rootScope.layout = new HorizontalBoxLayout(node);
			return ;
		}
		if(layoutObj.typeName=="flowLayout"){
			$rootScope.layout = new FlowLayout(node);
			return ;
		}
		alert("该布局还没有实现");
	};

	//初始化
	$scope.init();
});


//操作面板功能
app.controller("drawPaneController" ,function($scope,$rootScope){
	var node = document.getElementById("drawPane");
	$rootScope.layout = new SimpleBorderLayoutManager(node); //默认布局
	//$rootScope.layout = new BorderLayout(node); //默认布局
	//$rootScope.layout = new GridLayout(node,3,2); //默认布局
	//$rootScope.layout = new VericalBoxLayout(node); //默认布局
	//$rootScope.layout = new HorizontalBoxLayout(node); //默认布局
	//$rootScope.layout = new FlowLayout(node); //默认布局

});
 

		
 