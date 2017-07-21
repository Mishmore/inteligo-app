function Home(update) {
	var container = $('<div class="nav text-center"></div>');
	var h3 = $('<h3>¿Quieres saber como invertir?</h3>');
	var btn = $('<button type="button" class="btn btn-primary">conozca su perfil</button>');

	container.append(h3);
	container.append(btn);

	btn.on('click', function(e) {
		state.screenView = "question-1";
		update();
	});
	return container;
}
