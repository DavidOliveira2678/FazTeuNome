require('dotenv').config();
const jwt = require("jsonwebtoken");

function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    console.log("Token não fornecido");
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    return res.status(401).json({ erro: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) {
      console.error("Erro ao verificar token:", err.message);
      return res.status(403).json({ erro: "Token inválido" });
    }

    req.usuario = usuario;
    next();
  });
}

module.exports = autenticarToken;