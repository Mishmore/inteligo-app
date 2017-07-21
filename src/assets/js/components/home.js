function Home(update) {
	var container = $('<div class="text-center"></div>');
	var imgCliente = $('<div class="img-cliente col-xs-12"></div>');
	var h3 = $('<h3>¿Quieres saber como invertir?</h3>');
	var btn = $('<button type="button" class="btn btn-primary">Conozca su perfil</button>');

	container.append(imgCliente);
	container.append(h3);
	container.append(btn);

	btn.on('click', function(e) {
		state.screenView = "question-1";
		update();
	});
	return container;
}

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
