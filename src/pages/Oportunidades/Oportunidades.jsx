import React from "react";
<<<<<<< HEAD:src/pages/Oportunidades/Oportunidades.jsx
import "./Oportunidades.css";
=======
import { useNavigate } from "react-router-dom";
import "../styles1/Oportunidades.css";
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Oportunidades.jsx

const Oportunidades = () => {
  const navigate = useNavigate();
  const cards = [
    { title: "Jovem Aprendiz em Tecnologia", company: "TechIgarassu", tags: ["Jovem Aprendiz", "Presencial"], loc: "Igarassu, PE" },
    { title: "Jovem Aprendiz Logística", company: "Prefeitura de Igarassu", tags: ["Jovem Aprendiz", "Presencial"], loc: "Igarassu, PE" },
    { title: "Atendimento", company: "Rede de Mercados Flui", tags: ["Jovem Aprendiz", "Presencial"], loc: "Abreu e Lima, PE" },
    { title: "Bolsa de Estudos - FTN Cursos", company: "Instituto Start", tags: ["Formação", "Presencial"], loc: "Igarassu, PE" },
    { title: "Jovem Aprendiz - Industria", company: "Fabrica Pelincos", tags: ["Jovem Aprendiz", "Presencial"], loc: "Itamaraca, PE" },
    { title: "Primeiro Emprego", company: "Rede Cidadã", tags: ["Primeiro Emprego", "Presencial"], loc: "Igarassu, PE" },
  ];

  return (
    <div className="pagina-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
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
          onClick={() => navigate("/login")}
          >
            ⬅
          </span>
        </div>
      </nav>

      {/* Hero Banner Celeste */}
      <header className="hero-banner">
        <div className="badge-conquista">
          <span className="lock-icon">🔒</span> Conquista Desbloqueada
        </div>
        <h1>PARABENS!</h1>
        <h2>Você chegou até aqui.</h2>
        <p>Agora é a hora de transformar sua trajetoria em oportunidade.</p>
      </header>

      <main className="content-wrapper">
        <div className="filter-section">
          <h3>Oportunidades para você</h3>
          <div className="filters">
            <select><option>Todas as áreas</option></select>
            <select><option>Todos os tipos</option></select>
            <select><option>Todas as modalidades</option></select>
          </div>
        </div>

       <button
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/projetodevida")}
        >Voltar
        </button> 

        {/* Grid de Cards */}
        <div className="opportunities-grid">
          {cards.map((card, index) => (
            <div key={index} className="opportunity-card">
              <div className="card-badge">Alinhado com seu perfil</div>
              <h4>{card.title}</h4>
              
              <div className="card-info">
                <span className="info-item">🏢 {card.company}</span>
                <div className="card-tags">
                  {card.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <span className="info-item">📍 {card.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Padrão */}
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
    </div>
  );
};

export default Oportunidades;