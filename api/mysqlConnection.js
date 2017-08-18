/*const mysql   = require('mysql');

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

module.exports = (router) => {
 
  router.get('/json',function (req,resp) {
    connection.query("SELECT * FROM cliente",function (error,rows,fields) {
      if (!!error) {
        console.log('error en el query');
      } else {
        console.log('succes\n');
        console.log(rows);
      }
    });
  });  

  router.post('/registerProfile', function (req,res) {   
    connection.query('INSERT INTO users SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
        }
    );   
  });
  
  return router;
}*/