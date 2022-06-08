const express = require('express');
const router = express.Router();
const conexion = require('./db/connection')


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

module.exports = router;