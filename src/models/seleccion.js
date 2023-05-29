'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seleccion.belongsTo(models.Continente, { foreignKey: 'continente_id' });
      Seleccion.hasMany(models.Resultado, { foreignKey: 'seleccion_id' });
    }
  }
  Seleccion.init({
    nombre: DataTypes.STRING,
    grupo: DataTypes.STRING,
    continente_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seleccion',
  });
  return Seleccion;
};