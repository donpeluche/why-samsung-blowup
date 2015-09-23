jQuery(document).ready(function($) {
	window.scrollTo(0,1);
	//slider
	$('#paso1').flexslider({
		slideshow: false,
		animation: "slide",
		animationLoop: false,
		controlNav: true,
		manualControls: ".controls li",
		directionNav: false,
		touch: true,
    	easing: false,
		after: function(slider) {
			if($('#iniciar').hasClass('flex-active-slide')){
				$('#paso1').addClass('cambiofondo');  
			}
		 	else {
			 $('#paso1').removeClass('cambiofondo');
			 }
		},
		start: function(slider) {
			$('#comenzar').click(function(){
                     slider.flexAnimate(1);
			});
		}

	});	
		
	$('#video').hide();
	$('#resultado1').hide();
	$('#resultado2').hide();
	$('.guia').hide();
	$('.ok').hide();
	$('.ok2').hide();
	$('.ok3').hide();
	$('#capturar1').hide();
	$('#capturar2').hide();
	$('.repetir').hide();
	$('.repetir2').hide();
	$('.mensaje').hide();
	$('#slider').hide();
	$('#crear').hide();
	$('#icono').hide();
	//paso 1 a 2
	$('#tomar-foto').click(function(){
		$('#paso1').fadeOut();
		$('#paso2').fadeIn();
		//elementos
		$('#video').fadeIn();
		$('#resultado1').hide();
		$('#resultado2').hide();
		$('.guia').fadeIn();
		$('.ok').hide();
		$('.ok2').hide();
		$('.ok3').hide();
		$('#capturar1').fadeIn();
		$('#capturar2').hide();
		$('.repetir').hide();
		$('.repetir2').hide();
		$('.mensaje').hide();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
		$('#mascara1').css({position: 'initial', width:'100%', 'overflow': 'inherit'});
	});
	//paso 2 - capturar foto y comprobar
	$('#capturar1').click(function(){
		$('#video').hide();
		$('#resultado1').show();
		$('#resultado2').hide();
		$('.guia').hide();
		$('.ok').show();
		$('.ok2').hide();
		$('.ok3').hide();
		$('#capturar1').hide();
		$('#capturar2').hide();
		$('.repetir').show();
		$('.repetir2').hide();
		$('.mensaje').hide();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
	});
	$('.ok').click(function(){
		$('#video').hide();
		$('#resultado1').show();
		$('#resultado2').hide();
		$('.guia').hide();
		$('.ok').hide();
		$('.ok2').fadeIn();
		$('.ok3').hide();
		$('#capturar1').hide();
		$('#capturar2').hide();
		$('.repetir').hide();
		$('.repetir2').hide();
		$('.mensaje').fadeIn();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
	});
	$('.ok2').click(function(){
		$('#video').show();
		$('#resultado1').show();
		$('#resultado2').hide();
		$('.guia').fadeIn();
		$('.ok').hide();
		$('.ok2').hide();
		$('.ok3').hide();
		$('#capturar1').hide();
		$('#capturar2').fadeIn();
		$('.repetir').hide();
		$('.repetir2').hide();
		$('.mensaje').fadeOut();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
		$('#mascara1').css({position: 'absolute', width:'50%', 'overflow': 'hidden'});
	});
	$('#paso2 .repetir').click(function(){
		$('#video').show();
		$('#resultado1').hide();
		$('#resultado2').hide();
		$('.guia').show();
		$('.ok').hide();
		$('.ok2').hide();
		$('.ok3').hide();
		$('#capturar1').show();
		$('#capturar2').hide();
		$('.repetir').hide();
		$('.repetir2').hide();
		$('.mensaje').hide();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
	});
	
	//paso 3 a 4
	$('#capturar2').click(function(){
		$('#video').hide();
		$('#resultado1').show();
		$('#resultado2').show();
		$('.guia').hide();
		$('.ok').hide();
		$('.ok2').hide();
		$('.ok3').show();
		$('#capturar1').hide();
		$('#capturar2').hide();
		$('.repetir').hide();
		$('.repetir2').show();
		$('.mensaje').hide();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
	});	
	$('#paso2 .repetir2').click(function(){
		$('#video').show();
		$('#resultado1').show();
		$('#resultado2').hide();
		$('.guia').fadeIn();
		$('.ok').hide();
		$('.ok2').hide();
		$('.ok3').hide();
		$('#capturar1').hide();
		$('#capturar2').fadeIn();
		$('.repetir').hide();
		$('.repetir2').hide();
		$('.mensaje').fadeOut();
		$('#slider').hide();
		$('#crear').hide();
		$('#icono').hide();
		$('#mascara1').css({position: 'absolute', width:'50%', 'overflow': 'hidden'});
	});
	$('.ok3').click(function(){
		$('#video').hide();
		$('#resultado1').show();
		$('#resultado2').show();
		$('.guia').hide();
		$('.ok').hide();
		$('.ok2').hide();
		$('.ok3').hide();
		$('#capturar1').hide();
		$('#capturar2').hide();
		$('.repetir').hide();
		$('.repetir2').hide();
		$('.mensaje').hide();
		$('#slider').fadeIn();
		$('#crear').fadeIn();
		$('#icono').fadeIn();
		function explode(){
		  $('#icono').fadeOut();
		}
		setTimeout(explode, 2000);
	});
	$('.camara').click(function(){
		$('#icono').fadeOut();
	});
	//paso 2 a 1 
	$('#crear').click(function(){
		$('#paso2').fadeOut();
		$('#paso1').fadeIn();		
	});
	$('#paso2 .volver').click(function(){
		$('#paso2').fadeOut();
		$('#paso1').fadeIn();		
	});


	//Configuracion de cámara
    var canvas = document.getElementById("resultado1"),
        context = canvas.getContext("2d"),
        canvas2 = document.getElementById("resultado2"),
        context2 = canvas2.getContext("2d"),
        video = document.getElementById("video"),
        errBack = function(error) {
            console.log("Video capture error: ", error.code); 
        };

    MediaStreamTrack.getSources(function(sourceInfos) {
      var audioSource = null;
      var videoSource = null;
      //Revisa las camaras disponibles y almacena la ultima (la segunda en la tablet)
      for (var i = 0; i != sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'video') {
            videoObj = {
              video: {
                optional: [{sourceId: sourceInfo.id}]
              }
            };
        }
      }
      mostrarVideo(videoObj);
    });

    function mostrarVideo(videoObj){
        //Reconoce camaras
        if(navigator.getUserMedia) { // Standard
            navigator.getUserMedia(videoObj, function(stream) {
                video.src = stream;
                video.play();
            }, errBack);
        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
            navigator.webkitGetUserMedia(videoObj, function(stream){
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errBack);
        } else if(navigator.mozGetUserMedia) { // WebKit-prefixed
            navigator.mozGetUserMedia(videoObj, function(stream){
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
    }

    $("#capturar1").click(function(){
        context.drawImage(video, 0, 0, 574, 765);
    });
    $("#capturar2").click(function(){
        context2.drawImage(video, 0, 0, 574, 765);
    });

});
