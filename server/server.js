// give us ENTIRITY OF express -- NOT ./express
const express = require('express');

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS, etc
app.use(express.static('server/public'));

//SERVE DATA
const people = ['Gabin', 'Josh', 'Joe'];

app.get('/data', (req, res) => {
    console.log('You got to /data!');
    // ALL SERVER REQ(UESTS) NEED RES(PONSE)
    res.send(people);
}); //end app.get

//START UP SERVER!
app.listen(PORT, () => {
    // this will run when server starts
    console.log('Server running on PORT', PORT);
}); // end app.listen


// to start running server: node server/server.js
// to stop server from occupying terminal: control C, kicks back to zsh