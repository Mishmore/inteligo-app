'use restrict'

var mysql=require('mysql'),
conf=require('./db-conf'),
dbOptions={
  host: conf.mysql.host,
  port: conf.mysql.port,
  user: conf.mysql.user,
  password:conf.mysql.password,
  database: conf.mysql.database
},
myConn=mysql.createConnection(dbOptions)

myConn.connect((err)=>{
  if (err) {
  return  console.log('Error al Conectarse a MySQL:'+ err.stack) ;
  }else {
    return console.log('Conexión establecida con MySQL N:'+ myConn.threadId);
  }
})

module.exports=myConn
