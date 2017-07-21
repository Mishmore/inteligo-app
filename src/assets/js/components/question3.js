function Question3(update) {
	var container = $('<div class="container"></div>');
	var h3 = $('<h3>'+ state.questions.pregunta3.pregunta +'</h3>');
	var form = $('<form></form>');
  var divA = $('<div class="radio"></div>');
  var radioA = $('<label><input type="radio" name="option">'+ state.questions.pregunta3.opciones.a.texto +'</label>');
  var divB = $('<div class="radio"></div>');
  var radioB = $('<label><input type="radio" name="option">'+ state.questions.pregunta3.opciones.b.texto +'</label>');
  var divC = $('<div class="radio"></div>');
  var radioC = $('<label><input type="radio" name="option">'+ state.questions.pregunta3.opciones.c.texto +'</label>');
  var divD = $('<div class="radio"></div>');
  var radioD = $('<label><input type="radio" name="option">'+ state.questions.pregunta3.opciones.d.texto +'</label>');
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
	form.append(btn);

	btn.on('click', function(e) {
		state.screenView = "question-4";
		update();
	});
	return container;
}
