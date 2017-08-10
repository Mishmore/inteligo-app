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

btnEnviar.on('click', function(e) {
    var email = txtEmail.val();
    fillEmail(email);
});
