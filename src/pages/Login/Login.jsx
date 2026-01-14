import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ilustracao from "../../assets/img.login.png";
import logo from "../../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const irParaHome = async (e) => {
    e.preventDefault();
    setErro("");

    if (!form.email || !form.senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data?.erro || "Erro no login");
        return;
      }

      if (!data?.token || !data?.usuario) {
        setErro("Resposta inválida do servidor");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      const tipo = data.usuario?.tipo_usuario;
      if (tipo === "professor") {
        navigate("/portalprofessor");
      } else if (tipo === "aluno") {
        navigate("/dashboard");
      } else {
        setErro("Tipo de usuário desconhecido");
      }
    } catch (err) {
      console.error("Erro de rede:", err);
      setErro("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={ilustracao} alt="Ilustração motivacional" className="login-image" />
      </div>

      <div className="login-right">
        <div className="login-card">
          <img src={logo} alt="Faz Teu Nome" className="logo-login" />
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

            <button className="entrar-btn" type="submit">Entrar</button>
          </form>

          {erro && <p style={{ color: "red" }}>{erro}</p>}

          <div className="forgot-password-text">
            <span onClick={() => navigate("/recuperarsenha")}>Esqueci minha senha</span>
          </div>

          <p className="cadastro-text">
            Não tem conta?
            <span className="cadastro-link" onClick={() => navigate("/cadastro")}>
              Cadastre-se
            </span>
          </p>
        </div>

        <div className="login-footer">
          <p className="slogan-text">Já somos milhares de estudantes construindo o futuro.</p>
        </div>
      </div>
    </div>
  );
}