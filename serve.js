const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.use('/', express.static('public'));

var fb = require("firebase");
if(fb) console.log("fb existe");

var config = {
  apiKey: "AIzaSyDV8HQ1DkRV1m0TRwJt39lgTB25AekoLyA",
  authDomain: "inteligo-app.firebaseapp.com",
  databaseURL: "https://inteligo-app.firebaseio.com",
  projectId: "inteligo-app",
  storageBucket: "inteligo-app.appspot.com",
  messagingSenderId: "849747112038"
};

var firebase = fb.initializeApp(config);
if(firebase) console.log("hola");
var database = firebase.database();

function preguntaUno() {
  database.ref('/preguntas').set({
  pregunta: "¿Cuál es el objetivo primario de su portafolio de inversión?",
  id: "1",
  opciones: {
    a: {
      "nombre": "Seguridad",
      "texto": "Prefiero la seguridad de mis inversiones, así la rentabilidad en el tiempo se encuentre por debajo de los niveles de inflación (2% anual).",
      "valor": 0
    },
    b: {
      "texto": "Protección a la inflación.- Estoy dispuesto a aceptar sólo un nivel bajo de variación en mi inversión a cambio de una rentabilidad que me proteja de la inflación.",
      "valor": 2
    },
    c: {
      "nombre": "Crecimiento y seguridad",
      "texto": "Quiero un balance entre crecimiento y seguridad, y estoy dispuesto a aceptar un nivel medio de variación en el valor de mi inversión con la finalidad de alcanzar una rentabilidad mayor a la inflación.",
      "valor": 4
    },
    d: {
      "nombre": "Crecimiento",
      "texto": "Estoy interesado en generar crecimiento en mi inversión en el tiempo, y estoy menos preocupado por las fluctuaciones que éste pueda registrar en la búsqueda del retorno.",
      "valor": 6
    },
    e: {
      "nombre": "Máximo crecimiento",
      "texto": "Mi único objetivo es el máximo crecimiento de mi inversión en el tiempo y puedo tolerar altos niveles de fluctuación en el valor de mi inversión en la búsqueda del retorno.",
      "valor": 8
    }
  }
  });
}
preguntaUno();

var pregunta1 = null;
var refPregunt1 = database.ref('/preguntas').child('pregunta');
refPregunt1.on('value', snap => pregunta1 = snap.val() );
console.log(pregunta1);

//var userId = firebase.auth().currentUser.uid;
// function leerData() {
//   return database.ref('/preguntas').once('value').then(function(snapshot) {
//     var pregunta = snapshot.val().pregunta;
//     console.log(pregunta);
//   });
// }
// leerData();

// Import Admin SDK
//var admin = require("firebase-admin");
//if(admin) console.log("admin existe");
//var usersRef = ref.child("users");
// Get a database reference to our blog
// var db = firebase.database();
// if(db) console.log("db existe");
// var ref = db.ref("https://inteligo-app.firebaseio.com/data");

// var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper"
//   }
// });
