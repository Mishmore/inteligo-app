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

function writeUserData(name, email) {
  database.ref('https://inteligo-app.firebaseio.com/users').set({
    username: name,
    email: email
  });
}
writeUserData('marco', 'fdsfds');

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
