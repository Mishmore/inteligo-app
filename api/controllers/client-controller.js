'use strict'

var ClientModel=require('../models/client-model')
  ClientController=()=>{}

ClientController.getAll=(req,res,next)=>{
  ClientModel.getAll((err,rows)=>{
    if (err)
    {
      let locals={
        title:'Error al consultar la base de datos',
        description: 'Error de sintaxis SQL',
        error:err
        }
        res.render('error',locals)
    }
    else{
      let locals={
        title:'Lista de clientes',
        data:rows
        }
        res.render('index',locals)
    }

  })
}

ClientController.insert=(req,res,next)=>{
    let client=
      {
          vchCodCliente: vchCodCliente,
          vchrTipoDoc: vchrTipoDoc,
          vchDocIdentidad: vchDocIdentidad,
          vchSector: vchSector,
          intResultadoPerfil: intResultadoPerfil,
          vchrPortafolio: vchrPortafolio,
          chrResp01: chrResp01,
          chrResp02: chrResp02,
          chrResp03: chrResp03,
          chrResp04: chrResp04,
          chrResp05: chrResp05,
          chrResp06: chrResp06,
          chrResp07: chrResp07,
          chrResp08: chrResp08,
          vchNomPDF: vchNomPDF
        }
  console.log(client)

  ClientModel.insert(client,(err)=>{
    if (err)
    {
      let locals={
        title:'Error al agregar el registro',
        description: 'Error de sintaxis SQL',
        error:err
        }
        res.render('error',locals)
    }
    else
    {
      res.redirect('/')
    }
  })
}

ClientController.getOne=(req,res,next)=>{
  let id=req.params.id
  console.log(id)

  ClientModel.getOne(id,(err,rows)=>{
    console.log(err,'---',rows)
    if (err)
    {
      let locals={
        title:'Error al buscar el registro con el id:'+ id,
        description: 'Error de sintaxis SQL',
        error: err
      }
      res.render('error',locals)
    }
    else {
      let locals={
        title: 'Editar cliente',
        data:rows
      }
      res.render('edit-client',locals)
    }
  })
}

ClientController.update=()=>{}
ClientController.delete=()=>{}

ClientController.addForm=(req,res,next)=>res.render('add.client',{title:'Agregar cliente'})

ClientController.error404=(req,res,next)=>{
  let error=new Error(),
  locals={
    title: 'Error 404',
    description: 'Recurso No Encontrado',
    error: err
  }
  error.status=404
  res.render('Error',locals)
  next()
}

  module.exports=ClientController
