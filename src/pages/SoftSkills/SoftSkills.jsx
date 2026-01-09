import React from "react";
import { useNavigate } from "react-router-dom";
import "./SoftSkills.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";


const SoftSkills = () => {
  const navigate = useNavigate();
  // Ícones SVG Inline para substituir o Lucide
  const Icons = {
    Rocket: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81l-1.98-1.98s-1.1.08-1.81.79z" /><path d="M15 8s-4 4-7 1c-1-1-4-1-4-1s2-4 2-5c3-3 7-1 7-1z" /><path d="M12 12l9 9" /><path d="M18.5 5.5s-4 4-7 1c-1-1-4-1-4-1s2-4 2-5c3-3 7-1 7-1z" /></svg>
    ),
    Clock: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    Play: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
    ),
    Lock: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    ),
    Flame: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
    ),
    CheckCircle: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7e33" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    )
  };

  return (
    <div className="pagina-container">
     <Header/>

<Banner
  variant="banner-softskills"
  align="left"
  direction="column"
>
  <h2>Soft Skills</h2>
  <p>
    Desenvolva habilidades humanas essenciais para o mercado de trabalho,
    como comunicação, empatia e liderança.
  </p>
</Banner>

        <button
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/dashboard")}
        >Voltar
        </button>

        <main className="main-layout">
          {/* Lista de Lições */}
          <section className="coluna-licoes">
            <h2>Lições</h2>
            <div
              className="card-licao"
              onClick={() => navigate("/autoconhecimento")}
              style={{ cursor: "pointer" }}
            >
              <Icons.Clock />
              <div className="texto">
                <h3>Autoconhecimento</h3>
                <p>Descubra suas forças, fraquezas e propósitos</p>

              </div>
              <div className="status-icons">
                <span className="chevron">❯</span>
              </div>
            </div>

            

            <div className="card-licao locked">
              <div className="circle-indicator"></div>
              <div className="texto">
                <h3>Inteligência Emocional</h3>
                <p>Compreenda e gere suas emoções</p>

              </div>
              <div className="status-icons">
                <span className="chevron">❯</span>
                <Icons.Lock />
              </div>
            </div>

            <div className="card-licao locked">
              <div className="circle-indicator"></div>
              <div className="texto">
                <h3>Liderança Autêntica</h3>
                <p>Desenvolva sua capacidade de liderar com autenticidade</p>

              </div>
              <div className="status-icons">
                <span className="chevron">❯</span>
                <Icons.Lock />
              </div>
            </div>
          </section>

          {/* Sidebar Detalhes */}
          <aside className="detalhes-card">
            <div className="detalhe-header">
              <Icons.CheckCircle /> <span>Completada</span>
            </div>
            <h3>Autoconhecimento</h3>
            <p className="desc">Explore suas habilidades atuais e como elas se conectam com seus objetivos futuros.</p>

            <div className="recursos">
              <h4>Recursos Disponíveis:</h4>
              <div className="recurso-item"><Icons.Flame /> Exercício reflexivo</div>
              <div className="recurso-item"><Icons.Flame /> Quiz interativo</div>
            </div>

            <button className="btn-revisar" onClick={() => navigate("/autoconhecimento")}
              style={{ cursor: "pointer" }} >Revisar</button>
            <button className="btn-duvidas" onClick={() => navigate("/em-construcao")}
              style={{ cursor: "pointer" }}>❓ Dúvidas</button>
          </aside>
        </main>
      

      <Footer />
    </div>
  );
};

export default SoftSkills;