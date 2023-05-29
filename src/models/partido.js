'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Partido.belongsTo(models.Estadio, { foreignKey: 'estadio_id' });
      Partido.hasMany(models.Resultado, { foreignKey: 'partido_id' });
    }
  }
  Partido.init({
    fecha: DataTypes.DATE,
    estadio_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partido',
  });
  return Partido;
};