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