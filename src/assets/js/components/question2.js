function Question2(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:14.3%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta2.pregunta +'</h3>');

	var divA = $('<div class="radio"></div>');
	var radioA = $('<label><input type="radio" name="option-2" value="'+ state.questions.pregunta2.opciones.a.valor +'">'+state.questions.pregunta2.opciones.a.texto+'</label>');
	var divB = $('<div class="radio"></div>');
	var radioB = $('<label><input type="radio" name="option-2" value="'+ state.questions.pregunta2.opciones.b.valor +'">'+state.questions.pregunta2.opciones.b.texto+'</label>');
	var divC = $('<div class="radio"></div>');
	var radioC = $('<label><input type="radio" name="option-2" value="'+ state.questions.pregunta2.opciones.c.valor +'">'+state.questions.pregunta2.opciones.c.texto+'</label>');

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
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		 pregunta2 = $("input[name='option-2']:checked").val();
			if(pregunta2){
				sumaX += parseInt(pregunta2);
				console.log(sumaX);
			}
			state.screenView = "question-3";
			update();
	});

	return container;
}
