'use strict'

var conn=require('./dbconnection')
  ClientModel=()=>{}

ClientModel.getAll=(cb)=> conn.query('SELECT * FROM cliente',cb)
ClientModel.insert=(data,cb)=>conn.query('INSERT INTO cliente SET ?',data,cb)
ClientModel.getOne=(id,cb)=>conn.query('SELECT * FROM cliente where id=?',id,cb)
ClientModel.update=(data,cb)=>conn.query('UPDATE cliente SET ? WHERE id=?', [data,data.id],cb)
ClientModel.delete=(id,cb)=>conn.query('DELETE FROM cliente where id=?',id,cb)

  module.exports=ClientModel
