function Question2(update) {
	var container = $('<div class="container"></div>');
	var h3 = $('<h3></h3>');
	var form = $('<form></form>');
	var divA = $('<div class="radio"></div>');
	var radioA = $('<label><input type="radio" name="option">Seguridad</label>');
	var divB = $('<div class="radio"></div>');
	var radioB = $('<label><input type="radio" name="option">Protección a la inflación</label>');
	var divC = $('<div class="radio"></div>');
	var radioC = $('<label><input type="radio" name="option">Crecimiento y seguridad</label>');
	var divD = $('<div class="radio"></div>');
	var radioD = $('<label><input type="radio" name="option">Crecimiento</label>');
	var divE = $('<div class="radio"></div>');
	var radioE = $('<label><input type="radio" name="option">Máximo Crecimiento</label>');
	var btn = $('<button type="button" class="btn btn-primary">Continuar</button>');

	container.append(h3);
	container.append(form);
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
		state.screenView = "question-3";
		update();
	});
	return container;
}
