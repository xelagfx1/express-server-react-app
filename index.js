const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hi there. ')
})

app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
})

app.listen(5000);