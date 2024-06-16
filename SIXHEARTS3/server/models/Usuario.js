// models/Usuario.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Persona = require('./Persona');

class Usuario extends Model {}

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Si quieres que sea autoincrementable
    },
    // ... otros atributos del modelo que quieras añadir
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false
});

module.exports = Usuario;
