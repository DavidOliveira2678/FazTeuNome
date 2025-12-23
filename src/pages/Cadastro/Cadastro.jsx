import React, { useState } from "react";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    escola: "",
    tipoUsuario: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCriarConta = (e) => {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      alert("Senhas não coincidem!");
      return;
    }
    console.log("Cadastro enviado:", form);
    alert("Conta criada com sucesso!");
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-logo">
        <h1>Faz Teu Nome</h1>
      </div>

      <div className="cadastro-card">
        <div className="cadastro-title">Cadastro</div>
        <div className="cadastro-subtitle">
          Comece sua jornada de desenvolvimento agora
        </div>

        <form onSubmit={handleCriarConta}>
          <div className="input-group">
            <label>Nome completo</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(99) 99999-9999"
            />
          </div>

          <div className="input-group">
            <label>Escola</label>
            <input
              type="text"
              name="escola"
              value={form.escola}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Tipo de usuário</label>
            <div className="select-wrapper">
              <select
                name="tipoUsuario"
                value={form.tipoUsuario}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="aluno">Aluno</option>
                <option value="professor">Professor</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Confirmar senha</label>
            <input
              type="password"
              name="confirmarSenha"
              value={form.confirmarSenha}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-criar-conta">
            Criar Conta
          </button>
        </form>

        <div className="login-link">
          Já tem conta?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "#0b4870", fontWeight: "bold" }}
          >
            Faça login
          </span>
        </div>
      </div>

      <div className="cadastro-footer">
        Junte-se a milhares de estudantes construindo seu futuro.
      </div>
    </div>
  );
}
