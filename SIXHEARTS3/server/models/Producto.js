const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Asegúrate de tener la configuración correcta de Sequelize aquí.

class Producto extends Model {}

Producto.init({
  // Aquí definimos los campos de la tabla PRODUCTO
    ID_PRODUCTO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    NOMBRE_PRODUCTO: {
    type: DataTypes.STRING,
    allowNull: false
    },
    PRECIO: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
    },
    TALLA: {
    type: DataTypes.STRING,
    // allowNull por defecto es true, así que no es necesario si permites valores nulos
    },
    STOCK: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    },
    ID_MARCA: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'marca', // Este es el nombre de la tabla de la base de datos
        key: 'ID_MARCA',
    }
    }
}, {
    sequelize,
    modelName: 'Producto',
    tableName: 'producto',
  timestamps: false // Si no tienes campos de timestamp como createdAt o updatedAt, desactiva los timestamps
});

module.exports = Producto;
