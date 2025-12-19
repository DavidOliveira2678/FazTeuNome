import React, { useState } from "react";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome_completo: "",
    email: "",
    escola: "",
    tipo_usuario: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleCriarConta(e) {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      alert("Senhas não coincidem!");
      return;
    }

    try {
      // 🔎 Verificar se email já existe antes de cadastrar
      const checkResponse = await fetch(
        `http://localhost:5000/api/usuarios/verificar-email?email=${form.email}`
      );
      const checkData = await checkResponse.json();

      if (checkData.existe) {
        alert("Este email já está cadastrado!");
        return;
      }

      // 🚀 Criar usuário
      const response = await fetch("http://localhost:5000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome_completo: form.nome_completo,
          email: form.email,
          escola: form.escola,
          tipo_usuario: form.tipo_usuario,
          senha: form.senha,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();
      console.log("Usuário cadastrado:", data);

      alert("Conta criada com sucesso!");
      navigate("/login"); // redireciona para login após cadastro
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao cadastrar usuário.");
    }
  }

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
              name="nome_completo"
              value={form.nome_completo}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
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
                name="tipo_usuario"
                value={form.tipo_usuario}
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