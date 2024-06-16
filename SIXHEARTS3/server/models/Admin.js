// models/Admin.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Persona = require('./Persona');

class Admin extends Model {}

Admin.init({
    ID_ADMIN: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
        model: Persona,
        key: 'ID_PERSONA'
    }
    }
}, {
    sequelize,
    modelName: 'Admin',
    tableName: 'admin',
    timestamps: false
});

module.exports = Admin;
