const { DataTypes } = require('sequelize');
const sequelize = require('../data-access/db');

const Kitchen = sequelize.define('Kitchen', {
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Kitchen;
