function Question1(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper col-sm-4 hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">')
	var title = $('<h5>Descubriendo tu perfil</h5>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="loading"></div>');
	var loadingBase = $('<div class="loading-base"></div>');

	var form = $('<form class="col-sm-8"></form>');
	var h3 = $('<h3>'+ state.questions.pregunta1.pregunta +'</h3>');
	var divA = $('<div class="radio"></div>');
	var radioA = $('<input type="radio" class="radio" name="option"><label>Seguridad</label>');
	var divB = $('<div class="radio"></div>');
	var radioB = $('<input type="radio" class="radio" name="option"><label>Protección a la inflación</label>');
	var divC = $('<div class="radio"></div>');
	var radioC = $('<input type="radio" class="radio" name="option"><label>Crecimiento y seguridad</label>');
	var divD = $('<div class="radio"></div>');
	var radioD = $('<input type="radio" class="radio" name="option"><label>Crecimiento</label>');
	var divE = $('<div class="radio"></div>');
	var radioE = $('<input type="radio" class="radio" name="option"><label>Máximo Crecimiento</label>');
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
	form.append(divD);
	divD.append(radioD);
	form.append(divE);
	divE.append(radioE);
	form.append(btn);

	btn.on('click', function(e) {
		state.screenView = "question-2";
		update();
	});
	return container;
}
