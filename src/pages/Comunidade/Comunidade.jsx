import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./Comunidade.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

function ListaPostagens({ postagens, setModal, setPostagemSelecionada }) {
const usuario = JSON.parse(localStorage.getItem("usuario"));
  return (
    <div className="posts-list">
      {postagens.length === 0 && <p>Nenhuma postagem ainda.</p>}

      {postagens.map(postagem => (
        <div key={postagem.id} className="post-card">
          <div className="post-card-content">
            <h4>{postagem.nome_completo}</h4>
            <span>{new Date(postagem.data_postagem).toLocaleDateString()}</span>
            <p>{postagem.postagem}</p>
          </div>

          {Number(usuario.id) === Number(postagem.usuario_id) && (
            <div className="post-card-actions">
              <button style={{ cursor: 'pointer' }}
              onClick={() => {
                setPostagemSelecionada(postagem);
                setModal(true)}}
                >
                🗑️
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function DeletePostDialog({ onClose, handleApagar, postagem }){
  const [visibilidade, setVisibilidade] = useState(false);

  function animacaoFechar(){
    setVisibilidade(false);

    setTimeout(() => {
      onClose();
    }, 100);
  }

  useEffect(() => {
    setVisibilidade(true);
  }, []);

  return ReactDOM.createPortal(
    <div className={`delete-post-modal ${visibilidade ? "show" : ""}`}>
      <div className="delete-post-modal-content">
        <h2>Você <b>realmente</b> deseja apagar este post?</h2>
        <div className="delete-post-modal-content-buttons">
          <button style={{ cursor: 'pointer' }} className="delete-post-modal-yes" onClick={async () => {
            try{
            await handleApagar(postagem.id);
            animacaoFechar();
            } catch(error){
              alert("Erro ao deletar postagem.");
            }
          }}
          >
          Sim</button>
          <button style={{ cursor: 'pointer' }} className="delete-post-modal-no" onClick={animacaoFechar}>Não</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-post-root')
  )
}

const Comunidade = () => {
  const navigate = useNavigate();
  const [postagem, setPostagem] = useState("");
  const [postagens, setPostagens] = useState([]);
  const [postagemSelecionada, setPostagemSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const token = localStorage.getItem("token");

  async function carregarPostagens() {
    try {
      const response = await fetch("http://localhost:5000/api/comunidade", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      const data = await response.json();
      setPostagens(data);
    } catch (error) {
      console.error("Erro ao carregar postagens:", error);
    }
  }

  useEffect(() => {
    carregarPostagens();
  }, []);

  async function handlePostar(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/comunidade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          postagem,
          usuario_id: usuario.id
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao realizar a postagem.")
      };

      setPostagem("");
      await carregarPostagens(); 

    } catch (error) {
      console.error(error);
      alert("Erro ao realizar postagem.");
    }
  }

  async function handleApagar(id) {
    try {
      await fetch(`http://localhost:5000/api/comunidade/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token
        }
      });

      await carregarPostagens();
    } catch (error) {
      console.error("ERRO: ", error);
    }
  }

  return (
    <div className="pagina-comunidade">
      
     <Header/>
      <div className="comunidade-main-layout">
        {/* Coluna Principal (Feed) */}
        <main className="feed-column">
          <Banner align="left" direction="column" variant="banner-comunidade">
            <h2>Comunidade</h2>
            <p>Conecte-se com colegas, compartilhe experiências e inspire outros</p>
          </Banner>
            <button
              className="btn-voltar"
              onClick={() => navigate("/dashboard")}
            >
              Voltar
            </button>

          {/* Área de Novo Post */}
          <div className="novo-post-card">
            <div className="avatar-post">😊</div>
            <textarea
              className="input-placeholder"
              placeholder="Compartilhe suas experiências, dúvidas ou inspirações..."
              value={postagem}
              onChange={(e) => setPostagem(e.target.value)}
            />
            <p className="novo-post-card-tamanho" style={ postagem.length > 255 ?  { color: 'red', fontSize: '18px', fontWeight: '500' } : { color: '', fontSize: '', fontWeight: '' }}>{`${postagem.length}/255`}</p>
            <button type="submit" className="novo-post-button" onClick={handlePostar}>Postar</button>
          </div>

          {/* Barra de Pesquisa */}
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar na comunidade..." />
            <span className="search-icon">🔍</span>
          </div>

          <div className="comunidade-sidebar-e-posts">
            {/* Lista de Posts */}
            <ListaPostagens postagens={postagens} setModal={setModalAberto} setPostagemSelecionada={setPostagemSelecionada}/>
            
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
        </main>

      </div>

      <Footer />
      {modalAberto && (
        <DeletePostDialog postagem={postagemSelecionada} handleApagar={handleApagar} onClose={() => {
        setModalAberto(false);
        setPostagemSelecionada(null);
      }}/>
      )}
    </div>
  );
};

export default Comunidade;