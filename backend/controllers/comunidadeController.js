const db = require('../config/db');

exports.getPostagens = (req, res) => {
    db.query(
        'SELECT p.id, p.usuario_id, u.nome_completo, u.serie, p.data_postagem, p.postagem FROM postagens AS p INNER JOIN usuarios AS u ON p.usuario_id = u.id ORDER BY p.data_postagem DESC;',
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro ao buscar postagens" });
      }
      res.json(results);
      console.log(results);
    }
  );
};

exports.addPostagem = (req, res) => {
  const { id } = req.usuario;
  const { postagem } = req.body;
  console.log(id);

  if (!postagem || postagem.length < 1) {
    return res.status(400).json({ erro: 'Postagem vazia.' });
  }

  db.query(
    'INSERT INTO postagens(usuario_id, postagem) VALUES (?, ?);',
    [id, postagem],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        id: results.insertId,
        usuario_id: id,
        postagem,
      });
    }
  );
}

exports.deletePostagem = (req, res) => {
  const { id: usuario_id } = req.usuario;
  const { postagemId } = req.params;

  db.query(
    "DELETE FROM postagens WHERE id = ? AND usuario_id = ?",
    [postagemId, usuario_id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.affectedRows === 0) {
        return res.status(403).json({ erro: "Postagem não encontrada ou não pertence ao usuário." });
      }

      res.json({ mensagem: "Postagem removida com sucesso!" });
    }
  );
};