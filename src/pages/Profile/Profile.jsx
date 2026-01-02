import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD:src/pages/Profile/Profile.jsx
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
=======
import "../styles1/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
  navigate(-1);
}; 

>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Profile.jsx
  return (
    <div className="profile-page">
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
            onClick={() => (window.location.href = "/login")}
          >
            ⬅
          </span>
        </div>
      </nav>
 <div className="container">
        {/* Banner do Usuário */}
        <header className="profile-banner">
          <div className="banner-info">
            <div className="avatar-large">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
            <div className="user-details">
              <h1>{`{Nome do Usuario}`}</h1>
              <p>3 Ano do Ensino Médio</p>
              <small>Escola Municipal de Igarassu - Igarassu PE</small>
            </div>
          </div>
          <div className="banner-actions">
<<<<<<< HEAD:src/pages/Profile/Profile.jsx
           <button
  className="btn-white"
  onClick={() => navigate("/editar-perfil")}
>
  Editar
</button>


=======
            <button className="btn-white">Editar</button>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Profile.jsx
          </div>
        </header>
<button
          type="button"
          className="btn-voltar"
          onClick={handleBack}
        >Voltar
        </button>

        <div className="profile-grid">
          {/* Coluna Principal */}
          <main className="profile-main">
            {/* Sobre Mim */}
            <section className="profile-card clickable">
              <div className="card-header">
                <h3>Sobre mim</h3>
                <span>❯</span>
              </div>
              <p>Sou uma pessoa curiosa e criativa, apaixonada por tecnologia, mas também por arte, dança e fotografia. Gosto de explorar novas ferramentas e entender como as coisas funcionam, sempre buscando unir o lado técnico com o lado artístico.</p>
            </section>

            {/* Meus Interesses */}
            <section className="profile-card clickable">
              <div className="card-header">
                <h3>Meus Interesses</h3>
                <span>❯</span>
              </div>
              <div className="tags">
                <span className="tag">Comunicação</span>
                <span className="tag">Arte</span>
                <span className="tag">Tecnologia</span>
                <span className="tag">Fotografia</span>
                <span className="tag">Musica</span>
                <span className="tag">Programação</span>
              </div>
            </section>

            {/* Habilidades */}
            <section className="profile-card clickable">
              <div className="card-header">
                <h3>Habilidades</h3>
                <span>❯</span>
              </div>
              <div className="skills-bars">
                <div className="skill-item"><div className="bar orange" style={{width: '90%'}}></div></div>
                <div className="skill-item"><div className="bar dark" style={{width: '65%'}}></div></div>
                <div className="skill-item"><div className="bar orange" style={{width: '80%'}}></div></div>
              </div>
            </section>

            {/* Minha Galeria */}
            <section className="profile-card">
              <h3>Minha Galeria</h3>
              <div className="gallery-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="upload-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  </div>
                ))}
              </div>
            </section>
            
<<<<<<< HEAD:src/pages/Profile/Profile.jsx
            <button
  className="btn-voltar"
  onClick={() => navigate("/dashboard")}
>
  Voltar
</button>

=======
            
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Profile.jsx
          </main>

          {/* Sidebar */}
          <aside className="profile-sidebar">
            {/* Status da Trilha */}
            <div className="sidebar-card dark-card">
              <h3>Status da Trilha</h3>
              <div className="trilha-status">
                <div className="status-row">
                  <label>SoftSkills <span>100%</span></label>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '100%'}}></div></div>
                </div>
                <div className="status-row">
                  <label>HardSkills <span>15%</span></label>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '15%'}}></div></div>
                </div>
                <div className="status-row">
                  <label>Projeto de Vida <span>0%</span></label>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '0%'}}></div></div>
                </div>
              </div>
            </div>

            {/* Conquistas */}
            <div className="sidebar-card bordered">
              <h3>Conquistas</h3>
              <div className="conquistas-grid">
                <div className="badge-item orange-bg">
                  <span>🚀</span>
                  <small>Iniciante</small>
                </div>
                <div className="badge-item yellow-bg">
                  <span>⭐</span>
                  <small>Ativo</small>
                </div>
                <div className="badge-item gray-bg">
                  <span>👑</span>
                  <small>Top 10</small>
                </div>
              </div>
            </div>

            {/* Projeto de Vida */}
            <div className="sidebar-card green-bordered">
              <h3 className="text-green">Projeto de Vida</h3>
              <div className="green-progress">
                <span>Em Progresso <strong>30%</strong></span>
              </div>
              <button className="btn-green" onClick={() => navigate("/projetodevida")}>Ver Projeto</button>
            </div>

          </aside>
        </div>
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

export default Profile;