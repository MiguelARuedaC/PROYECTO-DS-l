const Sequelize = require('sequelize');

// Configuración de la conexión a la base de datos con Sequelize
const sequelize = new Sequelize('DB_SIXHEARTS', 'postgres', '1234', {
    host: 'localhost',
  dialect: 'postgres', // Especifica el dialecto para PostgreSQL
    port: 5432,
  logging: false, // Puedes activar el logging si necesitas ver las consultas que se generan
    dialectOptions: {
    // Configuraciones adicionales para el dialecto
    }
});

module.exports = sequelize;
