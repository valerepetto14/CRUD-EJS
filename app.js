const express = require('express')
const app = express()
const router = require('./routes')
const expressLayouts = require('express-ejs-layouts')

app.use(expressLayouts)
app.set('view engine','ejs');
app.set('port',3000);
app.use('/',router);

app.listen(app.get('port'), ()=>{
    console.log("escuchando.....")
})
