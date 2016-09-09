'use strict';
app.controller("generalCtrl", function($scope, $location){
	$scope.saludo="Hola";  
	$scope.audios="audio/stand.mp3";
	$scope.classAnimate='animated swing';

	$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered	    
	    $('.modal-trigger').leanModal();
	    $('.carousel.carousel-slider').carousel({full_width: true});

	});
	$scope.enviarp1= function(altPregunta1){
		$scope.audios='';
		if (altPregunta1='opcion2') {
			$scope.audios="audio/correct.mp3";
			console.log($scope.audios);
		}
		else{
			$scope.audios="audio/incorrect.mp3";
			console.log($scope.audios);
		}
		console.log(altPregunta1);
	}
	


});