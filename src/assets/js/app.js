var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
	switch(state.screenView) {
	case null:
		wrapper.append(Header(_ => render(root)));
		break;
	case "question-1":
		wrapper.append(Question1th(_ => render(root)));
		break;
	case "question-2th":
		wrapper.append(Question2th(_ => render(root)));
		break;
	}
  root.append(wrapper);
}

var state = {
	data: null,
	screenView: null
};

$(document).ready(function() {
	var root = $('.root');
	render(root);
	$('.collapse').collapse({
  toggle: true
	})
});
