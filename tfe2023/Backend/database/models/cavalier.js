module.exports = (sequelize, DataTypes) => {
  const Cavalier = sequelize.define('Cavalier', {
    cavalierId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomCavalier: DataTypes.TEXT,
    prenomCavalier: DataTypes.TEXT,
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  Cavalier.associate = function (models) {
    // Création de la table intermédiaire entre Cavalier et cheval => Couples (Many-To-Many)
    Cavalier.belongsToMany(models.Cheval,{
      through: 'Couples',
      foreignKey: 'cavalierId',
      otherKey : 'chevalId'
    });
    Cavalier.afterCreate(async (cavalier, options) => {
      const chevaux = await models.Cheval.findAll();
      await Promise.all(
        chevaux.map((cheval) => {
          return cavalier.addCheval(cheval);
        })
      );
    });
  }
 
  return Cavalier;
};
