 var app = angular.module("myApp",[]);


//Controller Start Here
 app.controller("myController",function($scope,$interval){ 	
 	$scope.theTime = new Date().toLocaleTimeString();

 	$interval(function(){
 		$scope.theTime = new Date().toLocaleTimeString(); 		
 	},1000);   
 });