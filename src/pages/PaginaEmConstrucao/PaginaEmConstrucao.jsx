import React from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import "./PaginaEmConstrucao.css";
import imagemConstrucao from "../../assets/imagemconstrucao.png";

function PaginaEmConstrucao() {
  const navigate = useNavigate(); 

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span>Faz Teu Nome</span>
        </div>

        <nav className="nav-links">
          <Link to="/dashboard">Início</Link>
          <Link to="/perfil">Meu Perfil</Link>
          <Link to="/comunidade">Comunidade</Link>
          <Link to="/ranking">Ranking</Link>
        </nav>
        <div className="img-icons">
  <span style={{ cursor: "pointer" }} title="Perfil">
    👤
  </span>
  <span
    style={{ marginLeft: "8px", cursor: "pointer" }}
    title="Sair"
    onClick={() => navigate("/login")}
  >
    ⬅
  </span>
</div>

      </header>

      <main>
        <div className="container">
          <div className="banner">PÁGINA EM CONSTRUÇÃO</div>
          <p className="texto">
            Estamos trabalhando para trazer uma experiência completa para você.
            <br />
            Em breve, este conteúdo estará disponível.
          </p>
        </div>

<div className="container1">
  <img src={imagemConstrucao} alt="Página em construção" />
</div>



        <div className="container-botao">
          <button 
            className="btn-retornar"
            onClick={() => navigate("/dashboard")}
          >
            Retornar
          </button>
        </div>
      </main>
    </>
  );
}

export default PaginaEmConstrucao;
