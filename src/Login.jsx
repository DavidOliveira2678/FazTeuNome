import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const irParaHome = (e) => {
    e.preventDefault();
    if (!form.email || !form.senha) {
      alert("Preencha todos os campos.");
      return;
    }
    localStorage.setItem("email", form.email);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="titulo-login">Bem-vindo</h1>
        <p className="subtitulo-login">Acesse sua jornada de desenvolvimento</p>

        <form onSubmit={irParaHome}>
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

          <button className="entrar-btn" type="submit">
            Entrar
          </button>
        </form>

        <div style={{ height: "20px" }}></div>

        <div className="forgot-password-text">
          <span onClick={() => navigate("/recuperarsenha")}>
            Esqueci minha senha
          </span>
        </div>

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
