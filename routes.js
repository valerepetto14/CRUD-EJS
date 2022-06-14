const express = require('express');
const router = express.Router();
const conexion = require('./db/connection')
const crud = require('./controllers/crud');


router.get('/', (req,res) => {
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('table',{results:results})
        }
    }); 
});

router.get('/create', (req,res) => {
    res.render('create')
});

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM usuarios WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});

router.post('/save', crud.save)

module.exports = router;