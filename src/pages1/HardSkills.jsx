import React, { useState, useEffect } from "react";
import "../styles/HardSkills.css";

const HardSkills = () => {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const calcularRolagem = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgresso(scrolled);
    };

    window.addEventListener("scroll", calcularRolagem);
    return () => window.removeEventListener("scroll", calcularRolagem);
  }, []);
  // --- FIM DO BLOCO ---

  
  return (
    <div className="pagina-container">
      {/* Navbar Superior */}
      <nav className="navbar">
        <div className="logo">
          {/* Substituído Rocket por Emoji */}
          <span className="icon-emoji-large">🚀</span> 
          <span>Faz Teu Nome</span>
        </div>
        <div className="nav-links">
          <a href="#">Início</a>
          <a href="#">Meu Perfil</a>
          <a href="#">Comunidade</a>
          <a href="#">Ranking</a>
        </div>
        <div className="user-nav">
          <div className="avatar">👤</div>
          {/* Substituído LogOut por Emoji */}
          <span className="logout-icon-emoji">🚪</span>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* Banner de Progresso Verde */}
<section className="hero-card-hard">
  <div className="hero-content">
    <h1>Hard Skills</h1>
    <p>Desenvolva habilidades técnicas essenciais para o mundo profissional</p>
    <div className="progresso-container">
      <span>Progresso do Módulo</span>
      <div className="barra-fundo">
        <div className="barra-preenchimento" style={{ width: "0%" }}></div>
      </div>
    </div>
  </div>
  <div className="badge-concluido-hard">
    <strong>0%</strong>
    <small>Concluído</small>
  </div>
</section>

        <button className="btn-voltar">Voltar</button>

        <main className="main-layout">
          {/* Seção de Lições (Cards Empilhados) */}
          <section className="coluna-licoes">
            <h2>Lições</h2>
            
            <div className="card-licao">
              {/* Substituído Clock por Emoji */}
              <span className="icon-emoji">🕒</span>
              <div className="texto">
                <h3>Vocabulário de Negócios</h3>
                <p>Vocabulário essencial para e-mails e reuniões (e.g., Deadline, Follow-up, Kick-off, Budget).</p>
              </div>
              <div className="status-icons">
                {/* Substituído ChevronRight por Símbolo de Texto */}
                <span className="chevron-text">❯</span>
                {/* Substituído Lock por Emoji */}
                <span className="lock-emoji">🔒</span>
              </div>
            </div>

            <div className="card-licao">
              <div className="circle-indicator"></div>
              <div className="texto">
                <h3>Fundamentos de Tecnologia e Ferramentas Digitais</h3>
                <p>Pacote Office/Google Workspace (Word, Excel, PowerPoint, Docs, Sheets, Slides).</p>
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
                <p>Introdução a metodologias ágeis (Scrum, Kanban) e gestão de projetos.</p>
              </div>
              <div className="status-icons">
                <span className="chevron-text">❯</span>
                <span className="lock-emoji">🔒</span>
              </div>
            </div>
          </section>

          {/* Sidebar de Detalhes à Direita */}
          <aside className="detalhes-card">
            <div className="detalhe-header">
              {/* Substituído HelpCircle por Emoji/Símbolo */}
              <span className="help-icon">❓</span> <span>Iniciar Trilha</span>
            </div>
            <h3>Vocabulário de Negócios</h3>
            <p className="desc">Vocabulário essencial para e-mails e reuniões.</p>
            
            <div className="recursos">
              <h4>Recursos Disponíveis:</h4>
              {/* Substituído Flame por Emoji */}
              <div className="recurso-item"><span>🔥</span> Vídeo explicativo</div>
              <div className="recurso-item"><span>🔥</span> Exercício reflexivo</div>
              <div className="recurso-item"><span>🔥</span> Quiz interativo</div>
            </div>

            <button className="btn-revisar">Revisar</button>
            <button className="btn-duvidas">❓ Dúvidas</button>
          </aside>
        </main>
      </div>

      {/* Footer Azul */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Faz Teu Nome</h4>
            <p>Plataforma pedagógica para protagonismo juvenil.</p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul><li>Trilha</li><li>Comunidade</li></ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul><li>FAQ</li><li>Contato</li></ul>
          </div>
          <div>
            <h4>Igarassu</h4>
            <p>Desenvolvimento para o município de Igarassu - PE.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HardSkills;
