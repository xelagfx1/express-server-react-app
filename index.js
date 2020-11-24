const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send({Hi: 'there.'})
})

app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});