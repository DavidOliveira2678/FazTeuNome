import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard({ nome }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard-container">
        <nav className="dashboard-topbar">
<<<<<<< HEAD
         <div className="topbar-logo">
  🚀 <span>FAZ TEU NOME</span>
</div>


<div className="topbar-links">
  <span style={{ cursor: "pointer" }}>
    Início
  </span>

  <span
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/profile")}
  >
    Meu Perfil
  </span>

  <span
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/comunidade")}
  >
    Comunidade
  </span>

  <span
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/ranking")}
  >
    Ranking
  </span>
</div>

=======
          <div className="topbar-logo" onClick={() => navigate("/dashboard")}> 🚀 Faz Teu Nome</div>

          <div className="nav-links">
            <a onClick={() => navigate("/dashboard")}>Início</a>
            <a onClick={() => navigate("/profile")}>Meu Perfil</a>
            <a onClick={() => navigate("/comunidade")}>Comunidade</a>
            <a onClick={() => navigate("/ranking")}>Ranking</a>
          </div>
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7


          <div className="topbar-user" onClick={() => navigate("/profile")} style={{ marginLeft: "8px", cursor: "pointer" }}>
            👤
            <span
              style={{ marginLeft: "8px", cursor: "pointer" }}
              title="Sair"
              onClick={() => (window.location.href = "/login")}
            >
              ⬅
            </span>
          </div>
        </nav>

        <div className="dashboard-header">
          <h2>Bem-vindo à sua jornada!</h2>
          <p>
            Chegou a hora de descobrir talentos, desenvolver habilidades que fazem
            a diferença e construir um futuro com impacto. </p>
          <p> O futuro começa agora,
            por isso Faz teu Nome!</p><br></br>


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

        <div className="main-row">
          <div className="learning-path">
            <h3>Trilha de Aprendizagem</h3>

            <div
              className="path-card"
<<<<<<< HEAD
              onClick={() => navigate("/SoftSkills")}
=======
              onClick={() => navigate("/softskills")}
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
              style={{ cursor: "pointer" }}
            >
              <span className="icon">🧠</span>
              <div className="path-content">
                <h4>Soft Skills</h4>
                <p>
                  Desenvolva inteligência emocional, liderança e empatia.
                </p>
                <div
                  className="progress-bar green"
                  style={{ width: "150%" }}
                />
              </div>
            </div>

            <div
              className="path-card"
<<<<<<< HEAD
              onClick={() => navigate("/HardSkills")}
=======
              onClick={() => navigate("/hardskills")}
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
              style={{ cursor: "pointer" }}
            >
              <span className="icon">⚡</span>
              <div className="path-content">
                <h4>Hard Skills</h4>
                <p>Construa habilidades aplicáveis ao mercado, aprendendo ferramentas, processos e boas práticas usadas no dia a dia profissional. </p>
                <div
                  className="progress-bar red"
                  style={{ width: "50%" }}
                />
              </div>
            </div>

<<<<<<< HEAD
            <div
              className="path-card"
              onClick={() => navigate("/projetodevida")}
              style={{ cursor: "pointer" }}
            >

=======
            <div className="path-card"
              onClick={() => navigate("/projetodevida")}
              style={{ cursor: "pointer" }}
            >
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
              <div className="path-icon">
                <span className="dot start"></span>
                <span className="line"></span>
                <span className="dot end"></span>
              </div>
              <div className="path-content">
                <h4>Projeto Vida</h4>
                <p>Construa seu projeto de vida com reflexão crítica.</p>
                <div
                  className="progress-bar gray"
                  style={{ width: "150%" }}
                />
              </div>
            </div>
          </div>

          <div className="side-column">
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

            <div className="side-box sugestão-container">
              <div className="sugestão-titulo">
                <span className="icone-lampada">💡</span>
                <h3>Dica</h3>
              </div>
              <p className="dica-texto">
                Complete todas as lições para desbloquear a área de criação do
                seu projeto vocacional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="footer"
        onClick={() => navigate("/em-construcao")}
        style={{ cursor: "pointer" }}
      >
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Faz Teu Nome</h4>
            <p>
              Plataforma pedagógica para protagonismo juvenil e construção de
              projeto de vida.
            </p>
          </div>

          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li>Trilha de Aprendizagem</li>
              <li>Comunidade</li>
              <li>Hackaton</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>Guia do Professor</li>
              <li>FAQ</li>
              <li>Contato</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Igarassu</h4>
            <p>
              Desenvolvimento com escuta ativa e protagonismo juvenil para o
              município de Igarassu-PE.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Faz Teu Nome — Todos os direitos
            reservados.
          </span>
          <div className="footer-links">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Suporte</span>
          </div>
        </div>
      </footer>
    </>
  );
}
