function Question6(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:60.5%"></div>');

	var h3 = $('<h3>'+state.questions.pregunta6.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');

	var divA = $('<div class="lbl-question"></div>');
	var labelA = $('<label>'+state.questions.pregunta6.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" id="question6-a" data-option="a" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.a.valor +'">');
	
	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+state.questions.pregunta6.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" id="question6-b" data-option="b" name="option-6"  class="option-input radio" value="'+ state.questions.pregunta6.opciones.b.valor +'">');
	
	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+state.questions.pregunta6.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" id="question6-c" data-option="c" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.c.valor +'">');
	
	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+state.questions.pregunta6.opciones.d.texto+'</label>');
	var inputD = $('<input type="radio" id="question6-d" data-option="d" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.d.valor +'">');

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

	form.append(divA);
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)
	form.append(divD);
	divD.append(inputD,labelD);

	if (inputA[0].id == idChecked6) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked6) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked6) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked6) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} 


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta6 = $("input[name='option-6']:checked").val();
		option6 = $("input[name='option-6']:checked").attr('data-option');
		idChecked6 = $("input[name='option-6']:checked").attr("id");
		// option6 = option.slice(-1);

			if(pregunta6){
				sumaY += parseInt(pregunta6);
				console.log(sumaY);
			}
		state.screenView = "question-7";
		update();
	});

	return container;
}
