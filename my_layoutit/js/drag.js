var app = angular.module('app', []);
//控件列表面板数据
app.controller("naveBarController",function($scope,$rootScope){
	$scope.layouts = [
		{
			title:"简单边框布局(上左中下)",
			icon :"glyphicon glyphicon-film",
			data : "",
			typeName:"simpleBorderLayout"

		},
		{
			title:"边框布局(上左中右下)",
			icon :"glyphicon glyphicon-film",
			data : "",
			typeName :"borderLayout"

		},
		{
			title:"水平布局",
			icon :"glyphicon glyphicon-film",
			data : "",
			typeName :"horizontal"

		},
		{
			title:"垂直布局",
			icon :"glyphicon glyphicon-film",
			data : "",
			typeName :"vertical"

		},
		{
			title:"流式布局",
			icon :"glyphicon glyphicon-film",
			data : "",
			typeName:"flowLayout"

		},
		{
			title:"绝对定位",
			icon :"glyphicon glyphicon-film",
			data : "",
			typeName:"abstractLayout"

		},
	];

	$scope.dataComponents = [
		{
			title:"列表控件",
			icon :"glyphicon glyphicon-th",
			data  :""

		},{
			title:"表格控件",
			icon :"glyphicon glyphicon-th",
			data  :""
		},{
			title:"树控件",
			icon :"glyphicon glyphicon-th",
			data  :""
		}
	];
	$scope.basicComponents =[
		{
			title:"导航条",
			icon :"glyphicon glyphicon-credit-card",
			data  :""

		},{
			title:"Tab页",
			icon :"glyphicon glyphicon-credit-card",
			data  :""
		},{
			title:"页面",
			icon :"glyphicon glyphicon-credit-card",
			data  :""
		}
	];

	$scope.init = function(){

		$(document).ready(function(){
			//实现拖拽功能
			$("#collapseThree li").mousedown(function(e){
				flag = true;
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
				for(var i = 0 ; i < node.childNodes.length ;i++){
					if(node.childNodes[i].nodeName =="DIV"){
						$(node.childNodes[i]).show();
					}
				}

			});
		});
	};

	 //初始化被拖拽的控件
	$scope.initDragComponet = function(node){
			//绑定鼠标事件
		$(node).bind("mousemove",function(ev){
				//console.log(ev.pageX +" , " + ev.pageY + "  -- " +node);
				this.style.left =(ev.pageX - 10)+ "px" ;
				this.style.top = (ev.pageY - 10) + "px";
				var parentTag = $rootScope.layout.contains(ev.pageX,ev.pageY);
				if(parentTag!= null){
					 $rootScope.layout.avtiveContainer(parentTag,true);
				}else{
					$rootScope.layout.avtiveContainer(null,false);
				}
		});
		
		$(node).bind("mouseup",function(ev){
				//如果进入了操作面板，松开鼠标，就会加入到操作面板中
				var parentTag = $rootScope.layout.contains(ev.pageX,ev.pageY);
				if(parentTag!= null){
					$scope.addToDrawPane(parentTag,this);
				}else{
					$("#dragId").remove(this);
				}
				//不管是结局如何，都要移除鼠标事件
			    $(this).unbind();
		});
		 
	};

	$scope.addToDrawPane = function(parentTag,node){
		//$("#dragId").remove(node);
		//$(node).css("position","static");
		node.style.position = "static";
		node.style.left ="0px";
		node.style.top = "0px";

		$(parentTag).append(node);
		$rootScope.layout.avtiveContainer(parentTag,false);
	};


	//初始化
	$scope.init();
 	

});


//操作面板功能
app.controller("drawPaneController" ,function($scope,$rootScope){
	 var node = document.getElementById("drawPane");
	 $rootScope.layout = new SimpleBorderLayoutManager(node); //默认布局

});
 

		
 