const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUsuarios = (req, res) => {
  db.query(
    'SELECT id, nome_completo, email, escola, tipo_usuario, telefone FROM usuarios',
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};

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
      { id: usuario.id, email: usuario.email,
        tipo_usuario:usuario.tipo_usuario,// informações úteis no token
      },
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

exports.testarConexao = (req, res) => {
  db.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
      console.error('Erro detalhado:', err);
      return res.status(500).json({ erro: 'Erro na conexão com o banco' });
    }
    res.json({ sucesso: true, resultado: results[0].resultado });
  });
};

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

exports.verificarEmail = (req, res) => {
  const { email } = req.query;

  db.query("SELECT id FROM usuarios WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json(err);

    res.json({ existe: results.length > 0 });
  });
};
exports.getPerfil = (req, res) => {
  const { id } = req.usuario;
  console.log("getPerfil → id do token:", id);

  db.query(
    "SELECT id, nome_completo, email, escola, tipo_usuario, telefone, bio, serie FROM usuarios WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0) return res.status(404).json({ erro: "Usuário não encontrado" });
      res.json(results[0]);
    }
  );
};

exports.updatePerfil = (req, res) => {
  const { id } = req.usuario; // NÃO usar req.params
  const { nome_completo, email, escola, telefone, bio } = req.body;

  console.log("updatePerfil → id do token:", id);
  console.log("updatePerfil → body:", { nome_completo, email, escola, telefone, bio });

  db.query(
    "UPDATE usuarios SET nome_completo = ?, email = ?, escola = ?, telefone = ?, bio = ? WHERE id = ?",
    [nome_completo, email, escola, telefone, bio, id],
    (err, results) => {
      if (err) {
        console.error("Erro SQL:", err);
        return res.status(500).json(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }
      res.json({ mensagem: "Perfil atualizado com sucesso!" });
    }
  );
};