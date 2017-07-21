function Question6(update) {
	var container = $('<div class="container"></div>');
	var h3 = $('<h3>'+state.questions.pregunta6.pregunta+'</h3>');
	var form = $('<form></form>');
	var divA = $('<div class="radio"></div>');
	var radioA = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.a.valor +'">'+state.questions.pregunta6.opciones.a.texto+'</label>');
	var divB = $('<div class="radio"></div>');
	var radioB = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.b.valor +'">'+state.questions.pregunta6.opciones.b.texto+'</label>');
	var divC = $('<div class="radio"></div>');
	var radioC = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.c.valor +'">'+state.questions.pregunta6.opciones.c.texto+'</label>');
	var divD = $('<div class="radio"></div>');
	var radioD = $('<label><input type="radio" name="option-6" value="'+ state.questions.pregunta6.opciones.d.valor +'">'+state.questions.pregunta6.opciones.d.texto+'</label>');

//   <input type="radio" value="si" name="pregunta" id="pregunta_si"/> SI
// <input type="radio" value="no" name="pregunta" id="pregunta_no"/> NO
// <input type="radio" value="nsnc" name="pregunta" id="pregunta_nsnc"/> NS/NC
// El siguiente código permite determinar si cada radiobutton ha sido seleccionado o no:
// var elementos = document.getElementsByName("pregunta");
// for(var i=0; i<elementos.length; i++) {
// alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " +
// elementos[i].checked);

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
		var radioValue = $("input[name='option-6']:checked").val();
			if(radioValue){
				sumaY += parseInt(radioValue);
				console.log(sumaY);
			}
		state.screenView = "question-7";
		update();
	});

	return container;
}
