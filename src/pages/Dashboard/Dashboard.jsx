import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";


import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/usuarios/perfil", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          setErro(data.erro);
        } else {
          setUsuario(data);
          console.log(data)
        }
      })
      .catch(() => setErro("Erro ao carregar perfil"));
  }, [navigate]);
  return (
    <>
      {/* HEADER COMO COMPONENTE */}
      <Header />

      {/* BANNER COMO COMPONENTE */}
      <Banner
        variant="banner-dashboard"
        align="left"
        direction="column"
      >
        <div className="dashboard-header">
          <h2>
            Bem-vindo à sua jornada,{" "}
            <strong>{usuario?.nome_completo || "estudante"}</strong>!
          </h2>

          <p>
            Chegou a hora de descobrir talentos, desenvolver habilidades que fazem
            a diferença e construir um futuro com impacto.
          </p>

          {erro && <p style={{ color: "red" }}>{erro}</p>}

          <div className="progress-info">
            <div className="progress-box adjusted">
              <span>Total de Progresso</span>
              <span>20%</span>
            </div>

            <div className="progress-box adjusted">
              <span>Conquistas</span>
              <span>2</span>
            </div>

            <div className="progress-box adjusted">
              <span>Classificação</span>
              <span>45°</span>
            </div>
          </div>
        </div>
      </Banner>


      <div className="main-row">
        {/* MODULOS DE APRENDIZAGEM */}
        <section className="learning-path">
          <h3>Trilha de Aprendizagem</h3>
          <div
            className="path-card card-soft"
            onClick={() => navigate("/softskills")}
            style={{ cursor: "pointer" }}
          >
            <span className="icon">🧠</span>
            <div className="path-content">
              <h4>Soft Skills</h4>
              <p>Desenvolva inteligência emocional, liderança e empatia.</p>
              <div className="progress-container">
                <div className="progress-bar green" style={{ width: "60%" }} />
              </div>
            </div>
          </div>

          <div
            className="path-card card-hard"
            onClick={() => navigate("/hardskills")}
            style={{ cursor: "pointer" }}
          >
            <span className="icon">⚡</span>
            <div className="path-content">
              <h4>Hard Skills</h4>
              <p>Desenvolva habilidades tecnicas essenciais para o mundo profissional.</p>
              <div className="progress-container">
                <div className="progress-bar red" style={{ width: "15%" }} />
              </div>
            </div>
          </div>

          <div
            className="path-card card-projetovida"
            onClick={() => navigate("/projetodevida")}
            style={{ cursor: "pointer" }}
          >
            <span className="icon">🗺️</span>
            <div className="path-content">
              <h4>Projeto de Vida</h4>
              <p>Construa seu projeto de vida com reflexão crítica.</p>
              <div className="progress-container">
                <div className="progress-bar gray" style={{ width: "5%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* COLUNA LATERAL */}
        <aside className="side-column">
          <div className="side-box">
            <h3>Conquistas</h3>
            <div className="conquista-item desbloqueado">
              <span className="icon">🚀</span>
              <div>
                <strong>Primeiro Passo</strong>
                <p>Desbloqueado</p>
              </div>
            </div>
            <div className="conquista-item desbloqueado">
              <span className="icon">⭐</span>
              <div>
                <strong>Modelo de Caminho</strong>
                <p>Desbloqueado</p>
              </div>
            </div>
            <div className="conquista-item bloqueado">
              <span className="icon">👑</span>
              <div>
                <strong>Protagonista</strong>
                <p>Bloqueada</p>
              </div>
            </div>
          </div>

          <div className="side-box">
            <h3>Próximos eventos</h3>
            <div className="evento-item">
              <strong>Roda de Conversa</strong>
              <p>Quinta, 14h</p>
            </div>
            <div className="evento-item">
              <strong>Workshop de Design</strong>
              <p>Sábado, 10h</p>
            </div>
            <div className="evento-item">
              <strong>Hackathon Pedagógico</strong>
              <p>15 de Novembro</p>
            </div>
          </div>

          <div className="side-box sugestao-container">
            <div className="sugestao-titulo">
              <h3>💡 Dica</h3>
            </div>
            <p className="dica-texto">
              Complete todas as lições para desbloquear a área de criação do
              seu projeto vocacional.
            </p>
          </div>
        </aside>
      </div>


      <Footer />
    </>
  );
}