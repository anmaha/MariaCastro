const express = require('express');
const { append } = require('express/lib/response');
const PORT = 3000;
const app = express();

// set the index route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

app.listen(PORT, () => {
    console.log('Currently listening on PORT ' + PORT);
});