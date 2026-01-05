const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usuariosRoutes = require('./routes/usuarios');
const comunidadeRoutes = require('./routes/comunidade');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/comunidade', comunidadeRoutes);

// Porta configurável via .env (fallback para 5000)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});