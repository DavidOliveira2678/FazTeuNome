import React from "react";
import { useNavigate } from "react-router-dom";
import "./Oportunidades.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const Oportunidades = () => {
  const navigate = useNavigate();
  const cards = [
    { title: "Jovem Aprendiz em Tecnologia", company: "TechIgarassu", tags: ["Jovem Aprendiz", "Presencial"], loc: "Igarassu, PE" },
    { title: "Jovem Aprendiz Logística", company: "Prefeitura de Igarassu", tags: ["Jovem Aprendiz", "Presencial"], loc: "Igarassu, PE" },
    { title: "Atendimento", company: "Rede de Mercados Flui", tags: ["Jovem Aprendiz", "Presencial"], loc: "Abreu e Lima, PE" },
    { title: "Bolsa de Estudos - FTN Cursos", company: "Instituto Start", tags: ["Formação", "Presencial"], loc: "Igarassu, PE" },
    { title: "Jovem Aprendiz - Industria", company: "Fabrica Pelincos", tags: ["Jovem Aprendiz", "Presencial"], loc: "Itamaraca, PE" },
    { title: "Primeiro Emprego", company: "Rede Cidadã", tags: ["Primeiro Emprego", "Presencial"], loc: "Igarassu, PE" },
  ];

  return (
    <>
    <Header />
    <div className="oportunidades-pagina-container">

      <Banner
        variant="banner-oportunidades"
        align="center"
        direction="column"
      >
        <div className="badge-conquista">
          <span className="lock-icon">🔒</span> Conquista Desbloqueada
        </div>

        <h2>PARABÉNS!</h2>
        <h3>Você chegou até aqui.</h3> 

        <p>
          Agora é a hora de transformar sua trajetória em oportunidade.
        </p>
      </Banner>


      <main className="oportunidades-content-wrapper">
        <div className="filter-section">
          <h3>Oportunidades para você</h3>
          <div className="filters">
            <select><option>Todas as áreas</option></select>
            <select><option>Todos os tipos</option></select>
            <select><option>Todas as modalidades</option></select>
          </div>
        </div>

        <button
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/projetodevida")}
        >Voltar
        </button>

        {/* Grid de Cards */}
        <div className="opportunities-grid">
          {cards.map((card, index) => (
            <div key={index} className="opportunity-card">
              <div className="card-badge">Alinhado com seu perfil</div>
              <h4>{card.title}</h4>

              <div className="card-info">
                <span className="info-item">🏢 {card.company}</span>
                <div className="card-tags">
                  {card.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <span className="info-item">📍 {card.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
    <Footer />
    </>
  );
};

export default Oportunidades;