const express = require('express');
const router = express.Router();
const comunidadeController = require('../controllers/comunidadeController');
const autenticarToken = require('../middleware/auth');

router.get('/', autenticarToken, comunidadeController.getPostagens);

module.exports = router;