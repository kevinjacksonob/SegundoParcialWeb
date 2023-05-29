'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Continente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Continente.hasMany(models.Seleccion, {
        foreingKey: 'continente_id'
      });
    }
  }
  Continente.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Continente',
  });
  return Continente;
};