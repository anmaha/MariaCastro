// Require express in order to build an express application
const express = require('express');
// Create a variable to store our express methods
const app = express();

const pokemon = require('./models/pokemon.js');

// set and create the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// set the index Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    //res.send(pokemon);
    res.render('Index', {pokemon: pokemon});
});

app.get('/pokemon/:character', (req, res) => {
    res.render("Show", {pokemon: pokemon[req.params.character]})
})
// app.get('/pokemon/:id', (res, req) => {
//     res.render('Show', {pokemon: pokemon[req.params.id]})
// })

module.exports = app;