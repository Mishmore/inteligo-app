'use strict'

var ClientController=require('../controllers/client-controller'),
express=require('express'),
router=express.Router()

router
    .use(Client)

    .get('/',ClientController.getAll)

    .get('/agregar',ClientController.agregar)

    .post('/',ClientController.insert)

    .get('/editar/:id',ClientController.getOne)
    })
    .post('/actualizar/:id',ClientController.update)
    })
    .post('/eliminar/:id',ClientController.delete)
    })
    .use(ClientController.error404)

module.exports=router
