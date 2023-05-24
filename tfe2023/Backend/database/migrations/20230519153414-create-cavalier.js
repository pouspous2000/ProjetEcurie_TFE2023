'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cavalier', {
      cavalierId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomCavalier: {
        type: Sequelize.TEXT
      },
      prenomCavalier: {
        type: Sequelize.TEXT
      },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('Cavalier');
    await queryInterface.dropTable('Cavalier', { cascade: true });
  }
};