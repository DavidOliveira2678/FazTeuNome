import React from "react";
import { useNavigate } from "react-router-dom";
import "./Autoconhecimento.css";

export default function Autoconhecimento({ nome }) {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/SoftSkills");
  };

  return (
    <>
      <div className="Autoconhecimento-container">
        <nav className="Autoconhecimento-topbar">
          <div className="topbar-logo">
            🚀 <span>FAZ TEU NOME</span>
          </div>
          <div className="topbar-links">
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
              Início
            </span>

            <span style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
              Meu Perfil
            </span>

            <span style={{ cursor: "pointer" }} onClick={() => navigate("/comunidade")}>
              Comunidade
            </span>

            <span style={{ cursor: "pointer" }} onClick={() => navigate("/ranking")}>
              Ranking
            </span>
          </div>


          <div className="topbar-user">
            👤
            <span
              style={{ marginLeft: "8px", cursor: "pointer" }}
              title="Sair"
              onClick={() => (window.location.href = "/login")}
            >
              ⬅
            </span>
          </div>
        </nav>

        <div className="Autoconhecimento-header">
          <div className="header-top">
            <div className="header-left">
              <span className="softskills-label">Soft Skills</span>
              <h2>Autoconhecimento</h2>
              <p>Explore suas habilidades e valores que sustentam suas escolhas</p>
              <p>Progresso do Módulo</p>
              <div style={{ marginTop: "14px" }}>
                <div className="progress-bar gray" style={{ width: "250%" }}>
                  <div className="progress-bar white" style={{ width: "30%" }} />
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

        <div className="main-row">
          <div className="learning-path">
            <button className="btn-voltar" onClick={handleVoltar}>
              Voltar
            </button>


            <div className="content-row">
              <div className="content-left">
                <h3>Quem você é?</h3>
                <p>
                  O autoconhecimento é a base para todas as escolhas que você fará ao longo da sua vida pessoal e profissional.
                  <br />
                  Quando você conhece suas forças, seus valores e suas áreas de desenvolvimento, você consegue tomar decisões mais conscientes e alinhadas com quem você realmente é.
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

                  <div className="escala-item">
                    <span className="texto">Comunicação clara e efetiva</span>
                    <div className="escala-numeros">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>

                  <div className="escala-item">
                    <span className="texto">Trabalho em equipe</span>
                    <div className="escala-numeros">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>

                  <div className="escala-item">
                    <span className="texto">Adaptabilidade a mudanças</span>
                    <div className="escala-numeros">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>

                  <div className="escala-item">
                    <span className="texto">Iniciativa e proatividade</span>
                    <div className="escala-numeros">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>

                  <div className="escala-item">
                    <span className="texto">Gestão emocional</span>
                    <div className="escala-numeros">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>

                <button className="btn-salvar">Salvar e Continuar</button>
              </div>

              <div className="content-right">
                <div className="dica-container" >
                  <h4>💡 Dica</h4>
                  <div className="dica-card">
                    <p>Respire fundo e pense em situações em que você se sentiu orgulhoso de si.</p>
                  </div>

                  <div className="dica-card">
                    <p>
                      Aquilo que você gostaria de mudar ou melhorar em si mesmo pode indicar áreas importantes para o seu desenvolvimento.
                    </p>
                  </div>

                  <button
                    className="btn-duvidas"
                    onClick={() => navigate("/PaginaEmConstrucao")}
                  >
                    Dúvidas
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="Autoconhecimento-footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Faz Teu Nome</h4>
            <p>Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.</p>
          </div>
          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li>Trilha de Aprendizagem</li>
              <li>Comunidade</li>
              <li>Hackaton</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>Guia do Professor</li>
              <li>FAQ</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Igarassu</h4>
            <p>Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu-PE.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Faz Teu Nome — Todos os direitos reservados.</span>
          <div className="footer-links">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Suporte</span>
          </div>
        </div>
      </footer>
    </>
  );
}
