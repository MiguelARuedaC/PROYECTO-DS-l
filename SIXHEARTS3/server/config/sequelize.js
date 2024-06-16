const { Sequelize } = require('sequelize');

// Importar dotenv para usar variables de entorno
require('dotenv').config();

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Nombre de la base de datos
  process.env.DB_USER,     // Usuario
  process.env.DB_PASSWORD, // Contraseña
    {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: 'postgres',       // Dialecto de la base de datos (ajustar según sea necesario)
    port: process.env.DB_PORT, // Puerto de la base de datos
    // Otras configuraciones adicionales pueden ir aquí
    }
);

module.exports = sequelize;
