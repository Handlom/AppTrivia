'use strict';
app.controller("generalCtrl", function($scope,$firebaseArray, $firebaseObject, $location, $timeout){


	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	   // window.location.href='#trivia';
	  } else {
	    window.location.href='#';
	  }
	});

	orden();
	$scope.preguntaw = Math.floor((Math.random() * 19) + 1);
	var preguntaX=[];
	preguntaX.push($scope.preguntaw);

	$scope.tiempoJugado=0;
	var cronometro;

	$scope.numPregunta=1;
	var refPre = firebase.database().ref("pregunta");
	$scope.objBDPregunta = $firebaseArray(refPre);	

	var refReporte = firebase.database().ref("reporte");
	$scope.objBDReporte = $firebaseArray(refReporte);
	$scope.objReporte={
		TiempoJugado: 0,
		Fecha: '',
		Hora: ''
	};
	var contador_s;
	var contador_m;
	
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
				preguntaX.push(pw);
				for (var i = 0; i < preguntaX.length; i++) {
					//console.log('preguntaX[i]: '+preguntaX[i]);
					//console.log('Nº Aleatorio : '+px);
					if (px==preguntaX[i]) {
						//console.log('Nº actual: '+preguntaX[i]);
						px = Math.floor((Math.random() * 19) + 1);						
						$scope.preguntaw=px;
						//console.log('px nuevo numero: '+px);
						//console.log('RI, Iguales->Nº aleatorio nuevo: '+$scope.preguntaw);
						break;
					}else{
						$scope.preguntaw=px;
						//console.log('RI, No son iguales->: '+$scope.preguntaw);
					}
				}
				//$("#pre1").insertBefore("#pre3");
			}, 700);
			$timeout(function() {
				//$("#pre3").insertBefore("#pre2");
				orden();
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
				preguntaX.push(pw);
				for (var i = 0; i < preguntaX.length; i++) {
					if (px==preguntaX[i]) {
						px = Math.floor((Math.random() * 19) + 1);						
						$scope.preguntaw=px;
						break;
					}else{
						$scope.preguntaw=px;
					}
				}
			}, 700);
			$timeout(function() {
				orden();
				$('#modalTest').openModal({dismissible: false,opacity: 0, out_duration: 600});
			}, 800);
		}
	};
	$scope.terminarReto=function(){
		$scope.detenerCronometro();
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
	
    $scope.detenerCronometro=function(){	
    	var ahora = new Date();
		var dia= ahora.getDate(); 
		var mes= ahora.getMonth() + 1; 
		var año= ahora.getFullYear(); 
		var hora = ahora.getHours();
		var minutos = ahora.getMinutes();

		var fecha = dia+'/'+mes+'/'+año;
		var hora = hora+':'+minutos;
		$scope.objReporte={
			TiempoJugado: $scope.tiempoJugado,
			Fecha: fecha,
			Hora: hora
		};
    	$scope.objBDReporte.$add($scope.objReporte);
        clearInterval(cronometro);
    };
    
    $scope.iniciarCronometro=function(){
	    contador_s =0;
	    contador_m =0;
	    var s;
	    var m;
	    cronometro = setInterval(
	        function(){
	            /*if(contador_s==60){
	                contador_s=0;
	                contador_m++;
	                m  = contador_m;
	                if(contador_m==60){
	                    contador_m=0;
	                }
	            }*/
	            s  = contador_s;
	            contador_s++;
	            $scope.tiempoJugado=contador_s;
	            
	        }
	        ,1000);
    };

    function orden(){
    	var z = Math.floor((Math.random() * 4) + 1);
    	console.log('z: '+z);
    	switch(z) {
		    case 1:
		        $("#pre3").insertBefore("#pre1");
		        break;
		    case 2:
		        $("#pre3").insertBefore("#pre2");
		        break;
		    case 3:
		        $("#pre3").insertBefore("#pre3");
		        break;
		    case 4:
		        $("#pre3").insertAfter("#pre4");
		        break;
		    default:
		       $("#pre3").insertBefore("#pre1");
		}
    };	
});