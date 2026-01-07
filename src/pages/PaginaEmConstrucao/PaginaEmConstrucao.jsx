import React from "react"; 
import { useNavigate } from "react-router-dom"; 
import Header from "../../components/Header/Header";
import imagemConstrucao from "../../assets/imagemconstrucao.png";
import "./PaginaEmConstrucao.css";

function PaginaEmConstrucao() {
  const navigate = useNavigate(); 

  return (
    <>
      <Header />

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
