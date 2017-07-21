function Register(update) {
  var container = $('<div class="form-group"></div>');
  var div1 = $('<div class="profile"></div>');
  var input1=$('<input type="text" name="name" placeholder="Ingrese su nombre" id="nombre">');
  var input2=$('<input type="text" name="lastname" placeholder="Ingrese sus apellidos" id="apellidos">');
  var birthday=$('<input type="date" name="birthday" placeholder="Ingrese su fecha de nacimiento" id="nac">')
  var radioF = $('<label><input type="radio" name="gender">Femenino</label>');
  var radioM = $('<label><input type="radio" name="gender">Masculino</label>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail" id="terminos">Acepto los <a>Terminos y Condiciones</a></label>')
  var input3=$('<input type="email" name="email" placeholder="Ingrese su email" id="email-reg">');
  var btn = $('<button type="button" class="btn btn-primary" id="registrarse">ACEPTAR</button>');

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
    alert('Registro exitoso')
      //state.screenView = null;
      //update();
    });

  return container;
}
