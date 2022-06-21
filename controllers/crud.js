const conexion = require("../db/connection");

const save = (req, res) =>{
    const id = req.body.idAdd;
    const Nombre = req.body.nombre;
    const Apellido = req.body.apellido;
    conexion.query('INSERT INTO usuarios SET ?', {id:id,Nombre:Nombre,Apellido:Apellido}, (err, rows) =>{
      if(err){
        throw err;
      }else{
        res.redirect('/');
      } 
      
  })
}

const destroy = (req,res) =>{
  const id = req.params.id;
    conexion.query('DELETE FROM task where id = ?', [id], (err,rows) =>{
          res.redirect('/tasks');
      });
};

module.exports = {
  save: save,
  destroy:destroy
}