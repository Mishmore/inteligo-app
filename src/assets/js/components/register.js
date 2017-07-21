function Register(update) {
  var container = $('<div class="form-group"></div>');
  var div1 = $('<div class="profile"></div>');
  var input1=$('<input type="text" name="name" placeholder="Ingrese su nombre">');
  var input2=$('<input type="text" name="lastname" placeholder="Ingrese sus apellidos">');
  var birthday=$('<input type="date" name="birthday" placeholder="Ingrese su fecha de nacimiento">')
  var radioF = $('<label><input type="radio" name="option">Femenino</label>');
  var radioM = $('<label><input type="radio" name="option">Masculino</label>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail">Acepto los <a>Terminos y Condiciones</a></label>')
  var input3=$('<input type="email" name="email" placeholder="Ingrese su email">');
  var btn = $('<button type="button" class="btn btn-primary">ACEPTAR</button>');
  div1.append(input2);
  div1.append(birthday);
  div1.append(radioF);
  div1.append(radioM);
  div1.append(checkbox);
  div1.append(input3);
  div1.append(btn);
  div1.append(input1);
  container.append(div1);

  btn.on('click', function(e) {
  state.screenView = "description";
  update();
  });
  return container;
}
