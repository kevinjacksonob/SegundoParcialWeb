const { Seleccion } = require('../models');

const getSelcciones = async(res, req) => {
    try {
    const selecciones = await Seleccion.findAll({ include: Continente });
    res.json(selecciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las selecciones' });
  }
}

module.exports = {
    getSelcciones
}