const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const integrantes = {
  integrantes: [
    { nome: 'Matheus Kilpp Nogueira' },
    { nome: 'Pedro Henrique Barbosa' },
    { nome: 'Paulo Antonio Barbosa' }
  ]
};

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/integrantes', (req, res) => {
  res.json(integrantes);
});