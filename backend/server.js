
//Importamos Express
const express = require('express');

//Creando una instancia de Express
const app = express();

app.use(express.json());

//Definimos el puerto
const PORT = 3000;



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


//Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');

});

app.get('/estudiantes', (req, res) => {


// // Simulamos una colección de estudiantes obtenidos desde la base de datos
    res.json(estudiantes);

});


app.get('/estudiantes/:id',(req, res) => {
    const idEstudiante = parseInt(req.params.id);
    //console.log(id);

   const estudiante = estudiantes.find(estudiante => estudiante.id === idEstudiante);

    //console.log(estudiantes);

    if(!estudiante) {
        return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });

    } res.json(estudiante);
   


   /* res.json({
        mensaje: 'Buscando estudiante',
        idSolicitado: id
    });*/
  

}); 



// Creando un estudiante

app.post('/estudiantes', (req, res) => {

    const {nombre, correo, curso} = req.body;

    // validar datos 

    if(!nombre || !correo || !curso) {
        return res.status(400).json({error: 'Faltan datos obligatorios';
        })

    }

    const NuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        correo,
        curso
    };


})

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});


