const express = require('express');
const app = express();

const pet = [
  {
    Animal: 'Cachorro',
    Nome: 'Doginho',
    Cor: 'Caramelo',
    Raça: 'Indefinida',
    Sexo: 'Macho',
    Adotado: false,
  },
  {
    Animal: 'Gato',
    Nome: 'Miau',
    Cor: 'Branco',
    Raça: 'Indefinida',
    Sexo: 'Fêmea',
    Adotado: false,
  },
  {
    Animal: 'Jabuti',
    Nome: 'Ligeirinho',
    Cor: 'Verde',
    Raça: 'Indefinida',
    Sexo: 'Fêmea',
    Adotado: true,
  }
];

app.get('/pets', (req, res) => {
  return res.json(pet);
});

app.post('/pets', (req, res) => {
  return res.json([
    'Cachorro-post',
    'Gato-post',
  ]);
});

app.put('/pets/:id', (req, res) => {
  return res.json([
    'Cachorro-put',
    'Gato-put',
  ])
});

app.delete('/pets/:id', (req, res) => {
  return res.json([
    'Cachorro-delete',
    'Gato-delete',
  ])
});
app.listen(3000)
