const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mysql = require("mysql");
const app = express();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes HTTP en formato JSON
app.use(express.json());

// Crear la conexión a la base de datos
// configuracion para la pagina yorchprint
// const db = mysql.createConnection({
//     host: 'localhost', // Normalmente es 'localhost'
//     user: 'u316250754_ricardo',
//     password: 'Yorchprint01',
//     database: 'u316250754_TiendaEnLinea'
// });
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "yorchprint_db"
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida con éxito.');
});

// Aquí puedes añadir tus rutas
// Ejemplo: 
// app.get('/ruta', async (req, res) => { 
//   const response = await axios.get('https://ejemplo.com');
//   res.send(response.data);
// });
app.post('/register', (req, res) => {
    const { nombre, apellido, correo, telefono, contraseña } = req.body;

    const query = 'INSERT INTO usuarios (nombre, apellido, correo, telefono, contraseña) VALUES (?, ?, ?, ?, ?)';
    const values = [nombre, apellido, correo, telefono, contraseña];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            res.status(500).send('Error al registrar al usuario');
            return;
        }

        console.log('Usuario registrado con éxito:', result);
        res.status(201).send('Usuario registrado con éxito');
    });
});

app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;

    const query = 'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?';
    const values = [correo, contraseña];



    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            res.status(500).send('Error al validar al usuario');
            return;
        }

        if (result.length > 0) {
            console.log('Usuario validado con éxito:', result);
            res.status(200).send('Usuario validado con éxito');
        } else {
            console.log('Las credenciales proporcionadas no son válidas');
            res.status(401).send('Las credenciales proporcionadas no son válidas');
        }
    });
});

app.get('/products', (req, res) => {
    const getProductsQuery = 'SELECT * FROM productos';
    db.query(getProductsQuery, (err, result) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            res.status(500).send('Error al obtener los productos');
            return;
        }
        res.status(200).json(result);
    });
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
