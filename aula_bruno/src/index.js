const { request, response } = require("express");
const express = require("express");
const { v4: uuidv4} = require("uuid");

const app = express();

app.use(express.json());

/**
* Query params - Vamos utilizar para buscar informações especicas ou toda a informação.
* Route Params - Serve para identificar um recurso da nossa rota.
* Request body - Ele serve para buscar o corpo da requisição que deve ser criada ou alterada.
*/

const pets = [];

app.get('/pet', (request, response) => {
    return response.json(pets);
});

app.post('/pet', (request, response) => {
    const {nome, tipoPet, idade, raca, nomeDono} = request.body;// trazer o corpo de req.

    const pet = { id: uuidv4(), nome, tipoPet, idade, raca, nomeDono };

    pets.push(pet);

    return response.json(pet); // sempre retornar o pet criado e não o vetor(pets) completo.
});

app.put('/pet/:id', (request, response) => {
    const { id } = request.params; //aqui pegamos o nosso ID.
    const {nome, tipoPet, idade, raca, nomeDono} = request.body;

    const petIndex = pets.findIndex(pet => pet.id === id);

    if(petIndex < 0) {
        return response.status(400).json({ error: "Pet não encontrado!"})
    }

    const pet = {
        id,
        nome,
        tipoPet, 
        idade, 
        raca, 
        nomeDono
    }

    pets[petIndex] = pet

    return response.json(pet);
});

app.delete('/pet/:id', (request, response) => {
    const { id } = request.params; //aqui pegamos o nosso ID.

    const petIndex = pets.findIndex(pet => pet.id === id);

    if(petIndex < 0) {
        return response.status(400).json({ error: "Pet não encontrado!"})
    }

    pets.splice(petIndex, 1)

    return response.status(204).send();
});


app.listen(3030); //http://localhost/3030