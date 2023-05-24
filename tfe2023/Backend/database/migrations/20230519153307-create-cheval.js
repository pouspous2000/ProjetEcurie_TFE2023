'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cheval', {
      chevalId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commentaire: {
        type: Sequelize.STRING
      },
      nomCheval: {
        type: Sequelize.TEXT
      },
      dateNaissance: {
        type: Sequelize.DATEONLY
      },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('Cheval');
    await queryInterface.dropTable('Cheval', { cascade: true });
  }
};
