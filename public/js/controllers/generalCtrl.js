'use strict';
app.controller("generalCtrl", function($scope, $location, $timeout){
	$scope.saludo="Hola";  
	$scope.audios="audio/stand.mp3";
	$scope.classAnimate='animated swing';

	var classIncorrect='animated wobble horizontal';
	var classCorrect='animated wobble vertical'
	//$scope.p1={};
	$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered	    
	    $('.modal-trigger').leanModal();
	    $('.carousel.carousel-slider').carousel({full_width: true});

	});
	
	$scope.irPe1=function(p1){
		if (p1=="a") {
			$scope.stl='animated rotateOut';console.log('correcto');
			$timeout(function() {
				$scope.irP2();
			}, 405);	
		}
		else {
			$scope.stl='animated wobble horizontal';console.log('incorrecto');
			$timeout(function() {
				$scope.irP2();
			}, 1250);	
		}		
		console.log($scope.p1);
			
		return $scope.stl;		
	}
	
	$scope.activar = function(p1){
		$scope.stl='animated wobble vertical';
		console.log($scope.p1);
		var esti = [];
		esti.push(classIncorrect);
		
		$timeout(function() {
			$scope.irP2();
		}, 1000);		
		return esti;
	}
	$scope.irP2=function(){
		$('#modal1').closeModal();
		$('#modal2').openModal();
	}
	$scope.irP3=function(){
		$('#modal2').closeModal();
		$('#modal3').openModal();
	}
	$scope.irP4=function(){
		$('#modal3').closeModal();
		$('#modal4').openModal();
	}
	$scope.irP5=function(){
		$('#modal4').closeModal();
		$('#modal5').openModal();
	}
	$scope.irP6=function(){
		$('#modal5').closeModal();
		$('#modal6').openModal();
	}
	$scope.irP7=function(){
		$('#modal6').closeModal();
		$('#modal7').openModal();
	}
	$scope.irP8=function(){
		$('#modal7').closeModal();
		$('#modal8').openModal();
	}
	$scope.irP9=function(){
		$('#modal8').closeModal();
		$('#modal9').openModal();
	}
	$scope.irP10=function(){
		$('#modal9').closeModal();
		$('#modal10').openModal();		
	}
	$scope.irTest=function(){
		$('#modal10').closeModal();
		$('#modalResultado').openModal();
	}
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

	$scope.pageClass = 'page-about';
	


});