function Question3(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:24.6%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta3.pregunta +'</h3>');

	var divA = $('<div class="lbl-question"></div>');
	var labelA = $('<label>'+ state.questions.pregunta3.opciones.a.texto +'</label>');
	var inputA = $('<input type="radio" data-option="a" id="question3-a" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.a.valor +'">');
	
	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+ state.questions.pregunta3.opciones.b.texto +'</label>');
	var inputB = $('<input type="radio" data-option="b" id="question3-b" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.b.valor +'">');
	
	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+ state.questions.pregunta3.opciones.c.texto +'</label>');
	var inputC = $('<input type="radio"  data-option="c" id="question3-c" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.c.valor +'">');
	
	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+ state.questions.pregunta3.opciones.d.texto +'</label>');
	var inputD = $('<input type="radio"  data-option="d" id="question3-d" name="option-3"  class="option-input radio" value="'+ state.questions.pregunta3.opciones.d.valor +'">');
	
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

	if (inputA[0].id == idChecked3) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked3) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked3) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked3) {
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
		pregunta3 = $("input[name='option-3']:checked").val();
		option3 = $("input[name='option-3']:checked").attr('data-option');
		idChecked3 = $("input[name='option-3']:checked").attr("id");
		// option3 = option.slice(-1);
      if(pregunta3){
				sumaX += parseInt(pregunta3);
				console.log(sumaX);
      }
		state.screenView = "question-4";
		update();
	});

	return container;
}
