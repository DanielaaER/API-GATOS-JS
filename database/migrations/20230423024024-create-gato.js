'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      attack: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      speed: {
        type: Sequelize.INTEGER
      },
      defense: {
        type: Sequelize.INTEGER
      },
      counter: {
        type: Sequelize.STRING
      },
      strong: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      extension: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gatos');
  }
};