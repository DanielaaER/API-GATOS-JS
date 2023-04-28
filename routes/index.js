const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res)=> res.send('Bienvenido a la API GATOS'))

router.post('/gatos', controllers.createGato);
router.get('/gatos', controllers.getAllGatos);

module.exports = router;