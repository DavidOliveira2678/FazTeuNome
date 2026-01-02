import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD:src/pages/Comunidade/Comunidade.jsx
import "./Comunidade.css";

const Comunidade = () => {
  const navigate = useNavigate();
=======
import "../styles1/Comunidade.css";

const Comunidade = () => {
    const navigate = useNavigate();
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Comunidade.jsx
  const posts = [
    {
      id: 1,
      autor: "Maria Santos",
      tempo: "há 2 horas",
      categoria: "Soft Skills",
      avatar: "👩‍🏫",
      conteudo:
        "Acabei de terminar o módulo de Soft Skills, aprendi muito sobre inteligência emocional. Alguém mais já completou?",
      likes: 24,
      comentarios: 8,
    },
    {
      id: 2,
      autor: "Carlos Lima",
      tempo: "há 5 horas",
      categoria: "Oportunidades",
      avatar: "👨‍💻",
      conteudo:
        "Dica: Assistam o webinário sobre carreiras em tecnologia amanhã às 14h. Vai ser incrível!",
      likes: 45,
      comentarios: 12,
    },
    {
      id: 3,
      autor: "Ana Costa",
      tempo: "há 1 dia",
      categoria: "Projetos",
      avatar: "👩‍🎨",
      conteudo:
        "Estou desenvolvendo um projeto de app para simplificar o acesso a informações sobre emprego. Alguém quer colaborar?",
      likes: 67,
      comentarios: 19,
    },
  ];

  return (
    <div className="pagina-comunidade">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="topbar-logo" onClick={() => navigate("/dashboard")}> 🚀 Faz Teu Nome</div>
        </div>
<<<<<<< HEAD:src/pages/Comunidade/Comunidade.jsx
        <div className="topbar-links">
          <span onClick={() => navigate("/dashboard")}>Início</span>
          <span onClick={() => navigate("/perfil")}>Meu Perfil</span>
          <span
            style={{ fontWeight: "bold" }}
            onClick={() => navigate("/comunidade")}
          >
            Comunidade
          </span>
          <span onClick={() => navigate("/ranking")}>Ranking</span>
        </div>

<<<<<<< HEAD
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

=======
        <div className="topbar-user">
          👤
          <span
            style={{ marginLeft: "8px" }}
            title="Sair"
            onClick={() => navigate("/login")}
>>>>>>> bebe156812c92e826f7da2118f04b80b0440bd47
=======
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
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Comunidade.jsx
          >
            ⬅
          </span>
        </div>
<<<<<<< HEAD
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Comunidade.jsx
=======
>>>>>>> bebe156812c92e826f7da2118f04b80b0440bd47
      </nav>

      <div className="container main-layout">
        {/* Coluna Principal (Feed) */}
        <main className="feed-column">
<<<<<<< HEAD:src/pages/Comunidade/Comunidade.jsx
  <header className="comunidade-header">
    <h1>Comunidade</h1>
    <p>Conecte-se com colegas, compartilhe experiências e inspire outros</p>
  </header>


          {/* Botão Voltar alinhado à esquerda */}
           <div className="voltar-wrapper">
    <button className="btn-voltar" onClick={() => navigate("/dashboard")}>
      Voltar
    </button>
  </div>

=======
          <header className="comunidade-header">
            <h1>Comunidade</h1>
            <p>Conecte-se com colegas, compartilhe experiências e inspire outros</p>
<<<<<<< HEAD
<<<<<<< HEAD:src/pages/Comunidade/Comunidade.jsx
          <button
  className="btn-voltar"
  onClick={() => navigate("/dashboard")}
>
  Voltar
</button>

=======
            <button className="btn-voltar"onClick={() => navigate("/dashboard")}>Voltar</button>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Comunidade.jsx
=======
            <button className="btn-voltar"onClick={() => navigate("/dashboard")}>Voltar</button>
>>>>>>> bebe156812c92e826f7da2118f04b80b0440bd47
          </header>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7:src/pages1/Comunidade.jsx

          {/* Área de Novo Post */}
          <div className="novo-post-card">
    <div className="avatar-post">😊</div>
    <div className="input-placeholder">
      Compartilhe suas experiências, dúvidas ou inspirações...
    </div>
  </div>


          {/* Lista de Posts */}
          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="user-info">
                    <div className="avatar-post">{post.avatar}</div>
                    <div>
                      <h4>{post.autor}</h4>
                      <span>{post.tempo}</span>
                    </div>
                  </div>
                  <span className="post-category">{post.categoria}</span>
                </div>
                <div className="post-body">
                  <p>{post.conteudo}</p>
                </div>
                <div className="post-footer">
                  <div className="interaction">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comentarios}</span>
                  </div>
                  <div className="share-icon">🔗</div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Coluna Lateral (Sidebar) */}
        <aside className="sidebar-column">
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar comunidade" />
            <span className="search-icon">🔍</span>
          </div>

          <div className="sidebar-card">
            <h3>Estatísticas</h3>
            <div className="stat-item">
              <div className="stat-label">👥 Membros salvos</div>
              <div className="stat-value">248</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">✨ Posts hoje</div>
              <div className="stat-value">34</div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Tendências</h3>
            <ul className="trends-list">
              <li>#ProjetoDeVida</li>
              <li>#Emprego</li>
              <li>#SoftSkills</li>
              <li>#Tecnologia</li>
            </ul>
          </div>
        </aside>
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
              Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.
            </p>
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
            <p>
              Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu - PE.
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
};

export default Comunidade;