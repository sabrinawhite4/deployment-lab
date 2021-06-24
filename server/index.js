const express = require("express");
const app = express();
const gradient = require('gradient-string');
const path = require('path');

app.get('/', (req, res) => {

    res.sendFile( path.join(__dirname, '../index.html') );

});

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(gradient.instagram(`Server soaring on ${port}`));
})