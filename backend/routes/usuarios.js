const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// 📌 Listar todos os usuários
router.get('/', usuariosController.getUsuarios);

// 📌 Criar novo usuário
router.post('/', usuariosController.createUsuario);

// 📌 Login do usuário
router.post('/login', usuariosController.loginUsuario);

// 📌 Verificar email duplicado
router.get('/verificar-email', usuariosController.verificarEmail);

// 📌 Testar conexão com o banco
router.get('/teste', usuariosController.testarConexao);

// 📌 Apagar usuário
router.delete('/:id', usuariosController.deleteUsuario);

// 📌 Atualizar usuário
router.put('/:id', usuariosController.updateUsuario);

module.exports = router;