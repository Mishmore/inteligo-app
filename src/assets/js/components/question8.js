function Question8(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:100%"><span class="sr-only">100% Complete</span></div>');


	var h3 = $('<h3>'+state.questions.pregunta8.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.a.valor +'">'+state.questions.pregunta8.opciones.a.texto+'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.b.valor +'">'+state.questions.pregunta8.opciones.b.texto+'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.c.valor +'">'+state.questions.pregunta8.opciones.c.texto+'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.d.valor +'">'+state.questions.pregunta8.opciones.d.texto+'</label>');
  var divE = $('<div class=""></div>');
  var radioE = $('<label><input type="radio" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.e.valor +'">'+state.questions.pregunta8.opciones.e.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Continuar</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta8 = $("input[name='option-8']:checked").val();
      if(pregunta8){
					sumaY += parseInt(pregunta8);
					console.log(sumaY);
      }
		state.screenView = "profile";
		update();
	});

	return container;
}
