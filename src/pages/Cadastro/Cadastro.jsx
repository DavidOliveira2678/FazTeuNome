import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import rocketImage from"../../assets/cadastro.png"
import logoFazTeuNome from "../../assets/logo.png"

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
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
      const checkResponse = await fetch(
        `http://localhost:5000/api/usuarios/verificar-email?email=${form.email}`
      );
      const checkData = await checkResponse.json();

      if (checkData.existe) {
        alert("Este email já está cadastrado!");
        return;
      }

      const response = await fetch("http://localhost:5000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_completo: form.nome_completo,
          email: form.email,
          telefone: form.telefone,
          escola: form.escola,
          tipo_usuario: form.tipo_usuario,
          senha: form.senha,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();

      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao cadastrar usuário.");
    }
  }

  return (
    <div className="cadastro-container">
      {/* lado esquerdo com foguete */}
      <div className="cadastro-left">
        <img
          src={rocketImage}
          alt="Ilustração de foguete e ícones educacionais"
          className="cadastro-image"
        />
      </div>

      {/* lado direito com card */}
      <div className="cadastro-right">
        <div className="cadastro-card">
          {/* Logo acima do título */}
          <img
            src={logoFazTeuNome}
            alt="Logo Faz Teu Nome"
            className="logo-cadastro"
          />

          <div className="titulo-cadastro">Cadastro</div>
          <div className="subtitulo-cadastro">
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

            <button type="submit" className="entrar-btn">
              Criar Conta
            </button>
          </form>

          <div className="cadastro-text">
            Já tem conta?
            <span
              onClick={() => navigate("/login")}
              className="cadastro-link"
            >
              Faça login
            </span>
          </div>
        </div>

        <div className="cadastro-footer">
        
          <div className="slogan-text">
            Junte-se a milhares de estudantes construindo seu futuro.
          </div>
        </div>
      </div>
    </div>
  );
}