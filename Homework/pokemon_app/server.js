const express = require('express');
const { append } = require('express/lib/response');
const PORT = 3000;
const app = express();
const pokemon = require('./models/pokemon.js');

// set the index route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.listen(PORT, () => {
    console.log('Currently listening on PORT ' + PORT);
});