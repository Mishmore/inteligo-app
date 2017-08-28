function SeleccionarCliente(update) {

  var container = $('<div class="vertical-center" id="form"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12 text-center">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-4 col-xs-offset-4 items-container text-center"></div>');
  var cliente = $('<div class="card"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h4 class="card-title text-center">Cliente</h4></div>');
  var prospecto = $('<div class="card"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h4 class="card-title text-center">Prospecto</h4></div>');
  var inputGroup = $('<div class="col-xs-6 col-xs-offset-3 hidden-on input-group"></div>');
  var divInput =$('<div class="div-input"></div>');
  var input = $('<input id="documento" type="text" maxlength="11">');
  var linkSubmit = $('<a href="#" class=""><img src="assets/img/circle-arrow.svg" class="icon-svg"></a>');
  var spanError = $('<span class="col-xs-12 hidden-on text-center">Completar todos los campos</span>');
  var divOptions =$('<form class="text-center hidden-on div-radio"></form>');
  var opDni = $('<label><input type="radio" class="doc-radio-scss" name="opt-radio" value="DNI">DNI</label>');
  var opCe = $('<label><input type="radio" class="doc-radio-scss" name="opt-radio" value="CE">CE</label>');
  var opPasaporte = $('<label><input type="radio" class="doc-radio-scss" name="opt-radio" value="Pasaporte">Pasaporte</label>');
  var opRuc = $('<label><input type="radio" class="doc-radio-scss" name="opt-radio" value="RUC">RUC</label>');
//input debe aceptar letras
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
  inputGroup.append(divInput);
  divInput.append(input);
  divInput.append(linkSubmit);
  inputGroup.append(spanError);
  inputGroup.append(divOptions);

  divOptions.append(opDni);
  divOptions.append(opCe);
  divOptions.append(opPasaporte);
  divOptions.append(opRuc);

  cliente.on('click', function(e) {
    state.cliente = "PC";

    cliente.addClass("shadow");
    prospecto.removeClass("shadow");

    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    divOptions.removeClass("hidden-off");
    divOptions.addClass("hidden-on");
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "PP";

    prospecto.addClass("shadow");
    cliente.removeClass("shadow");

    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    divOptions.removeClass("hidden-on");
    divOptions.addClass("hidden-off");
    input.attr("placeholder", "Ingrese número de documento");
  });

  linkSubmit.on('click', function(e) {

    if (state.cliente == "PC") {

      if (input.val().length != 0) {
        $('#id-cliente').text(input.val());
        linkSubmit.attr("data-toggle", "modal");
        linkSubmit.attr("data-target", ".bs-example-modal-lg");
        spanError.removeClass("hidden-off");
        spanError.addClass("hidden-on");
      } else {
        linkSubmit.removeAttr("data-toggle");
        linkSubmit.removeAttr("data-target");
        spanError.removeClass("hidden-on");
        spanError.addClass("hidden-off");
      }

    } else if (state.cliente = "PP") {
      if (input.val().length != 0 && $('input[name=opt-radio]').is(':checked')) {
        $('#id-cliente').text(input.val());
        linkSubmit.attr("data-toggle", "modal");
        linkSubmit.attr("data-target", ".bs-example-modal-lg");
        spanError.removeClass("hidden-off");
        spanError.addClass("hidden-on");
      }

      if (input.val().length == 0 || !$('input[name=opt-radio]').is(':checked')) {
        linkSubmit.removeAttr("data-toggle");
        linkSubmit.removeAttr("data-target");
        spanError.removeClass("hidden-on");
        spanError.addClass("hidden-off");
      }
    }

  });

  $('button.init').on('click', function(e) {
    identificadorCliente = input.val();
    if (state.cliente == "PC") {
      codigoCliente = input.val();
    } else if (state.cliente == "PP") {
      documento = input.val();
      tipoDoc();
    }

    tipoUsuario = state.cliente;
    state.screenView = "Iniciar formulario";

    update();
  });

  function tipoDoc() {
    switch ($('input:radio[name=opt-radio]:checked').val()) {
        case 'DNI':
            tipoDocumento = "01";
            break;
        case 'CE':
            tipoDocumento = "02";
            break;
        case 'Pasaporte':
            tipoDocumento = "03";
            break;
        case 'RUC':
            tipoDocumento = "04";
            break;
    }
  }

  return container;
}
