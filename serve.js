const express 	= require('express');
const app 		= express();

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.use('/', express.static('public'));

var api = require("./api");

module.exports = {
  confUrl: "http://172.17.6.235:3001/api/client"
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yIHJvamFzIiwiZW1haWwiOiJ2cm9qYXNAaW50ZWxpZ29ncm91cC5jb20iLCJpYXQiOjE1MDM0NDE3OTUsImV4cCI6MjEzNDU5Mzc5NX0.vp0xzuyacIqZbOKj6EISvnuNFtC5O0eMmv5A-ZtU3hE'
}

app.get('/api/preguntas', function (req, res) {
    var questions = api.questions();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});
