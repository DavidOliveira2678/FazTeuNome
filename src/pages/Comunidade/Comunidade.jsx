import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Comunidade.css";
import Header from "../../components/Header/Header"

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
      
     <Header/>
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
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Faz Teu Nome</h4>
            <p>Plataforma pedagógica para protagonismo juvenil.</p>
          </div>
          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li>Trilha</li>
              <li>Comunidade</li>
              <li>Hackaton</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>Guia</li>
              <li>FAQ</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Igarassu</h4>
            <p>Desenvolvimento para o município de Igarassu-PE.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Faz Teu Nome — Todos os direitos reservados.
          </span>
          <div className="footer-links">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Suporte</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Comunidade;