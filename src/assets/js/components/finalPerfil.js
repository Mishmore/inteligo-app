function Profile(update) {
  prueba();
  switchPerfil();
  var container = $('<div class="container"></div>');
  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>Basandonos en la respuesta que usted nos ha especificado, hemos determinado que su perfil es: </h1>')
  var h2= $('<h2>Su perfil es: '+ perfil +' </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: </h3>')
  var div3 = $('<div class="informacion"></div>');
  var img = $('<img src="assets/img/chartpie.jpg">')
  var span1=$('<span class="texto"><i></i>  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto"><i></i> Mejor Año:27% </span>');
  var span3=$('<span class="texto"><i></i>Peor Año:16.09%</span>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary" id="reviewPerfil">Review perfil</button>');

  var btnRegister = $('<button type="button" class="btn btn-primary" id="enviarMail">Generar pdf</button>');
  var btnEnviarDatos = $('<button type="button" class="btn btn-primary" id="saveData">Guardar Datos</button>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary">Revisar Perfil</button>');

  container.append(div1);
  container.append(div3);
  div1.append(h1);
  div1.append(h2);
  div1.append(h3);
  //div1.append(img);
  div3.append(span1);
  div3.append(span2);
  div3.append(span3);

  div3.append(btnReviewPerfil);
  div3.append(btnRegister);
  div3.append(btnEnviarDatos);

  btnEnviarDatos.on('click',function (e) {
    var client = {
          vchCodCliente: codigoCliente,
          vchrTipoDoc: tipoUsuario,
          vchDocIdentidad: documento,
          dtmFecha:"hoy",
          vchSector: "opcional",
          intResultadoPerfil: 5,
          vchrPortafolio: "opcional",
          chrResp01: option1,
          chrResp02: option2,
          chrResp03: option3,
          chrResp04: option4,
          chrResp05: option5,
          chrResp06: option6,
          chrResp07: option7,
          chrResp08: option8,
          vchNomPDF: "perfil"
        }

    $.ajax({
          type: "POST",
           url: "/registrarCliente",
           dataType: "json",
           success: function (msg) {
               if (msg) {
                   console.log("Somebody" + name + " was added in list !");
                   location.reload(true);
               } else {
                   console.log("Cannot add to list !");
               }
           },

           data: client
        });
  });

  btnRegister.on('click', function(e) {
    impPDF();
  });

  btnReviewPerfil.on('click', function(e) {
    sumaX = 0;
    sumaY = 0;
    pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8 = 0;
    option1,option2,option3,option4,option5,option6,option7,option8 = "";
    state.screenView = "question-1";
    update();
  });

  

  return container;
}
 