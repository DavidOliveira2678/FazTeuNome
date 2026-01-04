const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const autenticarToken = require('../middleware/auth'); // middleware de autenticação

// 📌 Listar todos os usuários (rota protegida)
router.get('/', autenticarToken, usuariosController.getUsuarios);

// 📌 Criar novo usuário
router.post('/', usuariosController.createUsuario);

// 📌 Login do usuário
router.post('/login', usuariosController.loginUsuario);

// 📌 Verificar email duplicado
router.get('/verificar-email', usuariosController.verificarEmail);

// 📌 Testar conexão com o banco
router.get('/teste', usuariosController.testarConexao);

// 📌 Apagar usuário (rota protegida)
router.delete('/:id', autenticarToken, usuariosController.deleteUsuario);

// 📌 Atualizar usuário (rota protegida)
router.put('/editar-perfil', autenticarToken, usuariosController.updatePerfil);

router.put('/:id', autenticarToken, usuariosController.updateUsuario);

router.get('/perfil', autenticarToken, usuariosController.getPerfil);

module.exports = router;