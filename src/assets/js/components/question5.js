function Question5(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:48.2%"></div>');

	var h3 = $('<h3 class="title-question">'+state.questions.pregunta5.pregunta +'</h3>');
	
	var pie = $(' <div  class ="col-sm-5 col-md-5 hidden-xs" id="pieQuestion5"></div>');
	var imgPie = $('<img id="imgPie" class="img-responsive" src="assets/img/mc.png" alt="PAI pregunta 5">');

	var form = $('<form class="col-xs-12 col-sm-7 col-md-7 form-question5"></form>');

	var divA = $('<div class="lbl-question lbl-question5"></div>');
	var labelA = $('<label>'+ state.questions.pregunta5.opciones.a.texto +'</label>');
	var inputA = $('<input type="radio" id="question5-a" data-option="a" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.a.valor +'">');

	var divB = $('<div class="lbl-question lbl-question5"></div>');
	var labelB = $('<label>'+ state.questions.pregunta5.opciones.b.texto +'</label>');
	var inputB = $('<input type="radio" id="question5-b" data-option="b" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.b.valor +'">');

	var divC = $('<div class="lbl-question lbl-question5"></div>');
	var labelC = $('<label>'+ state.questions.pregunta5.opciones.c.texto +'</label>');
	var inputC = $('<input type="radio" id="question5-c" data-option="c" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.c.valor +'">');

	var divD = $('<div class="lbl-question lbl-question5"></div>');
	var labelD = $('<label>'+ state.questions.pregunta5.opciones.d.texto +'</label>');
	var inputD = $('<input type="radio" id="question5-d" data-option="d" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.d.valor +'">');

	var divE = $('<div class="lbl-question lbl-question5"></div>');
	var labelE = $('<label>'+ state.questions.pregunta5.opciones.e.texto +'</label>');
	var inputE = $('<input type="radio" id="question5-e" data-option="e" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.e.valor +'">');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(h3,pie,form);
	pie.append(imgPie);

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

	if (inputA[0].id == idChecked5) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked5) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked5) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked5) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked5) {
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
		pregunta5 = $("input[name='option-5']:checked").val();
		option5 = $("input[name='option-5']:checked").attr('data-option');
		idChecked5 = $("input[name='option-5']:checked").attr("id");
		// option5 = option.slice(-1);
      if(pregunta5){
					sumaY += parseInt(pregunta5);
					console.log(sumaY);
      }
		state.screenView = "question-6";
		update();
	});

	return container;
}
