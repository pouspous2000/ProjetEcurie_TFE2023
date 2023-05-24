'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Ecurie', {
      ecurieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    adresse: Sequelize.TEXT,
    nomCheval: Sequelize.TEXT,
    numeroTVA: Sequelize.TEXT,
    enteteFacture: Sequelize.TEXT,
    numeroFacture: Sequelize.TEXT,
    numeroEcurie: Sequelize.TEXT,
    mailEcurie: Sequelize.TEXT,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Ecurie', { cascade: true });
  }
};

