// models/Marca.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Marca extends Model {}

Marca.init({
    ID_MARCA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    NOMBRE_MARCA: {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
    sequelize,
    modelName: 'Marca',
    tableName: 'marca',
    timestamps: false
});

module.exports = Marca;
