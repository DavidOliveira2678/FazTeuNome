import React from "react";
import { useNavigate } from "react-router-dom";
import "./Comunidade.css";

const Comunidade = () => {
  const navigate = useNavigate();
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
          <span className="rocket-icon">🚀</span> Faz Teu Nome
        </div>
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

        <div className="topbar-user">
          👤
          <span
            style={{ marginLeft: "8px" }}
            title="Sair"
            onClick={() => navigate("/login")}
          >
            ⬅
          </span>
        </div>
      </nav>

      <div className="container main-layout">
        {/* Coluna Principal (Feed) */}
        <main className="feed-column">
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
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Faz Teu Nome</h4>
            <p>
              Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.
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
              Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu - PE.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Faz Teu Nome. Todos os direitos reservados.</p>
          <div className="footer-links">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Acessibilidade</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Comunidade;