
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

    //creo el array de estudiantes 


    const estudiantes = [ 

        {
        id: 1,
        nombre: 'Dayan',
        curso: 'creacion Api',
        correo: 'mirdev@corp.com' 
    },

       {
        id: 2,
        nombre: 'Maria',
        curso: 'Desarrollo Web',
        correo: 'mariadb@dark.com' 
    },


       {
        id: 3,
        nombre: 'Paola',
        curso: 'Arquitectura de Software',
        correo: 'paola@micro.com' 
    },

    ]

// // Simulamos una colección de estudiantes obtenidos desde la base de datos
    res.json(estudiantes);

});


app.get('/id',(req, res) => {
    res.json(id)
}); 


// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});