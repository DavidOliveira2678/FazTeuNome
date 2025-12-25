import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRoute } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">Faz Teu Nome</div>
        <div className="header-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/cadastro")}>Cadastro</button>
        </div>
      </header>

      <main className="home-main">
        <h1>Decole rumo ao seu próprio futuro</h1>
        <p className="home-subtitle">
          Construa seu próprio Projeto de Vida, desenvolva habilidades essenciais
          e conheça oportunidades reais através de um lugar feito pra você
        </p>

        <div className="trilhas-container">
          <div className="trilha-card">
            <div className="trilha-icon">⏰</div>
            <h2>Descubra seu propósito</h2>
          </div>

          <div className="trilha-card middle-card">
            <div className="trilha-icon">
              <FaRoute size={72} color="#ff7f00" />
            </div>
            <h2>Construa seu caminho</h2>
          </div>

          <div className="trilha-card">
            <div className="trilha-icon">🏆</div>
            <h2>Faz Teu Nome</h2>
          </div>
        </div>

        <button
          className="start-journey-btn"
          onClick={() => navigate("/login")}
         >
          Comece sua jornada agora
        </button>

      </main>
    </div>
  );
}
