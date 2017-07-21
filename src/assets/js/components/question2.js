function Question2(update) {
	var container = $('<div class="container"></div>');
	var h3 = $('<h3>'+ '2'+state.questions.pregunta2.pregunta +'</h3>');
	var form = $('<form></form>');

	var divA = $('<div class="radio"></div>');
	var radioA = $('<label><input type="radio" name="option-2" value="'+ state.questions.pregunta2.opciones.a.valor +'">'+state.questions.pregunta2.opciones.a.texto+'</label>');
	var divB = $('<div class="radio"></div>');
	var radioB = $('<label><input type="radio" name="option-2" value="'+ state.questions.pregunta2.opciones.b.valor +'">'+state.questions.pregunta2.opciones.b.texto+'</label>');
	var divC = $('<div class="radio"></div>');
	var radioC = $('<label><input type="radio" name="option-2" value="'+ state.questions.pregunta2.opciones.c.valor +'">'+state.questions.pregunta2.opciones.c.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary">Continuar</button>');

	container.append(h3);
	container.append(form);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)

	form.append(btn);

	btn.on('click', function(e) {
		 var radioValue = $("input[name='option-2']:checked").val();
			if(radioValue){
				// state.pregunta2 = parseInt(radioValue);
				// alert("Your are 1 - " + parseInt(state.pregunta2));
				sumaX += parseInt(radioValue);
				console.log(sumaX);
			}
		state.screenView = "question-3";

		update();
	});
	return container;
}
