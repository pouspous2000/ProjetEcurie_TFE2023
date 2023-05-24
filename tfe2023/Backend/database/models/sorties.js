'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sorties extends Model {
  
    static associate(models) {
      Sorties.belongsTo(models.Ecurie);

      Sorties.belongsToMany(models.Cheval,{
        through: 'TypesSorties',
        foreignKey: 'sortiesId',
        otherKey : 'chevalId'
      });
    }
  }
  Sorties.init({
    sortiesId: DataTypes.INTEGER,
    sortiesPrix : DataTypes.INTEGER, 
    sortiesNom : DataTypes.STRING, 
    SortiesSemaines : DataTypes.BOOLEAN, 
    sortiesWE : DataTypes.BOOLEAN, 
    sortiesDebut : DataTypes.INTEGER,
    sortiesFin : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sorties',
  });
  return Sorties;
};