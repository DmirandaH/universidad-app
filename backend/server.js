
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

app.get('/estudiantes', (req, res) => {

    //creo el objecto estudiante 

    const estudiante = {
        id: 1,
        nombre: 'dayan',
        curso: 'creacion Api',
        correo: 'mirdev@corp.com' 
    }

// // Simulamos un estudiante obtenido desde la base de datos
    res.json(estudiante);

});



// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});