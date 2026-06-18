const express = require('express');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json()); 

app.get('/categorias', async (req, res) => {
  try {
    const resultado = await db.query('SELECT * FROM categoria');
    res.json(resultado.rows); 
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao conectar ou buscar no banco de dados');
  }
});

app.get('/produtos', async (req, res) => {
    try {
        const resultado = await db.query('SELECT * FROM produto');
        res.json(resultado.rows); 
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro ao buscar os produtos no banco de dados');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT} 🚀`);
});