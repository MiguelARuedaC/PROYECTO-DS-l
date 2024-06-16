const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Persona extends Model {}

Persona.init({
    id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    nombre: {
    type: DataTypes.STRING,
    allowNull: false
    },
    correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    fecha_registro: {
    type: DataTypes.DATEONLY,
    allowNull: false
    },
    contraseÑa: {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
    sequelize: sequelize,
    modelName: 'Persona',
    tableName: 'persona',
    timestamps: false
});

module.exports = Persona;
