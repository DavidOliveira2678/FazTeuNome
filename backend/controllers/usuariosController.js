const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 📌 Listar todos os usuários
exports.getUsuarios = (req, res) => {
  db.query(
    'SELECT id, nome_completo, email, escola, tipo_usuario, telefone FROM usuarios',
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};

// 📌 Criar novo usuário (com hash de senha)
exports.createUsuario = async (req, res) => {
  try {
    const { nome_completo, email, escola, tipo_usuario, senha, telefone } = req.body;

    if (!senha || senha.length < 6) {
      return res.status(400).json({ erro: 'Senha deve ter pelo menos 6 caracteres' });
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    db.query(
      'INSERT INTO usuarios (nome_completo, email, escola, tipo_usuario, senha_hash, telefone) VALUES (?, ?, ?, ?, ?, ?)',
      [nome_completo, email, escola, tipo_usuario, senha_hash, telefone],
      (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
          id: results.insertId,
          nome_completo,
          email,
          escola,
          tipo_usuario,
          telefone,
        });
      }
    );
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// 📌 Login do usuário (com JWT)
exports.loginUsuario = (req, res) => {
  const { email, senha } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const usuario = results[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaValida) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      mensagem: 'Login autorizado',
      token,
      usuario: {
        id: usuario.id,
        nome_completo: usuario.nome_completo,
        email: usuario.email,
        escola: usuario.escola,
        tipo_usuario: usuario.tipo_usuario,
        telefone: usuario.telefone,
      }
    });
  });
};

// 📌 Testar conexão
exports.testarConexao = (req, res) => {
  db.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
      console.error('Erro detalhado:', err);
      return res.status(500).json({ erro: 'Erro na conexão com o banco' });
    }
    res.json({ sucesso: true, resultado: results[0].resultado });
  });
};

// 📌 Apagar usuário pelo ID
exports.deleteUsuario = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.affectedRows === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    res.json({ mensagem: `Usuário com ID ${id} removido com sucesso!` });
  });
};

// 📌 Atualizar usuário pelo ID
exports.updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nome_completo, email, escola, tipo_usuario, telefone } = req.body;

  db.query(
    'UPDATE usuarios SET nome_completo = ?, email = ?, escola = ?, tipo_usuario = ?, telefone = ? WHERE id = ?',
    [nome_completo, email, escola, tipo_usuario, telefone, id],
    (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.affectedRows === 0) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }

      res.json({ mensagem: `Usuário com ID ${id} atualizado com sucesso!` });
    }
  );
};

// 📌 Verificar se email já existe
exports.verificarEmail = (req, res) => {
  const { email } = req.query;

  db.query("SELECT id FROM usuarios WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json(err);

    res.json({ existe: results.length > 0 });
  });
};
exports.getPerfil = (req, res) => {
  const { id } = req.usuario; // vem do token decodificado

  db.query(
    'SELECT id, nome_completo, email, escola, tipo_usuario, telefone FROM usuarios WHERE id = ?',
    [id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0) return res.status(404).json({ erro: 'Usuário não encontrado' });

      res.json(results[0]);
    }
  );
};
exports.updatePerfil = (req, res) => {
  const { id } = req.usuario; // vem do token
  const { nome_completo, email, escola, tipo_usuario, telefone, bio } = req.body;

  db.query(
    'UPDATE usuarios SET nome_completo = ?, email = ?, escola = ?, tipo_usuario = ?, telefone = ?, bio = ? WHERE id = ?',
    [nome_completo, email, escola, tipo_usuario, telefone, bio, id],
    (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.affectedRows === 0) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }

      res.json({ mensagem: 'Perfil atualizado com sucesso!' });
    }
  );
};
