const express = require('express');
const router = express.Router();
const clientController = require ('./../controllers/clientController')

router.get('/', clientController.getClients);
router.get('/:id', clientController.getOneClient );
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient); 
router.delete('/:id', clientController.removeClient);

module.exports = router;