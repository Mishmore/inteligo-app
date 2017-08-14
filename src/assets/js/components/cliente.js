
function SeleccionarCliente(update) {

  var container = $('<div class="text-center vertical-center" id="form"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-8 col-xs-offset-2 items-container"></div>');
  var cliente = $('<div class="col-xs-4 card"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h4 class="card-title">Cliente</h4></div>');
  var prospecto = $('<div class="col-xs-4 card"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h4 class="card-title">Prospecto</h4></div>');
  var inputGroup = $('<div class="col-xs-12 hidden-on"></div>');
  var input = $('<input id="documento" type="text" class="col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-3 text-center" maxlength="8">');
  var linkSubmit = $('<a href="#" class="col-xs-1"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>');
  var spanError = $('<span class="col-xs-12 hidden-on">Este campo es obligatorio</span>');

  container.append(row);
  row.append(h1);
  row.append(containerCards);
  containerCards.append(cliente);
  containerCards.append(prospecto);
  cliente.append(imgCliente);
  cliente.append(titleCliente);
  prospecto.append(imgProspecto);
  prospecto.append(titleProspecto);

  row.append(inputGroup);
  inputGroup.append(input);
  inputGroup.append(linkSubmit);
  inputGroup.append(spanError);

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    input.attr("placeholder", "Ingrese número de documento");
  });

  linkSubmit.on('click', function(e) {

    if (input.val().length != 0) {
      $('#id-cliente').text(input.val());
      linkSubmit.attr("data-toggle", "modal");
      linkSubmit.attr("data-target", ".bs-example-modal-lg");
      spanError.removeClass("hidden-off");
      spanError.addClass("hidden-on");
    } else if (input.val().length == 0) {
      linkSubmit.removeAttr("data-toggle");
      linkSubmit.removeAttr("data-target");
      spanError.removeClass("hidden-on");
      spanError.addClass("hidden-off");
    }

  });

  $('button.init').on('click', function(e) {
    if (state.cliente == "cliente") {
      codigoCliente = input.val();
    } else if (state.cliente == "prospecto") {
      documento = input.val();
    }

    tipoUsuario = state.cliente;
    state.screenView = "Iniciar formulario";
    update();
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
