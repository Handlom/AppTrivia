'use strict';
app.controller("generalCtrl", function($scope, $location){
	$scope.saludo="Hola";  

	$scope.classAnimate='animated swing';
	
	$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered	    
	    $('.modal-trigger').leanModal();
	    $('.carousel.carousel-slider').carousel({full_width: true});

	});



});