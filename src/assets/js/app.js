var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Nav(_ => render(root)));
	switch(state.screenView) {
	case null:
		wrapper.append(Home(function () { render(root)}));
		break;
  case "Seleccionar cliente":
		wrapper.append(SeleccionarCliente(function () {render(root)}));
    break;
  case "Iniciar formulario":
		wrapper.append(InicioForm(function () { render(root)}));
    break;
	case "question-1":
		wrapper.append(Question1(function () { render(root)}));
    break;
	case "question-2":
		wrapper.append(Question2(function () { render(root)}));
    break;
  case "question-3":
    wrapper.append(Question3(function () { render(root)}));
    break;
  case "question-4":
    wrapper.append(Question4(function () { render(root)}));
    break;
  case "question-5":
    wrapper.append(Question5(function () { render(root)}));
    break;
  case "question-6":
    wrapper.append(Question6(function () { render(root)}));
    break;
  case "question-7":
    wrapper.append(Question7(function () { render(root)}));
    break;
  case "question-8":
    wrapper.append(Question8(function () { render(root)}));
    break;
  case "Loading":
    wrapper.append(Loading(function () { render(root)}));
    break;
  case "profile":
    wrapper.append(Profile(function () { render(root)}));
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
  getJSON('/api/settings', function (err,json) {
    state.config = json;
    console.log(state.config);
  });
  getJSON('/api/preguntas', function (err,json){
  state.questions = json;
  var root = $('.root');
  render(root);
  });
});
