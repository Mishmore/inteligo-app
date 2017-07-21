var myform = $("form#myform");
myform.submit(function(event){
    event.preventDefault();

 // Change to your service ID, or keep using the default service
 var service_id = "gmail";
 var template_id = "template_LsICO6Fp";

 myform.find("button").text("Sending...");
 emailjs.sendForm(service_id,template_id,"myform")
     .then(function(){
       alert("Sent!");
      myform.find("button").text("Send");
   }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
   });
 return false;
});

var pregunta1 = $('.pregunta1');
var pregunta2 = $('.pregunta2');
var pregunta3 = $('.pregunta3');
var pregunta4 = $('.pregunta4');
var pregunta5 = $('.pregunta5');
var pregunta6 = $('.pregunta6');
var pregunta7 = $('.pregunta7');
var pregunta8 = $('.pregunta8');

var sumaX = 0;
var sumaY = 0;
var perfil;
var matrizLength = 4*8;

var matriz=new Array(matrizLength);

function prueba(id) {
  for (i = 0; i < matrizLength; i++) {
    matriz[i] = new Array(3);
  }
  for (i = 0; i < matrizLength; i++) {
    for (e=0; e < matrizLength; e++) {
      matriz[i][e] = i +","+ e;
    }
  }
  comparar(0,7,0,4, "defensivo",id);
  comparar(0,5,5,12, "defensivo",id);
  comparar(0,3,13,20, "defensivo");

  comparar(8,17,0,4, "altamente conservador",id);
  comparar(6,15,5,12, "altamente conservador",id);
  comparar(4,13,14,20, "altamente conservador",id);
  comparar(0,11,22,28, "altamente conservador",id);
  comparar(0,9,30,32, "altamente conservador",id);

  comparar(19,31,0,4, "conservador",id);
  comparar(17,31,6,12, "conservador",id);
  comparar(15,25,14,20, "conservador",id);
  comparar(13,23,22,28, "conservador",id);
  comparar(11,21,30,32, "conservador",id);

  comparar(27,31,14,20, "moderado",id);
  comparar(25,27,22,28, "moderado",id);
  comparar(23,25,30,32, "moderado",id);

  comparar(29,31,22,28, "agresivo",id);
  comparar(27,31,30,32, "agresivo",id);
}

function comparar(valorxInicial,valorxFinal,valoryInicial,valoryFinal, parametroPerfil,id) {
  for (i = valorxInicial; i <= valorxFinal; i++) {
    for (e = valoryInicial; e <= valoryFinal; e++) {
    var valor = sumaX + "," + sumaY
      if(matriz[i][e] == valor){
        perfil = parametroPerfil;
      }
    }
  }
}

var fb = require("firebase");
var config = {
  apiKey: "AIzaSyDV8HQ1DkRV1m0TRwJt39lgTB25AekoLyA",
  authDomain: "inteligo-app.firebaseapp.com",
  databaseURL: "https://inteligo-app.firebaseio.com",
  projectId: "inteligo-app",
  storageBucket: "inteligo-app.appspot.com",
  messagingSenderId: "849747112038"
};
var firebase = fb.initializeApp(config);
var database = firebase.database();

//Email
var txtEmail = $('#txtEmail');
var btnEnviar = $('#enviarMail');
var fillEmail = function(email) {
  var mail = {
    email: email
  };
  var newPostKey = database.ref().child('emails').push().key;
  var updates = {};
  updates['/emails/' + newPostKey] = mail;

  return database.ref().update(updates);
}

btnEnviar.on('click', function(e) {
    var email = txtEmail.val();
    fillEmail(email);
  });


    //Registro
    var registerUser = function(nombre, apellidos, nac, gender, terminos, email) {
      var userCreate = {
        nombre: nombre,
        apellidos: apellidos,
        nac: nac,
        gender: gender,
        terminos: terminos,
        email: email
      };
      var newPostKey = database.ref().child('users').push().key;
      var updates = {};
      updates['/users/' + newPostKey] = userCreate;

      return database.ref().update(updates);
    }



var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Nav(_ => render(root)));
	switch(state.screenView) {
	case null:
		wrapper.append(Home(_ => render(root)));
		break;
	case "question-1":
		wrapper.append(Question1(_ => render(root)));
		break;
	case "question-2":
		wrapper.append(Question2(_ => render(root)));
		break;
  case "question-3":
    wrapper.append(Question3(_ => render(root)));
    break;
  case "question-4":
    wrapper.append(Question4(_ => render(root)));
    break;
  case "question-5":
    wrapper.append(Question5(_ => render(root)));
    break;
  case "question-6":
    wrapper.append(Question6(_ => render(root)));
    break;
  case "question-7":
    wrapper.append(Question7(_ => render(root)));
    break;
  case "question-8":
    wrapper.append(Question8(_ => render(root)));
    break;
  case "profile":
    wrapper.append(Profile(_ => render(root)));
    break;
  case "description":
    wrapper.append(Description(_ => render(root)));
    break;
    case "register":
      wrapper.append(Register(_ => render(root)));
      break;
	}
  root.append(wrapper);
}

var state = {
	questions: null,
	screenView: null,
  perfil: ""
}


$(document).ready(function() {
  getJSON('/api/preguntas', (err, json) => {
  state.questions = json;
  var root = $('.root');
  render(root);
  });

	$('.collapse').collapse({
  toggle: true
	})
});
