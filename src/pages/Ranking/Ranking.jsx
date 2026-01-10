import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ranking.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";


const Ranking = () => {
  const navigate = useNavigate();
  const rankingData = [
    { pos: "1º", nome: "Pedro Oliveira", pontos: "8.540", seq: 15, conquistas: 8, medal: "🥇" },
    { pos: "2º", nome: "Marina Silva", pontos: "7.920", seq: 12, conquistas: 7, medal: "🥈" },
    { pos: "3º", nome: "Lucas Costa", pontos: "7.650", seq: 10, conquistas: 7, medal: "🥉" },
    { pos: "4º", nome: "Ana Lima", pontos: "5.890", seq: 9, conquistas: 5, medal: "🏅" },
    { pos: "5º", nome: "Carla Mendes", pontos: "4.950", seq: 6, conquistas: 4, medal: "🏅" },
    { pos: "6º", nome: "Ricardo Torres", pontos: "4.680", seq: 4, conquistas: 3, medal: "🏅" },
  ];

  return (
    <>
    <Header />
    <div className="ranking-page">

      {/* BANNER COMO COMPONENTE */}
      <Banner
        variant="banner-ranking"
        align="left"
        direction="column"
      >
        <div className="banner-content">
          <h2>Ranking</h2>
          <p>
            Veja sua posição, acompanhe seu desempenho e dispute o topo.
          </p>
        </div>
      </Banner>

      {/* CONTEÚDO */}
      <div className="ranking-layout">
        <button
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/dashboard")}
        >Voltar
        </button>

        <div className="main-content">
          <div className="left-side">
            {/* Top 3 Cards */}
            <div className="podium">
              <div className="podium-card gold">
                <span className="medal-big">🥇</span>
                <h3>Pedro Oliveira</h3>
                <p className="pts">8.540 pts</p>
                <p className="stats">15 dias seguidos</p>
                <p className="stats">8 conquistas</p>
              </div>
              <div className="podium-card silver">
                <span className="medal-big">🥈</span>
                <h3>Marina Silva</h3>
                <p className="pts">7.920 pts</p>
                <p className="stats">12 dias seguidos</p>
                <p className="stats">7 conquistas</p>
              </div>
              <div className="podium-card bronze">
                <span className="medal-big">🥉</span>
                <h3>Lucas Costa</h3>
                <p className="pts">7.650 pts</p>
                <p className="stats">10 dias seguidos</p>
                <p className="stats">7 conquistas</p>
              </div>
            </div>

            {/* Ranking Table */}
            <div className="ranking-table-container">
              <div className="table-header">
                <span>Posição</span>
                <span>Estudante</span>
                <span>Pontos</span>
                <span>Sequência</span>
                <span>Conquista</span>
              </div>
              {rankingData.map((item, index) => (
                <div key={index} className="table-row">
                  <span className="col-pos">{item.medal} {item.pos}</span>
                  <span className="col-name">{item.nome}</span>
                  <span className="col-pts">{item.pontos}</span>
                  <span className="col-seq">🔥 {item.seq}</span>
                  <span className="col-conq">⭐ {item.conquistas}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Stats */}
          <aside className="stats-sidebar">
            <h3>Suas Estatísticas</h3>
            <div className="stat-group">
              <label>Sua Posição:</label>
              <div className="stat-value large-blue">4º</div>
            </div>
            <div className="stat-group">
              <label>Pontos</label>
              <div className="stat-value large-dark">6.280</div>
            </div>
            <div className="alert-card">
              <p><strong>Você está subindo!</strong></p>
              <p>Ganhou 850 pts esta semana</p>
            </div>
          </aside>
        </div>
      </div>

    </div>
    <Footer />
    </>
  );
};

export default Ranking;