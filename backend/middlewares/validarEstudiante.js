
const validarEstudiante = (req, res, next) => {

    const {nombre, correo, curso} = req.body;

    // Validar los datos sugeridos.

     if(!nombre || !correo || !curso) {
        return res.status(400).json({error: 'Faltan datos obligatorios' // return res.status(400) detiene la petición si no se cumple
        });

    }
    next(); // Permite que continue la petción luego de ser validada

};

module.exports = validarEstudiante;