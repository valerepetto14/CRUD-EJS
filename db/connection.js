const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-ejs'
});

conexion.connect((error)=>{
    if(error){
        throw error;
    }
    console.log("conexion arriba")
});

module.exports = conexion