const express = require('express');
const router = express.Router();
const comunidadeController = require('../controllers/comunidadeController');
const autenticarToken = require('../middleware/auth');

router.get('/', autenticarToken, comunidadeController.getPostagens);

router.post('/', autenticarToken, comunidadeController.addPostagem);

router.delete('/:postagemId', autenticarToken, comunidadeController.deletePostagem);

module.exports = router;