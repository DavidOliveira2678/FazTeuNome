import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD:src/pages/SoftSkills/SoftSkills.jsx
import "./SoftSkills.css";

const SoftSkills = () => {
  const navigate = useNavigate();

=======
import "../styles1/SoftSkills.css";

const SoftSkills = () => {
  const navigate = useNavigate();
  // Ícones SVG Inline para substituir o Lucide
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/SoftSkills.jsx
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
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
<<<<<<< HEAD:src/pages/SoftSkills/SoftSkills.jsx
🚀 <span>FAZ TEU NOME</span>
=======
          <Icons.Rocket />
          <div className="topbar-logo" onClick={() => navigate("/dashboard")}> 🚀 Faz Teu Nome</div>
        </div>

        <div className="nav-links">
          <a onClick={() => navigate("/dashboard")}>Início</a>
          <a onClick={() => navigate("/profile")}>Meu Perfil</a>
          <a onClick={() => navigate("/comunidade")}>Comunidade</a>
          <a onClick={() => navigate("/ranking")}>Ranking</a>
        </div>

        <div className="topbar-user" onClick={() => navigate("/profile")} style={{ marginLeft: "8px", cursor: "pointer" }}>
          👤
          <span
            style={{ marginLeft: "8px", cursor: "pointer" }}
            title="Sair"
            onClick={() => (window.location.href = "/login")}
          >
            ⬅
          </span>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/SoftSkills.jsx
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
    onClick={() => navigate("/login")}
  >
    ⬅
  </span>
</div>


      </nav>



      <div className="content-wrapper">
        {/* Banner Hero Laranja */}
        <section className="hero-card-soft">
          <div className="hero-content">
            <h1>Soft Skills</h1>
            <p>Desenvolva habilidades comportamentais essenciais para o mundo profissional.</p>
            <div className="progresso-container">
              <span>Progresso do Módulo</span>
              <div className="barra-fundo">
                {/* Aqui você define a porcentagem da barra */}
                <div className="barra-preenchimento" style={{ width: "33%" }}></div>
              </div>
            </div>
          </div>
          <div className="badge-concluido-soft">
            <strong>33%</strong>
            <small>Concluído</small>
          </div>
        </section>

        <button
<<<<<<< HEAD:src/pages/SoftSkills/SoftSkills.jsx
  className="btn-voltar"
  onClick={() => navigate("/dashboard")}
>
  Voltar
</button>

=======
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/dashboard")}
        >Voltar
        </button>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/SoftSkills.jsx

        <main className="main-layout">
          {/* Lista de Lições */}
          <section className="coluna-licoes">
            <h2>Lições</h2>
<<<<<<< HEAD:src/pages/SoftSkills/SoftSkills.jsx
            
            <div
  className="card-licao"
  style={{ cursor: "pointer" }}
  onClick={() => navigate("/autoconhecimento")}
>

=======
            <div
              className="card-licao"
              onClick={() => navigate("/autoconhecimento")}
              style={{ cursor: "pointer" }}
            >
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/SoftSkills.jsx
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

<<<<<<< HEAD:src/pages/SoftSkills/SoftSkills.jsx
            <button className="btn-revisar">Revisar</button>
   <button
  className="btn-duvidas"
  onClick={() => navigate("/PaginaEmConstrucao")}
>
  ❓ Dúvidas
</button>


=======
            <button className="btn-revisar" onClick={() => navigate("/autoconhecimento")}
              style={{ cursor: "pointer" }} >Revisar</button>
            <button className="btn-duvidas" onClick={() => navigate("/em-construcao")}
              style={{ cursor: "pointer" }}>❓ Dúvidas</button>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/SoftSkills.jsx
          </aside>
        </main>
      </div>

      {/* Footer */}
<<<<<<< HEAD:src/pages/SoftSkills/SoftSkills.jsx
<footer className="footer">
  <div className="footer-grid">
    <div>
      <h4>Faz Teu Nome</h4>
      <p>Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.</p>
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
      <p>Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu - PE.</p>
    </div>
  </div>
  <div className="footer-bottom">
    <span>© 2025 Faz Teu Nome. Todos os direitos reservados.</span>
  </div>
</footer>

=======
      <footer
        className="footer"
        onClick={() => navigate("/em-construcao")}
        style={{ cursor: "pointer" }}
      >
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
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/SoftSkills.jsx
    </div>
  );
};

export default SoftSkills;