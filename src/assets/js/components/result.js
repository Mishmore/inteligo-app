function Result(update) {
	var container = $('<div class="nav text-center"></div>');
	var h3 = $('<h3>¿Quieres saber como invertir?</h3>');
  var p = $('<p id = "#resultado"></p>');
	var btn = $('<button type="button" class="btn btn-primary">conozca su perfil</button>');

	container.append(h3);
	container.append(btn);
  alert('llegue hasta aqui ');
  // console.log(p.id);
  prueba();
	// btn.on('click', function(e) {
	// 	state.screenView = "question-1";
	// 	update();
	// });
	return container;
}
