const conexion = require("../db/connection");

const save = (req, res) =>{
    const id = req.body.idAdd;
    const Nombre = req.body.nombre;
    const Apellido = req.body.apellido;
    conexion.query('INSERT INTO usuarios SET ?', {id:id,Nombre:Nombre,Apellido:Apellido}, (error, rows) =>{
      if(error){
        throw error;
      }else{
        res.redirect('/');
      } 
      
  })
}
const update = (req, res) =>{
  const id = parseInt(req.body.id);
  const Nombre = req.body.nombre;
  const Apellido = req.body.apellido;
  conexion.query('UPDATE usuarios SET ? WHERE id = ?',[{Nombre:Nombre, Apellido:Apellido}, id], (error, results)=>{
    if(error){
      throw error;
    }else{
      res.redirect('/');
    } 
    
})
}


module.exports = {
  save: save,
  update: update
}