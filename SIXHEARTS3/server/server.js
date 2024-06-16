const express = require('express');
const app = express();
const db = require('./config/dbConfig');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


// Middleware para permitir solicitudes desde el puerto 3000 donde corre React
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware para analizar el cuerpo JSON de las solicitudes entrantes
app.use(express.json());

app.get('/test-db', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM tu_tabla');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al conectar con la base de datos');
    }
});

// Rutas de autenticación
app.use('/api/auth', authRoutes);


// ...resto de tu configuración del servidor...

// Inicia el servidor en el puerto 3001
app.listen(3001, () => {
    console.log('Servidor escuchando en el puerto 3001');
});
