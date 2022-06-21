const express = require('express');
const router = express.Router();
const conexion = require('./db/connection')
const crud = require('./controllers/crud');
const Connection = require('mysql/lib/Connection');


router.get('/', (req,res) => {
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('table',{results:results})
        }
    }); 
});


router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM usuarios WHERE id=?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

router.post('/save', crud.save)
router.post('/update', crud.update)

module.exports = router;