const { Seleccion, Resultado } = require('../models');

const getSelcciones = async(res, req) => {
    try {
    const selecciones = await Seleccion.findAll({ include: Continente });
    res.json(selecciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las selecciones' });
  }
}

// Registrar una selección
const postSelcciones =  async (req, res) => {
  try {
    const seleccion = await Seleccion.create(req.body);
    res.json(seleccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar la selección' });
  }
};

// Actualizar una selección
const updateSelcciones =  async (req, res) => {
  const { id } = req.params;
  try {
    const seleccion = await Seleccion.findByPk(id);
    if (!seleccion) {
      return res.status(404).json({ error: 'Selección no encontrada' });
    }
    await seleccion.update(req.body);
    res.json(seleccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la selección' });
  }
};

// Obtener una selección por su id
const getSelccionById = async (req, res) => {
  const { id } = req.params;
  try {
    const seleccion = await Seleccion.findByPk(id);
    if (!seleccion) {
      return res.status(404).json({ error: 'Selección no encontrada' });
    }
    res.json(seleccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la selección' });
  }
};

// Eliminar una selección por su id
const daleteSelccion =  async (req, res) => {
  const { id } = req.params;
  try {
    const seleccion = await Seleccion.findByPk(id);
    if (!seleccion) {
      return res.status(404).json({ error: 'Selección no encontrada' });
    }
    await seleccion.destroy();
    res.json({ message: 'Selección eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la selección' });
  }
};

// Obtener los resultados de una selección por su id
const getResultadoById =  async (req, res) => {
  const { id } = req.params;
  try {
    const resultados = await Resultado.findAll({
      where: { seleccion_id: id },
      include: Seleccion,
    });
    res.json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los resultados' });
  }
};

const getSeleccionesByGrupo =  async (req, res) => {
  const { grupo } = req.params;
  try {
    const selecciones = await Seleccion.findAll({
      where: { grupo: grupo },
      include: Seleccion
    });
    res.json(selecciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las selecciones' });
  }
};

module.exports = {
    getSelcciones,
    postSelcciones,
    updateSelcciones,
    getSelccionById,
    daleteSelccion,
    getResultadoById
}