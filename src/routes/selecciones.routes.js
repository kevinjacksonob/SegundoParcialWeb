const { Router } = require('express');

const router = Router();
const { getSelcciones,  
  postSelcciones,
  updateSelcciones,
  getSelccionById,
  daleteSelccion,
  getResultadoById  } = require('../controllers/selecciones')

router.get('', getSelcciones);
router.post('', postSelcciones);
router.put('', updateSelcciones);
router.get('/:id', getSelccionById);
router.delete('/:id', daleteSelccion);
router.get('/:id/resultado', getResultadoById);

module.exports = router;