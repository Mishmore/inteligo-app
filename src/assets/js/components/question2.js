function Question2(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper col-sm-4 hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">')
	var title = $('<h5>Descubriendo tu perfil</h5>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="loading"></div>');
	var loadingBase = $('<div class="loading-base"></div>');

	var form = $('<form class="col-xs-12 col-sm-8"></form>');
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
	divAzul.append(title);
	divAzul.append(divLoad);
	divLoad.append(loading);
	divLoad.append(loadingBase);
	logoDiv.append(img);
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
