var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
	switch(state.screenView) {
	case null:
		wrapper.append(Home(_ => render(root)));
		break;
	case "question-1":
		wrapper.append(Question1(_ => render(root)));
		break;
	case "question-2":
		wrapper.append(Question2(_ => render(root)));
		break;
	}
  root.append(wrapper);
}

var state = {
	questions: null,
	screenView: null
};

$(document).ready(function() {
	var root = $('.root');
	render(root);
	$('.collapse').collapse({
  toggle: true
	})
});
