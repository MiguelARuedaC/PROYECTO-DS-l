const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el registro de usuarios
router.post('/registro', authController.registrarUsuario);

// Ruta para el login de usuarios
router.post('/login', authController.loginUsuario);

// Ruta para obtener todas las personas
router.get('/personas', authController.obtenerPersonas);

module.exports = router;
