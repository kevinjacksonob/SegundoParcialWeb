'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Resultados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goles: {
        type: Sequelize.INTEGER
      },
      amarillas: {
        type: Sequelize.INTEGER
      },
      rojas: {
        type: Sequelize.INTEGER
      },
      partido_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Partido',
          key: 'id',
        },
      },
      seleccion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Seleccion',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Resultados');
  }
};