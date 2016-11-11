'use strict'//Define que el código JavaScript deba ejecutarse en el "modo estricto".

var app = angular.module("appTrivia", [
	'ngResource',
	'ngRoute',
	'firebase'
])
.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/login.html',
			controller:'sesionCtrl'
		})
		.when('/trivia', {
			templateUrl: 'templates/bienvenido.html',
			controller:'generalCtrl'
		})		
		.otherwise({
			redirectTo: '/'
		});
})
.run(function($rootScope, $location){
	
	
});