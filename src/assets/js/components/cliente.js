function SeleccionarCliente(update) {

  var container = $('<div class="text-center vertical-center"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-12 items-container"></div>');
  var cliente = $('<div class="col-xs-2 card col-sm-offset-3"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h4 class="card-title">Cliente</h4></div>');
  var prospecto = $('<div class="col-xs-2 card col-sm-offset-1"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h4 class="card-title">Prospecto</h4></div>');
  var input = $('<input type="text" class="col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-3">');
  var btn = $('<div class="col-xs-12"><button type="button" class="btn btn-default">Continuar</button></div>');

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
  row.append(btn);
  input.hide();

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    console.log(state.cliente);
    input.show();
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    console.log(state.cliente);
    input.show();
  });

  btn.on('click', function(e) {
    state.screenView = "Iniciar formulario";
    update();
  });

  return container;
}
