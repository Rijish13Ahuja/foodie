const { DataTypes } = require('sequelize');
const sequelize = require('../data-access/db');
const Kitchen = require('./Kitchen');

const Meal = sequelize.define('Meal', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL, allowNull: false },
});

Meal.belongsTo(Kitchen); // Establish relation with Kitchen

module.exports = Meal;
