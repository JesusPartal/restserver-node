require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect('mongodb://jpc:Celiapv_23!@ds063879.mlab.com:63879/cafe-jpc', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});