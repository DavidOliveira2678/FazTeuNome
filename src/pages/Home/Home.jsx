import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-bg">
      <header className="home-header">
        <img src={logo} alt="Faz Teu Nome" className="logo" />

        <div className="header-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/cadastro")}>Cadastro</button>
        </div>
      </header>

      <main className="home-main">
       <h1 className="home-title">
  Toda jornada começa com uma escolha.
</h1>
<h2 className="home-subtitle">
  Decole rumo ao seu próprio futuro!
</h2>

        <div className="trilhas-container">
          <div className="trilha-card">
            <div className="trilha-icon">🧭</div>
            <h2>Descubra seu propósito</h2>
          </div>

          <div className="trilha-card">
            <div className="trilha-icon">📍</div>
            <h2>Construa seu caminho</h2>
          </div>

          <div className="trilha-card">
            <div className="trilha-icon">🏆</div>
            <h2> e FAZ TEU NOME!</h2>
          </div>
        </div>

        <button
          className="start-journey-btn"
          onClick={() => navigate("/login")}
        >
          Comece sua jornada agora
        </button>

        <img
          src={home}
          alt="Jovens Escalando"
          className="hero-image"
        />
      </main>
    </div>
  );
}