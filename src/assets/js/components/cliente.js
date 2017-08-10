function SeleccionarCliente(update) {

  var container = $('<div class="text-center"></div>');
  var h1 = $('<h1 class="col-xs-12">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-12 items-container"></div>');
  var cliente = $('<div class="col-xs-3">Cliente</div>');
  var prospecto = $('<div class="col-xs-3">Prospecto</div>');
  var input = $('<input type="text" class="col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-3">');

  container.append(h1);
  container.append(containerCards);
  containerCards.append(cliente);
  containerCards.append(prospecto);
  container.append(input);
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

  return container;
}
