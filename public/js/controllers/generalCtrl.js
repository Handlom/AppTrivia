'use strict';
app.controller("generalCtrl", function($scope, $location, $timeout){


	var correcto = new Audio('audio/correct.mp3');
	var incorrecto = new Audio('audio/incorrect.mp3');

	$scope.contador=10;
	$scope.contadorP=0;
	$scope.correctas=0;
	$scope.saludo="Hola";  
	$scope.audios="audio/stand.mp3";

	
	$scope.classAnimate='animated swing';

	var classIncorrect='animated wobble horizontal';
	var classCorrect='animated wobble vertical'
	//$scope.p1={};
	$scope.stl='';
	$scope.audiosT="";
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
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p1=="b") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {				
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}	
	$scope.VP2=function(p2){
		var x = Math.floor((Math.random() * 9) + 1);
		if (p2=="a") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);			
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP3=function(p3){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p3=="d") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP4=function(p4){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p4=="c") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP5=function(p5){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p5=="c") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP6=function(p6){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p6=="a") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP7=function(p7){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p7=="d") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP8=function(p8){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p8=="a") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP9=function(p9){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p9=="c") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.VP10=function(p10){
		//contador++;
		var x = Math.floor((Math.random() * 9) + 1);
		if (p10=="a") {
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 405);
			$scope.correctas++;	
		}
		else {
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$timeout(function() {
				$scope.validarIda(x);
			}, 1250);	
		}		
		return $scope.stl;		
	}
	$scope.irTest=function(){
		if ($scope.correctas>=6) {
			$scope.resTitulo='Felicidades!!!';
			$scope.resDescripcion='Acertaste mas de un 50%';
			correcto.currentTime=0;
			correcto.play();
		}else{
			$scope.resTitulo='Esfuerzate mas!!!';
			$scope.resDescripcion='Acertaste menos de un 50%';
			incorrecto.currentTime=0;
			incorrecto.play();
		}
		$('#modal10').closeModal();
		$('#modalResultado').openModal();
	}

	$scope.reiniciarT=function() {
		$scope.contador=10;
		$scope.contadorP=0;
		$scope.correctas=0;
	}



	$scope.pageClass = 'page-about';
	
	$scope.validarIda=function (x) {
		$scope.audiosT="";
		console.log("$scope.audiosT"+$scope.audiosT);
		$scope.contadorP++;
		if ($scope.contadorP==5) {
			x=100;
		}
		console.log("x: "+x);
		//var cerrarmodal= '#modal1';
		var abrirmodal= '#modal'+(x+1);
		console.log(abrirmodal);
		switch(x) {
		    case 1:
				$scope.stl='';
				$('#modal1').closeModal();
				//$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 2:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				//$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 3:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				//$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 4:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				//$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 5:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				//$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 6:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				//$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 7:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				//$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 8:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				//$('#modal9').closeModal();
				$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 9:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				//$('#modal10').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 100:
		      $scope.stl='';
				$('#modal1').closeModal();
				$('#modal2').closeModal();
				$('#modal3').closeModal();
				$('#modal4').closeModal();
				$('#modal5').closeModal();
				$('#modal6').closeModal();
				$('#modal7').closeModal();
				$('#modal8').closeModal();
				$('#modal9').closeModal();
				$('#modal10').closeModal();
				$('#modalResultado').openModal();
				$scope.irTest();
		      	break;
		  }
	}

});