/*
function Modal() {
  var modal = $('<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"></div>');
  var modalDialog = $('<div class="modal-dialog modal-lg" role="document"></div>');
  var modalContent = $('<div class="modal-content col-xs-12 center-block text-center"></div>');
  var title = $('<h3 class="">Has digitado el número</h3>');
  var number = $('<h3 class="blue" id="id-cliente"></h3>');
  var div = $('<div></div>');
  var btnIniciar = $('<button type="button" class="btn btn-lg init" data-toggle="modal" data-target=".bs-example-modal-lg">Es Correcto</button>');
  var btnEditar = $('<button type="button" class="btn btn-lg editar" data-toggle="modal" data-target=".bs-example-modal-lg">Editar</button>');

  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(title);
  modalContent.append(number);
  modalContent.append(div);
  div.append(btnIniciar);
  div.append(btnEditar);
  return modal;
}
*/
function SeleccionarCliente(update) {

  var container = $('<div class="vertical-center" id="form"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12 text-center">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-6 col-xs-offset-3 items-container text-center"></div>');
  var cliente = $('<div class="card"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h3 class="card-title">Cliente</h3></div>');
  var prospecto = $('<div class="card"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h3 class="card-title">Prospecto</h3></div>');
  var inputGroup = $('<div class="col-xs-6 col-xs-offset-3 hidden-on input-group"></div>');
  var input = $('<input id="documento" type="text" class="text-center" maxlength="11">');
  var linkSubmit = $('<a href="#" class=""><img src="assets/img/circle-arrow.svg"></a>');
  var spanError = $('<span class="col-xs-12 hidden-on text-center">Completar todos los campos</span>');
  var divOptions =$('<form class="text-center hidden-on"></form>');
  var opDni = $('<label><input type="radio" name="opt-radio">DNI</label>');
  var opCe = $('<label><input type="radio" name="opt-radio">CE</label>');
  var opPasaporte = $('<label><input type="radio" name="opt-radio">Pasaporte</label>');
  var opRuc = $('<label><input type="radio" name="opt-radio">RUC</label>');
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
  inputGroup.append(input);
  inputGroup.append(linkSubmit);
  inputGroup.append(spanError);
  inputGroup.append(divOptions);

  divOptions.append(opDni);
  divOptions.append(opCe);
  divOptions.append(opPasaporte);
  divOptions.append(opRuc);

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    divOptions.removeClass("hidden-off");
    divOptions.addClass("hidden-on");
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    divOptions.removeClass("hidden-on");
    divOptions.addClass("hidden-off");
    input.attr("placeholder", "Ingrese número de documento");
  });

  var validarIdentificador = "vacio";
  var validarTipoId = "";
  linkSubmit.on('click', function(e) {

    if (input.val().length != 0) {
      validarIdentificador = "validado";
    } else if (input.val().length == 0) {
      validarIdentificador = "Completar todos los campos";
    }

    $('input[type=radio]').on('change', function(e) {
        validarTipoId = "validado";
    });

    if (state.cliente == "cliente") {

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

    } else if (state.cliente = "prospecto") {
      if (validarIdentificador == "validado" && validarTipoId == "validado") {
        $('#id-cliente').text(input.val());
        linkSubmit.attr("data-toggle", "modal");
        linkSubmit.attr("data-target", ".bs-example-modal-lg");
        spanError.removeClass("hidden-off");
        spanError.addClass("hidden-on");
      } else if (validarIdentificador != validarTipoId ) {
        linkSubmit.removeAttr("data-toggle");
        linkSubmit.removeAttr("data-target");
        spanError.removeClass("hidden-on");
        spanError.addClass("hidden-off");
      }
    }

  });

  $('button.init').on('click', function(e) {
    identificadorCliente = input.val();
    if (state.cliente == "cliente") {
      codigoCliente = input.val();
    } else if (state.cliente == "prospecto") {
      documento = input.val();
      tipoDoc();
    }

    tipoUsuario = state.cliente;
    state.screenView = "Iniciar formulario";

    console.log(tipoDocumento);

    update();
  });

  function tipoDoc() {
    console.log(tipoDocumento);
  }

  return container;
}
