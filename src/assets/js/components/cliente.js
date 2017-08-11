
function SeleccionarCliente(update) {

  var container = $('<div class="text-center vertical-center"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-8 col-xs-offset-2 items-container"></div>');
  var cliente = $('<div class="col-xs-4 card"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h4 class="card-title">Cliente</h4></div>');
  var prospecto = $('<div class="col-xs-4 card"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h4 class="card-title">Prospecto</h4></div>');
  var input = $('<input id="documento" type="text" class="col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-3 text-center" maxlength="12">');
  var linkSubmit = $('<a href="#" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="col-xs-1" aria-hidden="true">Enviar</i></a>');

  container.append(row);
  row.append(h1);
  row.append(containerCards);
  containerCards.append(cliente);
  containerCards.append(prospecto);
  cliente.append(imgCliente);
  cliente.append(titleCliente);
  prospecto.append(imgProspecto);
  prospecto.append(titleProspecto);
  row.append(input);
  row.append(linkSubmit);
  input.hide();
  linkSubmit.hide();

  $('.init').on('click', function(e) {
    state.screenView = "Iniciar formulario";
    documento = $('#documento').val();
    update();
  });

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    input.show();
    linkSubmit.show();
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    console.log(state.cliente);
    input.show();
    linkSubmit.show();
    input.attr("placeholder", "Ingrese DNI o CEX");
  });

  return container;
}
