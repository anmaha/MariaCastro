// IMPORT app.js OUR EXPRESS App
const  app = require('./app.js');

// Create a variable that represents our port number
const PORT = 3000;

// Listen to the request/response cycle
app.listen(PORT, () => {
    console.log('Currently listening on PORT ' + PORT);
});