module.exports = (sequelize, DataTypes) => {
  const Cheval = sequelize.define('Cheval', {
    chevalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    commentaire: DataTypes.TEXT,
    nomCheval: DataTypes.TEXT,
    dateNaissance: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  Cheval.associate = function (models) {
    // Création de la table intermédiaire entre Cavalier et cheval => Couples (Many-To-Many)
    Cheval.belongsToMany(models.Cavalier, {
      through: 'Couples',
      foreignKey: 'chevalId',
      otherKey: 'cavalierId'
    });

    Cheval.belongsTo(models.Ecurie);

    Cheval.afterCreate(async (cheval, options) => {
      const cavaliers = await models.Cavalier.findAll();
      await Promise.all(
        cavaliers.map((cavalier) => {
          return cheval.addCavalier(cavalier);
        })
      );
    });
    
  };

  return Cheval;
};
