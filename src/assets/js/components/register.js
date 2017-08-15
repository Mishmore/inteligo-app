function Register(update) {
  var container = $('<div class="form-group"></div>');
  var div1 = $('<div class="profile"></div>');
  var input1=$('<input type="text" name="name" placeholder="Ingrese su nombre" id="nombre"><br>');
  var input2=$('<input type="text" name="lastname" placeholder="Ingrese sus apellidos" id="apellidos"><br>');
  var birthday=$('<input type="date" name="birthday" placeholder="Ingrese su fecha de nacimiento" id="nac"><br>')
  var radioF = $('<label><input type="radio" name="gender">Femenino</label><br>');
  var radioM = $('<label><input type="radio" name="gender">Masculino</label><br>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail" id="terminos">Acepto los <a>Terminos y Condiciones</a></label><br>')
  var input3=$('<input type="email" name="email" placeholder="Ingrese su email" id="email-reg"><br>');
  var btn = $('<button type="button" class="btn btn-primary" id="registrarse">ACEPTAR</button><br>');

  container.append(div1);
  div1.append(input1);
  div1.append(input2);
  div1.append(birthday);
  div1.append(radioF);
  div1.append(radioM);
  div1.append(checkbox);
  div1.append(input3);
  div1.append(btn);


  btn.on('click', function(e) {
    alert('Registro exitoso')
      //state.screenView = null;
      //update();
    });

  return container;
}
