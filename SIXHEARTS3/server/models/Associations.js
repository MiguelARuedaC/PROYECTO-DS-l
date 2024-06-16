const Persona = require('./Persona');
const Admin = require('./Admin');
const Usuario = require('./Usuario');
const SuperAdmin = require('./Superadmin');
const Compra = require('./Compra');
const Marca = require('./Marca');
const Producto = require('./Producto');

// Relaciones para Persona
Admin.belongsTo(Persona, { foreignKey: 'id_admin' });
Usuario.belongsTo(Persona, { foreignKey: 'id_usuario' });
SuperAdmin.belongsTo(Persona, { foreignKey: 'id_superadmin' });

// Relaciones para Usuario
Usuario.hasMany(Compra, { foreignKey: 'id_usuario' });
Compra.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Relaciones para Marca
Marca.hasMany(Producto, { foreignKey: 'id_marca' });
Producto.belongsTo(Marca, { foreignKey: 'id_marca' });

// Exportar las funciones de asociación para ser llamadas en otro lugar
module.exports = {
    applyAssociations: function() {
    // Relaciones para Persona
    Admin.belongsTo(Persona, { foreignKey: 'id_admin' });
    Usuario.belongsTo(Persona, { foreignKey: 'id_usuario' });
    SuperAdmin.belongsTo(Persona, { foreignKey: 'id_superadmin' });

    // Relaciones para Usuario
    Usuario.hasMany(Compra, { foreignKey: 'id_usuario' });
    Compra.belongsTo(Usuario, { foreignKey: 'id_usuario' });

    // Relaciones para Marca
    Marca.hasMany(Producto, { foreignKey: 'id_marca' });
    Producto.belongsTo(Marca, { foreignKey: 'id_marca' });
    }
};
