'use strict';
app.controller("generalCtrl", function($scope,$firebaseArray, $firebaseObject, $location, $timeout){

	$scope.preguntaw = Math.floor((Math.random() * 19) + 1);
	var preguntaX=[];
	preguntaX.push($scope.preguntaw)

	$scope.numPregunta=1;

	var refPre = firebase.database().ref("pregunta");
	$scope.objBDPregunta = $firebaseArray(refPre);
	$scope.objPregunta={};
	
	var correcto = new Audio('audio/correct.mp3');
	var incorrecto = new Audio('audio/incorrect.mp3');

	$scope.contador=5;
	$scope.contadorP=0;
	$scope.correctas=0;
	$scope.audios="audio/stand.mp3";
	$scope.classAnimate='animated swing';
	$scope.audiosT="";

	var arrayReto=[];
	$scope.reto={};
	
	$(document).ready(function(){
	    $('.modal-trigger').leanModal({
			  dismissible: false,
			  opacity: .0
			}
		);
		$('.carousel.carousel-slider').carousel({full_width: true});
	});	

	$scope.validarPregunta=function(respuesta, pre, pw){	
		$scope.contadorP++;
		$scope.numPregunta++;
		arrayReto.push(pre);
		if ($scope.contadorP==5) {
			if (respuesta==pre.respuesta) {
				$scope.correctas++;
				$scope.stl='animated rotateOut';
				correcto.currentTime=0;
				correcto.play();
				$('#modalTest').closeModal({dismissible: false,opacity: 0, out_duration: 600});
				$timeout(function() {
					$scope.evaluarReto();
				}, 700);
			}else {
				$scope.stl='animated wobble horizontal';
				incorrecto.currentTime=0;
				incorrecto.play();
				$('#modalTest').closeModal({dismissible: false,opacity: 0, out_duration: 600});
				$timeout(function() {
					$scope.evaluarReto();
				}, 700);
			}
						
		}else{
			$scope.SgtPregunta(respuesta, pre, pw);
		}	
	};
	$scope.SgtPregunta=function(respuesta, pre, pw){
		if (respuesta==pre.respuesta) {
			$scope.correctas++;
			$scope.stl='animated rotateOut';
			correcto.currentTime=0;
			correcto.play();
			$('#modalTest').closeModal({dismissible: false,opacity: 0, out_duration: 600});
			$timeout(function() {
				$scope.stl='';		
				var px = Math.floor((Math.random() * 19) + 1);
				preguntaX.push(px);				
				for (var i = 0; i < preguntaX.length; i++) {					
					if (preguntaX[i]==pw) {
						px = Math.floor((Math.random() * 19) + 1);
						$scope.preguntaw=px;
					}else{
						$scope.preguntaw=px;
					}
				}
			}, 700);
			$timeout(function() {
				$('#modalTest').openModal({dismissible: false,opacity: 0, out_duration: 600});
			}, 800);

		}else{
			$scope.stl='animated wobble horizontal';
			incorrecto.currentTime=0;
			incorrecto.play();
			$('#modalTest').closeModal({dismissible: false,opacity: 0, out_duration: 600});
			$timeout(function() {
				$scope.stl='';
				var px = Math.floor((Math.random() * 19) + 1);
				preguntaX.push(px);
				for (var i = 0; i < preguntaX.length; i++) {
					console.log('preguntaX[i]: '+preguntaX[i]);
					if (preguntaX[i]==pw) {
						px = Math.floor((Math.random() * 19) + 1);
						$scope.preguntaw=px;
					}else{
						$scope.preguntaw=px;
					}
				}
			}, 700);
			$timeout(function() {
				$('#modalTest').openModal({dismissible: false,opacity: 0, out_duration: 600});
			}, 800);
		}
	};
	$scope.terminarReto=function(){
		window.location.href="#";
		$('#modalTest').closeModal();
		$('#modalResultado').closeModal();
	};
	$scope.evaluarReto=function(){
		$scope.retoFeedBack=arrayReto;
		console.log($scope.retoFeedBack);
		if ($scope.correctas>=3) {
			$scope.resTitulo='Felicidades!!!';
			$scope.resDescripcion='Acertaste '+$scope.correctas+' de '+ $scope.contador;
		}else{
			$scope.resTitulo='Esfuérzate más!!!';
			$scope.resDescripcion='Acertaste '+$scope.correctas+' de '+ $scope.contador;
		}
		$timeout(function() {
				$('#modalResultado').openModal({dismissible: false, opacity: 0});
			}, 800);
	};	
	$scope.irP1=function(){
		window.location.href = '#modaltest';
	};
});