import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Comunidade.css";

function ListaPostagens() {
  const [postagens, setPostagens] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  console.log('USUARIO LOGADO:  ', usuario);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/comunidade", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(res => res.json())
      .then(data => {
        setPostagens(data); console.log('POSTAGEM: ', data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="posts-list">
      {postagens.length === 0 && <p>Nenhuma postagem ainda.</p>}

      {postagens.map((postagem) => (
        <div key={postagem.id} className="post-card">
          <h4>{postagem.nome_completo}</h4>
          <span>{new Date(postagem.data_atual).toLocaleDateString()}</span>
          <p>{postagem.postagem}</p>


          {Number(usuario.id) === Number(postagem.usuario_id) && (
            <button>Excluir</button>
          )}
        </div>
      ))}
    </div>
  );
}



const Comunidade = () => {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  return (
    <div className="pagina-comunidade">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span
            className="topbar-logo"
            onClick={() => navigate("/dashboard")}
            style={{ cursor: "pointer" }}
          >
            🚀 Faz Teu Nome
          </span>
        </div>

        <div className="nav-links">
          <span onClick={() => navigate("/dashboard")}>Início</span>
          <span onClick={() => navigate("/profile")}>Meu Perfil</span>
          <span
            style={{ fontWeight: "bold" }}
            onClick={() => navigate("/comunidade")}
          >
            Comunidade
          </span>
          <span onClick={() => navigate("/ranking")}>Ranking</span>
        </div>

        <div className="topbar-user">
          <span 
            onClick={() => navigate("/profile")} 
            style={{ cursor: "pointer" }}
          >
            👤
          </span>
          <span
            style={{ marginLeft: "15px", cursor: "pointer" }}
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
            <button
              className="btn-voltar"
              onClick={() => navigate("/dashboard")}
            >
              Voltar
            </button>
          </header>

          {/* Área de Novo Post */}
          <div className="novo-post-card">
            <div className="avatar-post">😊</div>
            <textarea
              className="input-placeholder"
              placeholder="Compartilhe suas experiências, dúvidas ou inspirações..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>

          {/* Barra de Pesquisa */}
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar na comunidade..." />
            <span className="search-icon">🔍</span>
          </div>

          {/* Lista de Posts */}
          <ListaPostagens />
        </main>

        {/* Coluna Lateral (Sidebar) */}
        <aside className="sidebar-column">
          <div className="sidebar-card">
            <h3>Estatísticas</h3>
            <div className="stat-item">
              <div className="stat-label">👥 Membros</div>
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
            <p>Plataforma pedagógica para protagonismo juvenil e projeto de vida.</p>
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
            <p>Desenvolvimento para o município de Igarassu - PE.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Faz Teu Nome. Todos os direitos reservados.</span>
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