function Question6(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">')

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:62.5%"></div>');

	var h3 = $('<h3>'+state.questions.pregunta6.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-8"></form>');
	var divA = $('<div class="radio"></div>');
	var radioA = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.a.valor +'">'+state.questions.pregunta6.opciones.a.texto+'</label>');
	var divB = $('<div class="radio"></div>');
	var radioB = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.b.valor +'">'+state.questions.pregunta6.opciones.b.texto+'</label>');
	var divC = $('<div class="radio"></div>');
	var radioC = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.c.valor +'">'+state.questions.pregunta6.opciones.c.texto+'</label>');
	var divD = $('<div class="radio"></div>');
	var radioD = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.d.valor +'">'+state.questions.pregunta6.opciones.d.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Continuar</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img);
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
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta6 = $("input[name='option-6']:checked").val();
			if(pregunta6){
				sumaY += parseInt(pregunta6);
				console.log(sumaY);
			}
		state.screenView = "question-7";
		update();
	});

	return container;
}
