var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Nav(_ => render(root)));
	switch(state.screenView) {
	case null:
		wrapper.append(Profile(_ => render(root)));
		break;
  case "Seleccionar cliente":
		wrapper.append(SeleccionarCliente(_ => render(root)));
		break;
  case "Iniciar formulario":
		wrapper.append(InicioForm(_ => render(root)));
		break;
	case "question-1":
		wrapper.append(Question1(_ => render(root)));
		break;
	case "question-2":
		wrapper.append(Question2(_ => render(root)));
		break;
  case "question-3":
    wrapper.append(Question3(_ => render(root)));
    break;
  case "question-4":
    wrapper.append(Question4(_ => render(root)));
    break;
  case "question-5":
    wrapper.append(Question5(_ => render(root)));
    break;
  case "question-6":
    wrapper.append(Question6(_ => render(root)));
    break;
  case "question-7":
    wrapper.append(Question7(_ => render(root)));
    break;
  case "question-8":
    wrapper.append(Question8(_ => render(root)));
    break;
  case "Loading":
    wrapper.append(Loading(_ => render(root)));
    break;
  case "profile":
    wrapper.append(Profile(_ => render(root)));
    break;
  case "description":
    wrapper.append(Description(_ => render(root)));
    break;
  case "register":
    wrapper.append(Register(_ => render(root)));
    break;
	}
  root.append(wrapper);
}

var state = {
  cliente: null,
	questions: null,
	screenView: null,
  perfil: ""
}

$(document).ready(function() {
  getJSON('/api/preguntas', (err, json) => {
  state.questions = json;
  var root = $('.root');
  render(root);
  });



	$('.collapse').collapse({
  toggle: true
	})
});
