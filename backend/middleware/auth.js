const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ erro: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) {
      return res.status(403).json({ erro: "Token inválido" });
    }

    // 🔑 Aqui o payload do token (id, email) fica disponível
    req.usuario = usuario;
    next();
  });
}

module.exports = auth;