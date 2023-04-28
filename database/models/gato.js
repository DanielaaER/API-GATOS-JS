'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Gato.init({
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    type: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    counter: DataTypes.STRING,
    strong: DataTypes.STRING,
    image: DataTypes.STRING,
    extension: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gato',
  });
  return Gato;
};