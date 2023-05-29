const { Router } = require('express');

const router = Router();
const { getSelcciones } = require('../controllers/selecciones')

router.get('', getSelcciones);

module.exports = router;