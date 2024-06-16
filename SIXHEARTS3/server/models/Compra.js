// models/Compra.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Usuario = require('./Usuario');

class Compra extends Model {}

Compra.init({
    ID_COMPRA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    CANTIDAD: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    FECHA_COMPRA: {
    type: DataTypes.DATEONLY,
    allowNull: false
    },
    TOTAL_COMPRA: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
    },
    ID_USUARIO: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Usuario,
        key: 'ID_USUARIO'
    }
    }
}, {
    sequelize,
    modelName: 'Compra',
    tableName: 'compra',
    timestamps: false
});

module.exports = Compra;
