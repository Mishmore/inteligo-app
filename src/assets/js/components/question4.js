function Question4(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:36.9%"></div>');

	var h3 = $('<h3>' + state.questions.pregunta4.pregunta +'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');

  	var divA = $('<div class="lbl-question"></div>');
  	var labelA = $('<label>'+ state.questions.pregunta4.opciones.a.texto +'</label>');
	var inputA = $('<input type="radio" id="question4-a" data-option="a" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.a.valor +'">');
	
	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+ state.questions.pregunta4.opciones.b.texto +'</label>');
	var inputB = $('<input type="radio" id="question4-b" data-option="b" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.b.valor +'">');
	
	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+ state.questions.pregunta4.opciones.c.texto +'</label>');
	var inputC = $('<input type="radio" id="question4-c" data-option="c" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.c.valor +'">');
	
	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+ state.questions.pregunta4.opciones.d.texto +'</label>');
	var inputD = $('<input type="radio" id="question4-d" data-option="d" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.d.valor +'">');
	
	var divE = $('<div class="lbl-question"></div>');
	var labelE = $('<label>'+ state.questions.pregunta4.opciones.e.texto +'</label>');
	var inputE = $('<input type="radio"   id="question4-e" data-option="e" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.e.valor +'">');
	
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	container.append(form);

	form.append(divA);
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)
	form.append(divD);
	divD.append(inputD,labelD);
	form.append(divE);
	divE.append(inputE,labelE);

	if (inputA[0].id == idChecked4) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked4) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked4) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked4) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked4) {
		inputE[0].checked = true;
		btn.prop('disabled', false);
	} 

	
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta4 = $("input[name='option-4']:checked").val();
		option4 = $("input[name='option-4']:checked").attr('data-option');
		idChecked4 = $("input[name='option-4']:checked").attr("id");
		// option4 = option.slice(-1);
      if(pregunta4){
				sumaX += parseInt(pregunta4);
				console.log(sumaX);
      }
		state.screenView = "question-5";
		update();
	});

	return container;
}
