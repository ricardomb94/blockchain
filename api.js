const express = require('express');
const app = express();
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

app.get('/', function (req, res) {
  console.log('Buenvenue');
});

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function (req, res) {});

app.get('/mine', function (req, res) {
  const newBlock = bitcoin.createNewBlock();
  console.log(newBlock);
});

const PORT = 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
