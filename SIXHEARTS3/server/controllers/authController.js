const Persona = require('../models/Persona');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
    try {
        // Obtener los datos del usuario
        const { nombre, correo_electronico, contraseÑa } = req.body;

        // Verificar si el usuario ya existe
        const usuarioExistente = await Persona.findOne({
            where: { correo_electronico: correo_electronico },
        });
        if (usuarioExistente) {
            console.log('El correo electrónico ya está registrado:', correo_electronico);
            return res.status(400).send('El correo electrónico ya está registrado.');
        }

        // Crear la nueva persona
        const nuevaPersona = await Persona.create({
            nombre: nombre,
            correo_electronico: correo_electronico,
            fecha_registro: new Date(),
            contraseÑa: contraseÑa
        });
        /*
        // Crear el nuevo usuario con el ID de la persona recién creada
        const nuevoUsuario = await Usuario.create({
            // No es necesario pasar id_usuario si es autoincrementable
        });

        // Verifica que el Usuario se haya creado correctamente
        if (!nuevoUsuario) {
            console.log('Error al crear el usuario');
            return res.status(500).send('Error al crear el usuario.');
        }
        */
       
        // Crear y asignar un token
        const token = jwt.sign({ id: nuevaPersona.id_persona }, process.env.JWT_SECRET || 'tuSecreto', { expiresIn: '1h' });

        console.log('Usuario registrado con éxito:', nuevaPersona);
        res.status(201).header('auth-token', token).send('Usuario registrado con éxito.');
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Error al registrar el usuario: ' + error.message);
    }
};

exports.loginUsuario = async (req, res) => {
    try {
        // Obtener los datos del usuario
        const { correo_electronico, contraseÑa } = req.body;

        // Verificar si el usuario existe
        const usuario = await Persona.findOne({
            where: { correo_electronico: correo_electronico },
        });
        if (!usuario) {
            console.log('Usuario no encontrado!');
            return res.status(400).json({ error: 'Usuario no encontrado!' });

        }

        // Verificar la contraseña (comparación simple, no recomendado)
        if (contraseÑa !== usuario.contraseÑa) {
            console.log('Credenciales incorrectas:', contraseÑa);
            return res.status(400).json({ error: 'Contraseña incorrecta.' });
        }

        // Crear y asignar un token
        const token = jwt.sign({ id: usuario.id_persona }, process.env.JWT_SECRET || 'tuSecreto', { expiresIn: '1h' });

        console.log('Login exitoso:', usuario);
        // Envía el token como respuesta en caso de éxito
        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión.' });
    }
};


exports.obtenerPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        console.error('Error al obtener las personas:', error);
        res.status(500).json({ error: 'Error al obtener las personas.' });
    }
};
