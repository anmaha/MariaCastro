// Require express in order to build an express application
const express = require('express');
// Create a variable to store our express methods
const app = express();

const { append } = require('express/lib/response');

// Create a variable that represents our port number
const PORT = 3000;
const pokemon = require('./models/pokemon.js');

// set and create the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// set the index route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    //res.send(pokemon);
    res.render('Index');
});

// Listen to the request/response cycle
app.listen(PORT, () => {
    console.log('Currently listening on PORT ' + PORT);
});