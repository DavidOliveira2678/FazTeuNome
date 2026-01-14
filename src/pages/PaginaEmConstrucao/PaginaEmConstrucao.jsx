import React from "react"; 
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imagemConstrucao from "../../assets/imagemconstrucao.png";
import "./PaginaEmConstrucao.css";

function PaginaEmConstrucao() {
  const navigate = useNavigate(); 

  return (
    <>
    <Header />
      <div className="pagina-em-construcao-container">
        <div className="pagina-em-construcao-main">
          <h1>PÁGINA EM CONSTRUÇÃO</h1>
          <p className="pagina-em-construcao-paragraph">
            Estamos trabalhando para trazer uma experiência completa para você.
            <br />
            Em breve, este conteúdo estará disponível.
          </p>
        </div>
        <div>
          <div className="pagina-em-construcao-images">
            <img src={imagemConstrucao} alt="Página em construção" />
          </div>
        </div>
        <div className="pagina-em-construcao-container-botao">
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => navigate("/dashboard")}
          >
            Retornar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default PaginaEmConstrucao;
