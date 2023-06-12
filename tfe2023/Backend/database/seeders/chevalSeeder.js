module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Cheval', [
            {
                commentaire: 'Premier cheval',
                nomCheval: 'Cheval 1',
                dateNaissance: '2000-01-01',
            },
            {
                commentaire: 'Deuxième cheval',
                nomCheval: 'Cheval 2',
                dateNaissance: '2002-03-04',
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {

    }
};



// module.exports = {
//     up: async (queryInterface, Sequelize) => {
//         // Création des chevaux
//         const chevaux = [
//             {
//                 commentaire: 'Premier cheval',
//                 nomCheval: 'Cheval 1',
//                 dateNaissance: '2000-01-01',
//             },
//             {
//                 commentaire: 'Deuxième cheval',
//                 nomCheval: 'Cheval 2',
//                 dateNaissance: '2002-03-04',
//             },
//             // Ajoutez d'autres chevaux ici si nécessaire
//         ];

//         // Insérer les chevaux dans la table Cheval
//         await queryInterface.bulkInsert('Cheval', chevaux);
//     },

//     down: async (queryInterface, Sequelize) => {
//         // Supprimer les chevaux de la table Cheval
//         await queryInterface.bulkDelete('Cheval', null, {});
//     },
// };

