function InicioForm(update) {
	var container = $('<div class="text-center vertical-center"></div>');
  var row = $('<div class="row"></div>');
  var img = $('<img src="assets/img/Group.png" class="col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1">');
	var h3 = $('<h3 class="col-xs-12 col-sm-6 col-sm-offset-3">Es momento de compartir el dispositivo con tu cliente</h3>');
	var btnIniciar = $('<div class="col-xs-12"><button type="button" class="btn col-md-2 col-md-offset-5 btn-lg btn-blue">Iniciar</button></div>');

  container.append(row);
  row.append(img);
  row.append(h3);
	row.append(btnIniciar);

	btnIniciar.on('click', function(e) {
		state.screenView = "question-1";
		update();
	});
	return container;
}
