const express = require('express')
// const path = require('path')
// const fs = require('fs')
const app = express()

app.set('view engine', 'ejs');

const host = '127.0.0.1';
const port = 7000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')

    res.send('hello')
});


app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
