const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usuariosRoutes = require('./routes/usuarios');
const comunidadeRoutes = require('./routes/comunidade');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/comunidade', comunidadeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});