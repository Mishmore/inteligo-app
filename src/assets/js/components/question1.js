function Question1(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:0%"><span class="sr-only">80% Complete</span></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+ state.questions.pregunta1.pregunta +'</h3>');

	var anchorA = $('<a href="#collapse" data-toggle="collapse"></a>');
	var divA = $('<div class="content_txt_radio"></div>');
	var labelA = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" id="question1-a" data-option="a" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.a.valor +'">');
	var collapseA = $('<div id="collapse" class="collapse">Seguridad </div>');

	var divB = $('<div class="content_txt_radio"></div>');
	var labelB = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" id="question1-a" data-option="b" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.b.valor +'">');

	var divC = $('<div class="content_txt_radio"></div>');
	var labelC = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" id="question1-b" data-option="c" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.c.valor +'">');

	var divD = $('<div class="content_txt_radio"></div>');
	var labelD = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.d.texto+'</label>');
	var inputD = $('<input type="radio" id="question1-c" data-option="d" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.d.valor +'">');

	var divE = $('<div class="content_txt_radio"></div>');
	var labelE = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.e.texto+'</label>');
	var inputE = $('<input type="radio" id="question1-d" data-option="e" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.e.valor +'">');
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

	console.log(inputA[0].id);

	divA.append(inputA);
	divA.append(labelA);
	form.append(divB);
	divB.append(inputB);
	divB.append(labelB);
	form.append(divC);
	divC.append(inputC);
	divC.append(labelC);
	form.append(divD);
	divD.append(inputD);
	divD.append(labelD);
	form.append(divE);
	divE.append(inputE);
	divE.append(labelE);


	if (inputA[0].id == idChecked1) {
		inputA[0].checked = true;
		btn.prop('disabled', false);

	}else if (inputB[0].id == idChecked1) {
		inputB[0].checked = true;
		btn.prop('disabled', false);

	} else if (inputC[0].id == idChecked1) {
		inputC[0].checked = true;
		btn.prop('disabled', false);

	} else if (inputD[0].id == idChecked1) {
		inputD[0].checked = true;
		btn.prop('disabled', false);

	} else if (inputE[0].id == idChecked1) {
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
		 pregunta1 = $("input[name='option-1']:checked").val();
		 option1 = $("input[name='option-1']:checked").attr('data-option');
		 idChecked1 = $("input[name='option-1']:checked").attr("id");
			if(pregunta1){
				sumaX += parseInt(pregunta1);
				console.log(sumaX);
			}
			state.screenView = "question-2";
			update();
	});

	return container;
}
