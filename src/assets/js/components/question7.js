function Question7(update) {
	var container = $('<div class="container"></div>');
	var h3 = $('<h3>'+state.questions.pregunta7.pregunta+'</h3>');
	var form = $('<form></form>');
	var divA = $('<div class="radio"></div>');
  var radioA = $('<label><input type="radio" name="option-7" value="'+ state.questions.pregunta7.opciones.a.valor +'">'+state.questions.pregunta7.opciones.a.texto+'</label>');
  var divB = $('<div class="radio"></div>');
  var radioB = $('<label><input type="radio" name="option-7" value="'+ state.questions.pregunta7.opciones.b.valor +'">'+state.questions.pregunta7.opciones.b.texto+'</label>');
  var divC = $('<div class="radio"></div>');
  var radioC = $('<label><input type="radio" name="option-7" value="'+ state.questions.pregunta7.opciones.c.valor +'">'+state.questions.pregunta7.opciones.c.texto+'</label>');
  var divD = $('<div class="radio"></div>');
  var radioD = $('<label><input type="radio" name="option-7" value="'+ state.questions.pregunta7.opciones.d.valor +'">'+state.questions.pregunta7.opciones.d.texto+'</label>');
  var divE = $('<div class="radio"></div>');
  var radioE = $('<label><input type="radio" name="option-7" value="'+ state.questions.pregunta7.opciones.e.valor +'">'+state.questions.pregunta7.opciones.e.texto+'</label>');

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
		var radioValue = $("input[name='option-7]:checked").val();
			if(radioValue){
				sumaY += parseInt(radioValue);
				console.log(sumaY);
			}
		state.screenView = "question-8";
		update();
	});

	return container;
}
