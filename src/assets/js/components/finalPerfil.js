function Profile(update) {
  prueba();
  switchPerfil();
  var container = $('<div class="container-fluid question"></div>');
  var divAzul = $('<div class="helper"></div>');
  var logoDiv = $('<div class="logo-div"></div>');
  var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
  var h21 = $('<h2 class=""> Conociendo su perfil</h2>');

  var divLoad = $('<div class="loading-div"></div>');
  var loading = $('<div class="progress "></div>');
  var loadingBase = $('<div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:100%"><span class="sr-only">80% Complete</span></div>');

  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>Basándonos en la respuesta que usted nos ha especificado, hemos determinado que su perfil es: </h1>')
  var row = $('<div class="row"></div>');
  var col7 = $('<div class="col-xs-12 col-md-7 content-description"></div>');
  var col5 = $('<div class="col-xs-12 col-md-5 content-chart"></div>');
  switch (perfil) {
        case 'defensivo':
             var imgChart = $('<img class="img-responsive" src="assets/img/defensivo.jpg" alt="defensivo">');
            break;
        case 'altamente conservador':
            var imgChart = $('<img class="img-responsive" src="assets/img/altamente_conservador.jpg" alt="altamente conservador">');
            break;
        case 'conservador':
            var imgChart = $('<img class="img-responsive" src="assets/img/conservador.jpg" alt="conservador">');
            break;
        case 'moderado':
            var imgChart = $('<img class="img-responsive" src="assets/img/moderado.jpg" alt="moderado">');
            break;
        case 'agresivo':
            var imgChart = $('<img class="img-responsive" src="assets/img/agresivo.jpg" alt="agresivo">');
            break;
    }
  var downloadPdf = $('<div class="downloadPdf"><img class="img-responsive" src="assets/img/pdf-Inteligo.svg" alt="pdf">Descargar PDF</div>');

  var h2= $('<h2>'+ perfil.capitalize() +' </h2>')
  var h3=$('<h3 class="description-profile">Para inversionistas de largo plazo que buscan crecimiento en su inversión a un nivel medio de riesgo y que podrian'+
           ' requerir generación de ingresos corrientes: </h3>')
  var div3 = $('<div class="informacion"></div>');

  //var btnRegister = $('<button type="button" class="btn btn-primary" id="enviarMail">Generar pdf</button>');
  var btnEnviarDatos = $('<button type="button" class="btn btn-lg init btn-blue" id="saveData" data-toggle="modal" data-target="#confirmData">Guardar Datos</button>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-lg editar">Revisar datos</button>');

  container.append(divAzul);
  divAzul.append(logoDiv);

  divAzul.append(divLoad);
  divLoad.append(loading);
  loading.append(loadingBase);
  logoDiv.append(img,h21);

  container.append(div1);
  container.append(div3);
  div1.append(h1);
  div1.append(col7,col5);
  col7.append(h2,h3,div3);

  col5.append(imgChart,downloadPdf);

  div3.append(btnReviewPerfil);
  //div3.append(btnRegister);
  div3.append(btnEnviarDatos);

   btnEnviarDatos.on('click',function (e) {
    setDate();
    setNamePdf();

    nombrePdf =  state.cliente+'_'+codigoCliente+' '+fechaEvaluacion+'.pdf';

    switch (perfil) {
        case 'defensivo':
            indexPerfil = 0;
            break;
        case 'altamente conservador':
            indexPerfil = 1;
            break;
        case 'conservador':
            indexPerfil = 2;
            break;
        case 'moderado':
            indexPerfil = 3;
            break;
        case 'agresivo':
            indexPerfil = 4;
            break;
    }
    var client = {
          vchCodCliente: codigoCliente,
          vchrTipoDoc: state.cliente,
          vchDocIdentidad: documento,
          dtmFecha: fecha,
          vchSector: sector,
          intResultadoPerfil: indexPerfil,
          vchrPortafolio: "opcional",
          chrResp01: option1,
          chrResp02: option2,
          chrResp03: option3,
          chrResp04: option4,
          chrResp05: option5,
          chrResp06: option6,
          chrResp07: option7,
          chrResp08: option8,
          vchNomPDF: nombrePdf
        }

    $.ajax({
          type: "POST",
           url: "/registrarCliente",
           dataType: "json",
           success: function (msg) {
               if (msg) {
                   console.log("registro exitoso");
                   location.reload(true);
               } else {
                   console.log("no se pudo agregar a la bd");
               }
           },
           data: client
        });
  });

downloadPdf.on('click', function(e) {
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
