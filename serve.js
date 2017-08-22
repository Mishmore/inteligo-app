const express = require('express');
const app = express();
//const morgan    = require('morgan'); // Sistema de logging (muestra en la cosa los request)
//const morganjson= require('morgan-json');
/*
const bodyParser= require('body-parser');
const mysql 	= require('mysql');


var connection  = mysql.createConnection({
  host     : 'localhost',
  user     : 'itlgclie',
  password : 'itlg@2017_',
  database : 'clientesws'
});

connection.connect(function (error) {
	if (!!error) {
		console.log('error');
	} else {
		console.log('Connected');
	}
});

app.get('/api/json',function (req,resp) {
	connection.query("SELECT * FROM cliente",function (error,rows,fields) {
		if (!!error) {
			console.log('error en el query');
		} else {
			 resp.json(rows);
		}
	});
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

module.exports = app.post('/registrarCliente',function (req,resp) {
	
	connection.query("INSERT INTO cliente SET ?",req.body,function (err) {
		if (err) {
			console.log(req.body);
		} else {
			console.log("datos agregados");
		}
	});
});
*/
app.set('port', (process.env.PORT || 6351));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.use('/', express.static('public'));

var api = require("./api");

app.get('/api/preguntas', function(req, res) {
    var questions = api.questions();
    questions.then((result) => {
        res.status(200).json(result);
    });
});