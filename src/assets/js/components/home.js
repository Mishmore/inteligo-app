function Home(update) {

	var container = $('<div class="text-center vertical-center" id="home"></div>');
	var row = $('<div class="row"></div>');
	var img = $('<img src="assets/img/logo-inteligo-h.svg" class="img-inicio col-xs-10 col-sm-8 col-sm-offset-2 col-xs-offset-1" alt="Logo inicio">');
	var h1 = $('<h1 class="col-xs-12">Perfila a tu cliente</h1>');
	var inputGroup = $('<div class="col-xs-8 col-xs-offset-2 hidden-on input-group"></div>');
  var input = $('<input id="sector" type="text" class="" placeholder="Ingresa tu sector">');
  var linkSubmit = $('<a href="#"><img src="assets/img/circle-arrow.svg" class="icon-svg"></a>');
	var spanError = $('<span class="col-xs-12 hidden-on text-center">Este campo es obligatorio</span>');

	container.append(row);
	row.append(img);
	row.append(h1);
	row.append(inputGroup);
	inputGroup.append(input);
	inputGroup.append(linkSubmit);
	inputGroup.append(spanError);

	setTimeout(function(){
		inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
	}, 2000);

	linkSubmit.on('click', function(e) {
		if (input.val().length != 0) {
			spanError.removeClass("hidden-off");
			spanError.addClass("hidden-on");
			sector = input.val();
			state.screenView = "Seleccionar cliente";
			update();
		} else if (input.val().length == 0) {
			spanError.removeClass("hidden-on");
			spanError.addClass("hidden-off");
		}

  });

	jQuery.fn.NumberOnly = function() {
		return this.each(function() {
				$(this).keydown(function(e) {
						const key = e.charCode || e.keyCode || 0;
						return (
								key == 8 || key == 9 ||
								key == 110 || key == 190 ||
								(key >= 35 && key <= 40) ||
								(key >= 48 && key <= 57) ||
								(key >= 96 && key <= 105));
				});
		});
	};
	input.NumberOnly();

	return container;
}
