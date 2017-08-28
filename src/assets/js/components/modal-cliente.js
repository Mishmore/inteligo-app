function Modal() {
  var modal = $('<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"></div>');
  var modalDialog = $('<div class="modal-dialog modal-lg" role="document"></div>');
  var modalContent = $('<div class="modal-content col-xs-12 col-md-6 center-block text-center"></div>');
  var title = $('<h3>Has digitado el número</h3>');
  var number = $('<h3 class="blue" id="id-cliente"></h3>');
  var div = $('<div class="col-md-10 col-md-offset-1"></div>');
  var btnIniciar = $('<button type="button" class="btn init" data-toggle="modal" data-target=".bs-example-modal-lg">Es Correcto</button>');
  var btnEditar = $('<button type="button" class="btn editar" data-toggle="modal" data-target=".bs-example-modal-lg">Editar</button>');
  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(title);
  modalContent.append(number);
  modalContent.append(div);
  div.append(btnIniciar);
  div.append(btnEditar);
  $('.root').append(modal);
}
