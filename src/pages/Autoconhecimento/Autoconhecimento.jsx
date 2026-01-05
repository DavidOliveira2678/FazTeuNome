import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Autoconhecimento.css";

export default function Autoconhecimento({ nome }) {
  const navigate = useNavigate();
  const [respostas, setRespostas] = useState({});

  const handleVoltar = () => {
    navigate("/softskills");
  };

  const handleSalvar = () => {
    console.log("Respostas salvas:", respostas);
    navigate("/softskills");
  };

  const handleClick = (item, valor) => {
    setRespostas((prev) => ({
      ...prev,
      [item]: prev[item] === valor ? null : valor,
    }));
  };

  return (
    <div className="Autoconhecimento-page-wrapper">
      {/* NAVBAR */}
      <nav className="Autoconhecimento-topbar">
        <div className="topbar-logo" onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
          🚀 <span>Faz Teu Nome</span>
        </div> 

        <div className="topbar-links">
          <span onClick={() => navigate("/dashboard")}>Início</span>
          <span onClick={() => navigate("/profile")}>Meu Perfil</span>
          <span onClick={() => navigate("/comunidade")}>Comunidade</span>
          <span onClick={() => navigate("/ranking")}>Ranking</span>
        </div>

        <div className="topbar-user">
          <span onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>👤</span>
          <span
            style={{ marginLeft: "8px", cursor: "pointer" }}
            title="Sair"
            onClick={() => (window.location.href = "/login")}
          >
            ⬅
          </span>
        </div>
      </nav>

      <div className="Autoconhecimento-container">
        {/* HEADER */}
        <div className="Autoconhecimento-header">
          <div className="header-top">
            <div className="header-left">
              <span className="softskills-label">Soft Skills</span>
              <h2>Autoconhecimento</h2>
              <p>Explore suas habilidades e valores que sustentam suas escolhas</p>
              <p>Progresso do Módulo</p>

              <div style={{ marginTop: "14px" }}>
                <div className="progress-bar-container" style={{ width: "250px", background: "#ccc", borderRadius: "8px" }}>
                  <div className="progress-bar-fill" style={{ width: "33%", height: "10px", background: "#fff", borderRadius: "8px" }} />
                </div>
              </div>
            </div>

            <div className="progress-info">
              <div className="progress-box adjusted">
                <span>Concluído</span>
                <span>33%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="main-row">
          <div className="learning-path">
            <button className="btn-voltar" onClick={handleVoltar}>
              Voltar
            </button>

            <div className="content-row">
              {/* COLUNA ESQUERDA */}
              <div className="content-left quem-voce-e">
                <h3>Quem você é?</h3>
                <p>
                  O autoconhecimento é a base para todas as escolhas que você fará ao longo da sua vida pessoal e profissional.
                  Quando você conhece suas forças, seus valores e suas áreas de desenvolvimento, toma decisões mais conscientes.
                </p>

                <div className="reflexao-container">
                  <h3>Reflexão Guiada</h3>
                  <label>Quais são suas principais fortalezas?</label>
                  <textarea placeholder="Pense nas coisas que você faz bem..." />

                  <label>Quais valores são mais importantes para você?</label>
                  <textarea placeholder="Respeito, honestidade, criatividade..." />

                  <label>Quais áreas você gostaria de desenvolver?</label>
                  <textarea placeholder="Pense nas habilidades que você quer melhorar..." />
                </div>

                <div className="escala-container">
                  <h3>Escala de Autopercepção</h3>
                  <p className="escala-descricao">
                    Em uma escala de 1 a 5, como você avalia as seguintes características em você?
                  </p>

                  {[
                    "Comunicação clara e efetiva",
                    "Trabalho em equipe",
                    "Adaptabilidade a mudanças",
                    "Iniciativa e proatividade",
                    "Gestão emocional",
                  ].map((texto, index) => (
                    <div className="escala-item" key={index}>
                      <span className="texto">{texto}</span>
                      <div className="escala-numbers">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <span
                            key={num}
                            className={`escala-numero ${respostas[texto] === num ? "ativo" : ""}`}
                            onClick={() => handleClick(texto, num)}
                          >
                            {num}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn-salvar" onClick={handleSalvar}>
                  Salvar e Continuar
                </button>
              </div>

              {/* COLUNA DIREITA */}
              <div className="content-right">
                <div className="dica-container">
                  <h4>💡 Dica</h4>
                  <div className="dica-card">
                    <p>Respire fundo e pense em situações em que você se sentiu orgulhoso de si.</p>
                  </div>
                  <div className="dica-card">
                    <p>Aquilo que você gostaria de melhorar pode indicar áreas importantes para o seu desenvolvimento.</p>
                  </div>
                  <button className="btn-duvidas" onClick={() => navigate("/em-construcao")}>
                    Dúvidas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer" onClick={() => navigate("/em-construcao")} style={{ cursor: "pointer" }}>
        <div className="footer-grid">
          <div>
            <h4>Faz Teu Nome</h4>
            <p>Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.</p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul><li>Trilha de aprendizagem</li><li>Comunidade</li><li>Hackaton</li></ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul><li>Guia do Professor</li><li>FAQ</li><li>Contato</li></ul>
          </div>
          <div>
            <h4>Igarassu</h4>
            <p>Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu-PE.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Faz Teu Nome — Todos os direitos reservados.</span>
          <div className="footer-links">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Acessibilidade</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
