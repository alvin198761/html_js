var app = angular.module('app', []);

app.controller("headerController", function($scope, $rootScope) {
	 
})
.directive('tagHeader',function(){
		 var dev =  {
		            restrict: 'E',
		            templateUrl: "./js/components/header/header.html"
		        };
		 return dev;
});


 