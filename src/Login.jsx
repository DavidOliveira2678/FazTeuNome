import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleLogin(e) {
    e.preventDefault();

    if (!form.email || !form.senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: form.email,
          senha: form.senha
        })
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);

      // Se o back retornar token, você pode salvar:
      // localStorage.setItem("token", data.token);

      navigate("/home"); // redireciona para home após login
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Email ou senha incorretos.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="titulo-login">Bem-vindo</h1>
        <p className="subtitulo-login">Acesse sua jornada de desenvolvimento</p>

        {/* EMAIL */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* SENHA */}
        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={form.senha}
            onChange={handleChange}
          />
        </div>

        {/* BOTÃO ENTRAR */}
        <button className="entrar-btn" onClick={handleLogin}>
          Entrar
        </button>

        {/* ESQUECI MINHA SENHA */}
        <div className="forgot-password-text">
          <span onClick={() => navigate("/recuperarsenha")}>
            Esqueci minha senha
          </span>
        </div>

        {/* CADASTRO */}
        <p className="cadastro-text">
          Não tem conta?
          <span className="cadastro-link" onClick={() => navigate("/cadastro")}>
            Cadastre-se
          </span>
        </p>
      </div>
    </div>
  );
}