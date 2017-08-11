
function Home(update) {

	var container = $('<div class="text-center vertical-center"></div>');
	var row = $('<div class="row"></div>');
	var img = $('<img src="assets/img/secundaria-vertical.jpg" class="img-inicio col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1" alt="Logo inicio">');
	var h1 = $('<h1 class="col-xs-12">Perfila a tu cliente</h1>');

	container.append(row);
	row.append(img);
	row.append(h1);

	setTimeout(function(){
		state.screenView = "Seleccionar cliente";
		update();
	}, 2000);

	return container;
}
/*
function HomeDesktop(update) {
	var container = $('<div class="nav text-center"></div>');
	var h3 = $('<h3 class="hidden-md hidden-lg">¿Quieres saber como invertir?</h3>');
	var btn = $('<button type="button" class="btn btn-primary hidden-md hidden-lg">conozca su perfil</button>');

	container.append(h3);
	container.append(btn);

	btn.on('click', function(e) {
		state.screenView = "question-1";
		update();
	});
	return container;
}
*/
