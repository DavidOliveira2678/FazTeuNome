const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const autenticarToken = require('../middleware/auth'); 

router.get('/', autenticarToken, usuariosController.getUsuarios);

router.post('/', usuariosController.createUsuario);

router.post('/login', usuariosController.loginUsuario);

router.get('/verificar-email', usuariosController.verificarEmail);

router.get('/teste', usuariosController.testarConexao);

router.delete('/:id', autenticarToken, usuariosController.deleteUsuario);

router.put('/editar-perfil', autenticarToken, usuariosController.updatePerfil);

router.put('/:id', autenticarToken, usuariosController.updateUsuario);

router.get('/perfil', autenticarToken, usuariosController.getPerfil);

module.exports = router;