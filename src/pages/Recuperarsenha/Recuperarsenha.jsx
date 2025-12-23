import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Recuperarsenha.css";

export default function Recuperarsenha() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  function enviarRecuperacao(e) {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Digite um email válido.");
      return;
    }

    alert("Se este email existir, enviaremos um link de recuperação!");
    navigate("/login");
  }

  return (
    <div className="rec-container">
      <div className="rec-card">

        <h1 className="rec-title">Recuperar Senha</h1>
        <p className="rec-subtitle">
          Digite seu email para receber um link de redefinição.
        </p>

        <form className="rec-form" onSubmit={enviarRecuperacao}>
          <input
            type="email"
            className="rec-input"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="rec-button">
            Enviar link
          </button>
        </form>

        <div className="rec-back">
          <button className="rec-back-btn" onClick={() => navigate("/login")}>
  Voltar ao login
</button>

        </div>
      </div>
    </div>
  );
}

