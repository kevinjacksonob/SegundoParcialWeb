'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resultado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resultado.belongsTo(models.Partido, { foreignKey: 'partido_id' });
    Resultado.belongsTo(models.Seleccion, { foreignKey: 'seleccion_id' });
    }
  }
  Resultado.init({
    goles: DataTypes.INTEGER,
    amarillas: DataTypes.INTEGER,
    rojas: DataTypes.INTEGER,
    partido_id: DataTypes.INTEGER,
    seleccion_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resultado',
  });
  return Resultado;
};