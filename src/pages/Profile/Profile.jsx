import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
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
        }
      })
      .catch(() => setErro("Erro ao carregar perfil"));
  }, [navigate]);

  if (!usuario) return <p>Carregando perfil...</p>;

  return (
    <div className="profile-page">
      <Header/>
      <div className="container">
        {/* Banner do Usuário */}
        <header className="profile-banner">
          <div className="banner-info">
            <div className="avatar-large">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="User"
              />
            </div>
            <div className="user-details">
              <h1>{usuario.nome_completo}</h1>
              <p>{usuario.serie + "° ano do Ensino Médio" || "Série não informada"}</p>
              <small>{usuario.escola || "Escola não informada"}</small>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Tipo:</strong> {usuario.tipo_usuario}</p>
              <p><strong>Telefone:</strong> {usuario.telefone || "Não informado"}</p>
            </div>
          </div>
          <div className="banner-actions">
            <button
              className="btn-white"
              onClick={() => navigate("/editar-perfil")}
            >
              Editar
            </button>
          </div>
        </header>

        {/* resto do layout igual ao seu original */}
        {erro && <p className="mensagem-erro">{erro}</p>}
        <div className="profile-grid">
          <main className="profile-main">
            {/* Sobre Mim */}
            <section className="profile-card clickable">
              <div className="card-header">
                <h3>Sobre mim</h3>
                <span>❯</span>
              </div>
              <p className='about-paragraph'> {usuario.bio} </p>
            </section>

            {/* Meus Interesses */}
            <section className="profile-card clickable">
              <div className="card-header">
                <h3>Meus Interesses</h3>
                <span>❯</span>
              </div>
              <div className="tags">
                <span className="tag">Comunicação</span>
                <span className="tag">Arte</span>
                <span className="tag">Tecnologia</span>
                <span className="tag">Fotografia</span>
                <span className="tag">Música</span>
                <span className="tag">Programação</span>
              </div>
            </section>

            {/* Habilidades */}
            <section className="profile-card clickable">
              <div className="card-header">
                <h3>Habilidades</h3>
                <span>❯</span>
              </div>
              <div className="skills-bars">
                <div className="skill-item">
                  <div className="bar orange" style={{ width: "90%" }}></div>
                </div>
                <div className="skill-item">
                  <div className="bar dark" style={{ width: "65%" }}></div>
                </div>
                <div className="skill-item">
                  <div className="bar orange" style={{ width: "80%" }}></div>
                </div>
              </div>
            </section>

            {/* Minha Galeria */}
            <section className="profile-card">
              <h3>Minha Galeria</h3>
              <div className="gallery-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="upload-box">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                ))}
              </div>
            </section>

            <button className="btn-voltar" onClick={() => navigate("/dashboard")}>
              Voltar
            </button>
          </main>

         
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

          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;