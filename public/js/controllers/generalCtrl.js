'use strict';
app.controller("generalCtrl", function($scope, $location, $timeout){


	var correcto = new Audio('audio/correct.mp3');
	var incorrecto = new Audio('audio/incorrect.mp3');

	$scope.contador=5;
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
		if (p5=="a") {
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
		var x = Math.floor((Math.random() * 19) + 1);
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
	$scope.VP11=function(p11){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p11=="a") {
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
	$scope.VP12=function(p12){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p12=="b") {
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
	$scope.VP13=function(p13){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p13=="a") {
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
	$scope.VP14=function(p14){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p14=="b") {
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
	$scope.VP15=function(p15){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p15=="b") {
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
	$scope.VP16=function(p16){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p16=="a") {
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
	$scope.VP17=function(p17){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p17=="b") {
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
	$scope.VP18=function(p18){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p18=="a") {
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
	$scope.VP19=function(p19){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p19=="b") {
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
	$scope.VP20=function(p20){
		//contador++;
		var x = Math.floor((Math.random() * 19) + 1);
		if (p20=="c") {
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
		if ($scope.correctas>=3) {
			$scope.resTitulo='Felicidades!!!';
			$scope.resDescripcion='Acertaste más de un 50%';
			correcto.currentTime=0;
			correcto.play();
		}else{
			$scope.resTitulo='Esfuérzate más!!!';
			$scope.resDescripcion='Acertaste menos de un 50%';
			incorrecto.currentTime=0;
			incorrecto.play();
		}
		$('#modal10').closeModal();
		$('#modalResultado').openModal();
	}

	$scope.reiniciarT=function() {
		$scope.contador=5;
		$scope.contadorP=0;
		$scope.correctas=0;
		$scope.p1='';
		$scope.p2='';
		$scope.p3='';
		$scope.p4='';
		$scope.p5='';
		$scope.p6='';
		$scope.p7='';
		$scope.p8='';
		$scope.p9='';
		$scope.p10='';
		$scope.p11='';
		$scope.p12='';
		$scope.p13='';
		$scope.p14='';
		$scope.p15='';
		$scope.p16='';
		$scope.p17='';
		$scope.p18='';
		$scope.p19='';
		$scope.p20='';
	}
	//$scope.pageClass = 'page-about';	
	$scope.validarIda=function (x) {
		$scope.audiosT="";
		$scope.contadorP++;
		if ($scope.contadorP==5) {
			x=100;
		}
		var abrirmodal= '#modal'+(x+1);
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 10:
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
				//$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 11:
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
				$('#modal11').closeModal();
				//$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 12:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				//$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 13:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				//$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 14:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				//$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 15:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				//$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 16:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				//$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 17:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				//$('#modal18').closeModal();
				$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 18:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				//$('#modal19').closeModal();
				$('#modal20').closeModal();
				$(abrirmodal).openModal();
		      	break;
		    case 19:
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
				$('#modal11').closeModal();
				$('#modal12').closeModal();
				$('#modal13').closeModal();
				$('#modal14').closeModal();
				$('#modal15').closeModal();
				$('#modal16').closeModal();
				$('#modal17').closeModal();
				$('#modal18').closeModal();
				$('#modal19').closeModal();
				//$('#modal20').closeModal();
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