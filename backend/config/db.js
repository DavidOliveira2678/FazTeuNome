const mysql = require('mysql2');
require('dotenv').config();

// Cria um pool de conexões com o banco
const db = mysql.createPool({
  host: process.env.DB_HOST,       // endereço do servidor MySQL
  user: process.env.DB_USER,       // usuário do banco
  password: process.env.DB_PASS,   // senha do banco
  database: process.env.DB_NAME,   // nome do banco
  port: process.env.DB_PORT || 3306, // porta padrão do MySQL
  waitForConnections: true,        // fila de espera se todas as conexões estiverem ocupadas
  connectionLimit: 10,             // número máximo de conexões simultâneas
  queueLimit: 0                    // sem limite de fila
});

// Testar conexão inicial
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.message);
  } else {
    console.log('✅ Conexão com MySQL estabelecida com sucesso!');
    connection.release();
  }
});

module.exports = db;
