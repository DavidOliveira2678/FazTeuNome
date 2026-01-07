import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projetodevida.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const ProjetoVida = () => {
const navigate = useNavigate();


  return (
    <div className="pagina-container">
       <Header/>

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

          <button
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/dashboard")}
        >Voltar
        </button>

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

            <div className="card-licao"onClick={() => navigate("/escolhatema")}
              style={{ cursor: "pointer" }}>
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
              
              <button className="btn-comecar"onClick={() => navigate("/em-construcao")}
              style={{ cursor: "pointer" }}>Começar</button>
              <button className="btn-duvidas-outlined"onClick={() => navigate("/em-construcao")}
              style={{ cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Dúvidas
              </button>
            </div>
          </aside>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProjetoVida;