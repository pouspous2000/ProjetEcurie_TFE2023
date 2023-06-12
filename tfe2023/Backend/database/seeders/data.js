    module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Cavalier', [
          {
            nomCavalier: 'John',
            prenomCavalier: 'Doe'
          },
          {
            nomCavalier: 'Jane',
            prenomCavalier: 'Smith'
          }
        ], {});
      }, 
  
    down: async (queryInterface, Sequelize) => {
     
    }
  };
  
