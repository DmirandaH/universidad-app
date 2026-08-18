
const validarCorreo = (req, res, next) => {

    const {correo} = req.body;

     const estudianteExistente = estudiantes.find(correoEstudiante => correoEstudiante.correo === correo);

      if(!estudianteExistente) 
        return res.status(409).json({
            mensaje: 'El correo ya existe'
        });

    
    next(); // Permite que continue la petción luego de ser validada

};