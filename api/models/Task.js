var db=require('../dbconnection');

var Task={

getAllTasks:function(callback){

return db.query("Select * from cliente",callback);

},
getTaskById:function(id,callback){

    return db.query("select * cliente where Id=?",[id],callback);
},
addTask:function(Task,callback){
   console.log("inside service");
   console.log(Task.Id);
return db.query("Insert into cliente (vchCodCliente,vchrTipoDoc,vchDocIdentidad,dtmFecha,vchSector,intResultadoPerfil,vchrPortafolio,chrResp01,chrResp02,chrResp03,chrResp04,chrResp05,chrResp06,chrResp07,chrResp08,vchNomPDF) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteTask:function(id,callback){
    return db.query("delete from cliente where Id=?",[id],callback);
},
updateTask:function(id,Task,callback){
    return  db.query("update cliente set vchCodCliente=?,vchrTipoDoc=?,vchDocIdentidad=?,dtmFecha=?,vchSector=?,intResultadoPerfil,vchrPortafolio=?,chrResp01=?,chrResp02=?,chrResp03=?,chrResp04=?, chrResp05=?,chrResp06=?,chrResp07=?,chrResp08=?,vchNomPDF=? where Id=?",[Task.Title,Task.Status,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from cliente where Id in (?)",[delarr],callback);
}
};
module.exports=Task;
