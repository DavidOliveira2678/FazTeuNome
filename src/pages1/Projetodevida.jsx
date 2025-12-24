import React from "react";
import "../styles/Projetodevida.css";

const ProjetoVida = () => {
  return (
    <div className="pagina-container">
      {/* Navbar Superior */}
      <nav className="navbar">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81l-1.98-1.98s-1.1.08-1.81.79z"/><path d="M15 8s-4 4-7 1c-1-1-4-1-4-1s2-4 2-5c3-3 7-1 7-1z"/><path d="M12 12l9 9"/><path d="M18.5 5.5s-4 4-7 1c-1-1-4-1-4-1s2-4 2-5c3-3 7-1 7-1z"/></svg>
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
          <svg className="logout-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* Banner de Progresso Roxo/Rosa */}
        <section className="hero-card-vida">
          <div className="hero-content">
            <h1>Projeto Vida</h1>
            <p>Desenvolva habilidades comportamentais essenciais para o mundo profissional</p>
            <div className="progresso-container">
              <span>Progresso do Módulo</span>
              <div className="barra-fundo">
                <div className="barra-preenchimento" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
          <div className="badge-concluido-vida">
            <strong>0%</strong>
            <small>Concluído</small>
          </div>
        </section>

        <button className="btn-voltar">Voltar</button>

        <main className="main-layout">
          {/* Coluna de Lições */}
          <section className="coluna-licoes">
            <h2>Lições</h2>
            
            <div className="card-licao active-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div className="texto">
                <h3>Teste Vocacional</h3>
                <p>Diagnóstico inicial: interesses, habilidades, estilo de aprendizagem. Feedback personalizado com pontos fortes e áreas de desenvolvimento.</p>
              </div>
              <div className="status-icons">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <div className="card-licao">
              <div className="circle-indicator-orange"></div>
              <div className="texto">
                <h3>Escolha seu tema</h3>
                <p>Baseado no seu Teste Vocacional escolha o tema que você deseja para realizar seu projeto</p>
              </div>
              <div className="status-icons">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <div className="card-licao">
              <div className="circle-indicator-orange"></div>
              <div className="texto">
                <h3>Construa seu Projeto</h3>
                <p>Agora que você já escolheu seu tema, é hora de colocar a mão na massa! Neste espaço, você vai planejar, desenvolver e apresentar seu projeto final.</p>
              </div>
              <div className="status-icons">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
          </section>

          {/* Sidebar Detalhes */}
          <aside className="detalhes-card">
            <div className="detalhe-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div className="detalhe-body">
              <h3>Teste Vocacional</h3>
              <p className="desc">Diagnóstico inicial: interesses, habilidades, estilo de aprendizagem. Feedback personalizado com pontos fortes e áreas de desenvolvimento.</p>
              
              <button className="btn-comecar">Começar</button>
              <button className="btn-duvidas-outlined">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Dúvidas
              </button>
            </div>
          </aside>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
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
            <p>Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu - PE.</p>
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
};

export default ProjetoVida;