const conexion = require("../db/connection");

const save = (req, res) =>{
    const Nombre = req.body.nombre;
    const Apellido = req.body.apellido;
    conexion.query('INSERT INTO usuarios SET ?', {Nombre:Nombre,Apellido:Apellido}, (err, rows) =>{
      if(err){
        throw err;
      }else{
        res.redirect('/');
      }
      
  })
}

module.exports = {
  save: save
}