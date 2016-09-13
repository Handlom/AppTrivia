'use strict';
app.controller("generalCtrl", function($scope, $location, $timeout){

	$scope.contador=10;
	$scope.correctas=0;
	$scope.saludo="Hola";  
	$scope.audios="audio/stand.mp3";
	$scope.classAnimate='animated swing';

	var classIncorrect='animated wobble horizontal';
	var classCorrect='animated wobble vertical'
	//$scope.p1={};
	$scope.stl='';
	$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered	    
	    $('.modal-trigger').leanModal();
	    $('.carousel.carousel-slider').carousel({full_width: true});

	});
	$scope.irP1=function(){
		window.location.href = '#modal1';
		//$('#modal2').openModal();
	}
	$scope.VP1=function(p1){
//		contador++;
		if (p1=="a") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP2();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP2();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	
	$scope.irP2=function(){
		$scope.stl='';
		$('#modal1').closeModal();
		$('#modal2').openModal();
	}
	$scope.VP2=function(p2){
		//contador++;
		if (p2=="b") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP3();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP3();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP3=function(){
		$scope.stl='';
		$('#modal2').closeModal();
		$('#modal3').openModal();
	}
	$scope.VP3=function(p3){
		//contador++;
		if (p3=="c") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP4();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP4();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP4=function(){
		$scope.stl='';
		$('#modal3').closeModal();
		$('#modal4').openModal();
	}
	$scope.VP4=function(p4){
		//contador++;
		if (p4=="d") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP5();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP5();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP5=function(){
		$scope.stl='';
		$('#modal4').closeModal();
		$('#modal5').openModal();
	}
	$scope.VP5=function(p5){
		//contador++;
		if (p5=="a") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP6();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP6();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP6=function(){
		$scope.stl='';
		$('#modal5').closeModal();
		$('#modal6').openModal();
	}
	$scope.VP6=function(p6){
		//contador++;
		if (p6=="b") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP7();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP7();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP7=function(){
		$scope.stl='';
		$('#modal6').closeModal();
		$('#modal7').openModal();
	}
	$scope.VP7=function(p7){
		//contador++;
		if (p7=="c") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP8();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP8();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP8=function(){
		$scope.stl='';
		$('#modal7').closeModal();
		$('#modal8').openModal();
	}
	$scope.VP8=function(p8){
		//contador++;
		if (p8=="d") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP9();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP9();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP9=function(){
		$scope.stl='';
		$('#modal8').closeModal();
		$('#modal9').openModal();
	}
	$scope.VP9=function(p9){
		//contador++;
		if (p9=="a") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irP10();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irP10();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irP10=function(){
		$scope.stl='';
		$('#modal9').closeModal();
		$('#modal10').openModal();		
	}
	$scope.VP10=function(p10){
		//contador++;
		if (p10=="b") {
			$scope.stl='animated rotateOut';
			$timeout(function() {
				$scope.irTest();
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			$timeout(function() {
				$scope.irTest();
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irTest=function(){
		if ($scope.correctas>=6) {
			$scope.resTitulo='Felicidades!!!';
			$scope.resDescripcion='Acertaste en un 60%';
		}else{
			$scope.resTitulo='Esfuerzate mas!!!';
			$scope.resDescripcion='Acertaste menos de un 50%';
		}
		$('#modal10').closeModal();
		$('#modalResultado').openModal();
	}

	$scope.reiniciarT=function() {
		$scope.contador=10;
		$scope.correctas=0;
	}

	$scope.enviarp1= function(altPregunta1){
		$scope.audios='';
		if (altPregunta1='opcion2') {
			$scope.audios="audio/correct.mp3";
		}
		else{
			$scope.audios="audio/incorrect.mp3";
		}
	}

	$scope.pageClass = 'page-about';
	


});