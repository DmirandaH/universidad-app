
//Importamos Express
const express = require('express');

//Creando una instancia de Express
const app = express();

//Definimos el puerto
const PORT = 3000;

//Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');

});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log('servifor escuchnado en http://localhost:${PORT}');
});