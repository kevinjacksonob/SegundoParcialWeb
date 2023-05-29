'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estadio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Estadio.hasMany(models.Partido, { foreignKey: 'estadio_id' });
    }
  }
  Estadio.init({
    nombre: DataTypes.STRING,
    capacidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estadio',
  });
  return Estadio;
};