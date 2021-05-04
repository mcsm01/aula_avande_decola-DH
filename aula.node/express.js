const express = require ('express');
const app = express();
const port = 3000;
const hostname = 'localhost'

app.get('/', (req, res) => {
    const pet = ['cachorro', 'papagaio', 'jabuti', 'gato', 'borboleta']
    res.send(pet)
});

app.listen(port, () => {
    console.log (`Server runningt at http://${hostname}:${port}/`)
})
