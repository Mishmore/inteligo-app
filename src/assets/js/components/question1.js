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

	var divA = $('<div class="content_txt_radio"></div>');
	var labelA = $('<a href="#collapseidA" data-toggle="collapse"><label class="lbl-question">Seguridad</label></a>');
	var inputA = $('<input type="radio" id="question1-a" data-option="a" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.a.valor +'">');
	var collapseA = $('<div id="collapseidA" class="collapse">'+state.questions.pregunta1.opciones.a.texto+'</div>');

	var divB = $('<div class="content_txt_radio"></div>');
	var labelB = $('<a href="#collapseidB" data-toggle="collapse"><label class="lbl-question">Protección a la inflación</label></a>');
	var inputB = $('<input type="radio" id="question1-a" data-option="b" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.b.valor +'">');
	var collapseB = $('<div id="collapseidB" class="collapse">'+state.questions.pregunta1.opciones.b.texto+'</div>');

	var divC = $('<div class="content_txt_radio"></div>');
	var labelC = $('<a href="#collapseidC" data-toggle="collapse"><label class="lbl-question">Crecimiento y Seguridad</label></a>');
	var inputC = $('<input type="radio" id="question1-b" data-option="c" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.c.valor +'">');
	var collapseC = $('<div id="collapseidC" class="collapse">'+state.questions.pregunta1.opciones.c.texto+'</div>');

	var divD = $('<div class="content_txt_radio"></div>');
	var labelD = $('<a href="#collapseidD" data-toggle="collapse"><label class="lbl-question">Crecimiento</label></a>');
	var inputD = $('<input type="radio" id="question1-c" data-option="d" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.d.valor +'">');
	var collapseD = $('<div id="collapseidD" class="collapse">'+state.questions.pregunta1.opciones.d.texto+'</div>');

	var divE = $('<div class="content_txt_radio"></div>');
	var labelE = $('<a href="#collapseidE" data-toggle="collapse"><label class="lbl-question">Máximo Crecimiento</label></a>');
	var inputE = $('<input type="radio" id="question1-d" data-option="e" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.e.valor +'">');
	var collapseE = $('<div id="collapseidE" class="collapse">'+state.questions.pregunta1.opciones.e.texto+'</div>');

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
	divA.append(labelA,collapseA);
	form.append(divB);
	divB.append(inputB);
	divB.append(labelB,collapseB);
	form.append(divC);
	divC.append(inputC);
	divC.append(labelC,collapseC);
	form.append(divD);
	divD.append(inputD);
	divD.append(labelD,collapseD);
	form.append(divE);
	divE.append(inputE);
	divE.append(labelE,collapseE);

	
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
