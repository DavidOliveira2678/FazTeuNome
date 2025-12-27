import React, { useState } from 'react';
import './Editar.css';

const EditProfile = () => {
  const [bio, setBio] = useState(
    "Sou uma pessoa curiosa e criativa, apaixonada por tecnologia, mas também por arte, dança e fotografia. Gosto de explorar novas ferramentas e entender como as coisas funcionam, sempre buscando unir o lado técnico com o lado artístico."
  );

  return (
    <div className="page-container">
      {/* Barra de Topo */}
      <div className="top-bar">
        <span>Editar e compartilhar</span>
      </div>

      {/* Cabeçalho Principal (Navbar) */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo-section">
            {/* Ícone de Foguete SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            <span className="logo-text">Faz Teu Nome</span>
          </div>

          <nav className="nav-menu">
            <a href="#" className="nav-link">Início</a>
            <a href="#" className="nav-link active">Meu Perfil</a>
            <a href="#" className="nav-link">Comunidade</a>
            <a href="#" className="nav-link">Ranking</a>
          </nav>

          <div className="user-section">
            <div className="user-avatar-small">
              {/* Ícone de Usuário Pequeno SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            {/* Ícone de Logout SVG */}
            <div className="logout-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Área de Conteúdo */}
      <main className="main-content">
        <div className="content-wrapper">
          
          {/* Título da Página com Seta de Voltar */}
          <div className="page-header">
            <button className="back-button">
              {/* Ícone Seta Esquerda SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h1>Editar Perfil</h1>
          </div>

          {/* Card 1: Foto de Perfil */}
          <section className="card profile-photo-card">
            <h3 className="card-title">Foto de Perfil</h3>
            <div className="photo-content">
              <div className="avatar-large">
                {/* Ícone de Usuário Grande (Silhueta) SVG */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#CBD5E0" stroke="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="photo-actions">
                <button className="btn-change-photo">
                  {/* Ícone de Câmera SVG */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  Trocar Foto
                </button>
                <span className="file-info">JPG, PNG</span>
              </div>
            </div>
          </section>

          {/* Card 2: Sobre Mim */}
          <section className="card about-card">
            <h3 className="card-title">Sobre Mim</h3>
            <textarea
              className="bio-textarea"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={300}
            />
            <div className="char-count">
              {300 - bio.length} caracteres restantes
            </div>
          </section>

          {/* Card 3: Link do Perfil */}
          <section className="card link-card">
            <h3 className="card-title">Link do Perfil</h3>
            <p className="card-subtitle">Copie e compartilhe seu link personalizado</p>
            <input 
              type="text" 
              className="link-input" 
              value="https://fazteunome.com.br/usuario/nome-usuario" 
              readOnly 
            />
          </section>

          {/* Botão Salvar */}
          <div className="footer-actions">
            <button className="btn-save">Salvar Alterações</button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default EditProfile;