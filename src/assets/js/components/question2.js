function Question2(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:12.3%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta2.pregunta +'</h3>');

	var divA = $('<div class="content_txt_radio"></div>');
	var labelA = $('<label>'+state.questions.pregunta2.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" data-option="a" id="question2-a" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.a.valor +'">');
	
	var divB = $('<div class="content_txt_radio"></div>');
	var labelB = $('<label>'+state.questions.pregunta2.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" data-option="b" id="question2-b" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.b.valor +'">');
	
	var divC = $('<div class="content_txt_radio"></div>');
	var labelC = $('<label>'+state.questions.pregunta2.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" data-option="c" id="question2-c" name="option-2"  class="option-input radio" value="'+ state.questions.pregunta2.opciones.c.valor +'">');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);
	console.log(option1);
	console.log(idChecked1);
	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);

	form.append(h3);
	form.append(divA);
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)

	if (inputA[0].id == idChecked2) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked2) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked2) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	}


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		 pregunta2 = $("input[name='option-2']:checked").val();
		 option2 = $("input[name='option-2']:checked").attr('data-option');
		 idChecked2 = $("input[name='option-2']:checked").attr("id");
		 //option2 = option.slice(-1);
			if(pregunta2){
				sumaX += parseInt(pregunta2);
				console.log(sumaX);
			}
			state.screenView = "question-3";
			update();
	});

	return container;
}
