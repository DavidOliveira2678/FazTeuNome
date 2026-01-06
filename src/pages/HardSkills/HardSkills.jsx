import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HardSkills.css";
import Header from "../../components/Header"

function HardSkills() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const calcularRolagem = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgresso(scrolled);
    };

    window.addEventListener("scroll", calcularRolagem);
    return () => window.removeEventListener("scroll", calcularRolagem);
  }, []);

  return (
    <div className="pagina-container">
      <Header/>
      <div className="content-wrapper">
        {/* Banner de Progresso Verde */}
        <section className="hero-card-hard">
          <div className="hero-content">
            <h1>Hard Skills</h1>
            <p>
              Desenvolva habilidades técnicas essenciais para o mundo
              profissional
            </p>
            <div className="progresso-container">
              <span>Progresso do Módulo</span>
              <div className="barra-fundo">
                <div
                  className="barra-preenchimento"
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="badge-concluido-hard">
            <strong>{Math.round(progresso)}%</strong>
            <small>Concluído</small>
          </div>
        </section>

        <button
          className="btn-voltar"
          onClick={() => navigate("/dashboard")}
        >
          Voltar
        </button>

        <main className="main-layout">
          {/* Seção de Lições */}
          <section className="coluna-licoes">
            <h2>Lições</h2>

            <div className="card-licao">
              <span className="icon-emoji">🕒</span>
              <div
                className="texto"
                onClick={() => navigate("/vocabulario-negocios")}
                style={{ cursor: "pointer" }}
              >
                <h3>Vocabulário de Negócios</h3>
                <p>
                  Vocabulário essencial para e-mails e reuniões (e.g.,
                  Deadline, Follow-up, Kick-off, Budget).
                </p>
              </div>
              <div className="status-icons">
                <span className="chevron-text">❯</span>
                <span className="lock-emoji">🔒</span>
              </div>
            </div>

            <div className="card-licao">
              <div className="circle-indicator"></div>
              <div className="texto">
                <h3>Fundamentos de Tecnologia e Ferramentas Digitais</h3>
                <p>
                  Pacote Office/Google Workspace (Word, Excel, PowerPoint,
                  Docs, Sheets, Slides).
                </p>
              </div>
              <div className="status-icons">
                <span className="chevron-text">❯</span>
                <span className="lock-emoji">🔒</span>
              </div>
            </div>

            <div className="card-licao">
              <div className="circle-indicator"></div>
              <div className="texto">
                <h3>Metodologias e Processos</h3>
                <p>
                  Introdução a metodologias ágeis (Scrum, Kanban) e gestão
                  de projetos.
                </p>
              </div>
              <div className="status-icons">
                <span className="chevron-text">❯</span>
                <span className="lock-emoji">🔒</span>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="detalhes-card">
            <div className="detalhe-header">
              <span className="help-icon">❓</span> <span>Iniciar Trilha</span>
            </div>
            <h3>Vocabulário de Negócios</h3>
            <p className="desc">
              Vocabulário essencial para e-mails e reuniões.
            </p>

            <div className="recursos">
              <h4>Recursos Disponíveis:</h4>
              <div className="recurso-item">
                <span>🔥</span> Exercício reflexivo
              </div>
              <div className="recurso-item">
                <span>🔥</span> Quiz interativo
              </div>
            </div>

            <button
              className="btn-revisar"
              onClick={() => navigate("/vocabulario-negocios")}
              style={{ cursor: "pointer" }}
            >
              Revisar
            </button>
            <button
              className="btn-duvidas"
              onClick={() => navigate("/em-construcao")}
              style={{ cursor: "pointer" }}
            >
              ❓ Dúvidas
            </button>
          </aside>
        </main>
      </div>

      {/* Footer */}
      <footer
        className="footer"
        onClick={() => navigate("/em-construcao")}
        style={{ cursor: "pointer" }}
      >
        <div className="footer-grid">
          <div>
            <h4>Faz Teu Nome</h4>
            <p>
              Plataforma pedagógica para protagonismo juvenil e construção
              de projeto de vida.
            </p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul>
              <li>Trilha de aprendizagem</li>
              <li>Comunidade</li>
              <li>Hackaton</li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li>Guia do Professor</li>
              <li>FAQ</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4>Igarassu</h4>
            <p>
              Desenvolvimento com escuta ativa e protagonismo juvenil para
              o município de Igarassu - PE.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Faz Teu Nome. Todos os direitos reservados.</span>
          <div className="footer-links">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Acessibilidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HardSkills;