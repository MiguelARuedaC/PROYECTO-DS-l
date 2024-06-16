// models/SuperAdmin.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Persona = require('./Persona');

class SuperAdmin extends Model {}

SuperAdmin.init({
    ID_SUPERADMIN: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
        model: Persona,
        key: 'ID_PERSONA'
    }
    }
}, {
    sequelize,
    modelName: 'Superadmin',
    tableName: 'superadmin',
    timestamps: false
});

module.exports = SuperAdmin;
