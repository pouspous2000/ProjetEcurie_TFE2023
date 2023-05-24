module.exports = (sequelize, DataTypes) => {
  const Ecurie = sequelize.define('Ecurie', {
      ecurieId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      adresse: DataTypes.TEXT,
      nomCheval: DataTypes.TEXT,
      numeroTVA: DataTypes.TEXT,
      enteteFacture: DataTypes.TEXT,
      numeroFacture: DataTypes.TEXT,
      numeroEcurie: DataTypes.TEXT,
      mailEcurie: DataTypes.TEXT,
  }, {
      freezeTableName: true,
      timestamps: false,
  });
  Ecurie.associate = function (models) {
      // Création de la table intermédiaire entre Cavalier et cheval => Couples (Many-To-Many)
      Ecurie.hasMany(models.Cheval)
      Ecurie.hasMany(models.Sorties)
     
  };
  // Cheval.sync();
  return Ecurie;
};
