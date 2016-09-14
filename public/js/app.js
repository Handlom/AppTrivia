'use strict'//Define que el código JavaScript deba ejecutarse en el "modo estricto".

var app = angular.module("appTrivia", [
	'ngResource',
	'ngRoute',
	'firebase'
])
.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/bienvenido.html',
			controller:'generalCtrl'
		})
		.when('/preguntas', {
			templateUrl: 'templates/preguntas.html',
			controller:'preguntasController'
		})
		.otherwise({
			redirectTo: '/'
		});
})
.run(function($rootScope, $location){
	
	window.oncontextmenu = function() {
		return false;
	}

});