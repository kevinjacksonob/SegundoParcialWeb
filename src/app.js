const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8000;

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Directorio Público
app.use( express.static('public') );

app.use( '/selecciones', require('./routes/auth.routes'));


app.listen( PORT, () => {
    console.log('Servidor corriendo en puerto', PORT );
});