import React from "react";
import { useNavigate } from "react-router-dom";
import "./EscolhaTema.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";


const EscolhaTema = () => {
  const navigate = useNavigate();
  return (
    <div className="pagina-container">
      <Header />
      <Banner variant="banner-escolhatema"
        align="left"
        direction="column">
        {/* 🔥 BANNER FORA DO CONTAINER */}
        <section className="hero-card-tema">
          <div className="hero-content">
            <small>Projeto Vida</small>
            <h1>Escolha seu tema</h1>
            <p>
              Este é um momento importante da sua jornada. Escolha um tema que mais
              se conecta com seus interesses, curiosidades e objetivos atuais.
            </p>
          </div>
        </section>
      </Banner>

      {/* 📦 CONTEÚDO NORMAL */}
      <div className="content-wrapper">
        <button
          type="button"
          className="btn-voltar"
          onClick={() => navigate("/projetodevida")}
          style={{ cursor: "pointer" }}
        >
          Voltar
        </button>


        <div className="introducao-selecao">
          <h2>Qual desses temas mais se conecta com quem você é hoje?</h2>
          <p>Lembre-se: não há respostas certas ou erradas. Este projeto é um espaço de experimentação, aprendizado e descoberta sobre você mesmo.</p>
        </div>

        <main className="themes-grid">
          {/* Card Indústria */}
          <article className="theme-card industria">
            <div className="theme-header">
              <div className="theme-icon-svg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M2 20V9l4-2v13M6 20V5l4-2v17M10 20V9l4-2v13M14 20V5l4-2v17M18 20V9l4-2v13" /></svg>
              </div>
              <h3>Indústria</h3>
            </div>
            <div className="theme-body">
              <p className="main-desc">Explore o mundo dos processos produtivos, inovação industrial, sustentabilidade, qualidade, manutenção e organização do trabalho.</p>
              <h4>O que você irá explorar:</h4>
              <ul>
                <li>Processos de produção e manufatura</li>
                <li>Gestão de qualidade e melhoria contínua</li>
                <li>Sustentabilidade e inovação industrial</li>
                <li>Segurança e organização do trabalho</li>
              </ul>
              <div className="para-quem">
                <strong>Para quem:</strong> Ideal para quem tem interesse em processos, organização e quer fazer parte da transformação da indústria.
              </div>
              <button className="btn-select" onClick={() => navigate("/oportunidades")}
                style={{ cursor: "pointer" }}>Escolher Indústria</button>
            </div>
          </article>

          {/* Card Tecnologia */}
          <article className="theme-card tecnologia">
            <div className="theme-header">
              <div className="theme-icon-svg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>Tecnologia</h3>
            </div>
            <div className="theme-body">
              <p className="main-desc">Mergulhe na inovação digital, programação, criação de soluções tecnológicas e o impacto da tecnologia no ambiente profissional.</p>
              <h4>O que você irá explorar:</h4>
              <ul>
                <li>Programação e desenvolvimento de software</li>
                <li>Inovação digital e transformação tecnológica</li>
                <li>Criação de soluções para problemas reais</li>
                <li>Tecnologia aplicada aos negócios</li>
              </ul>
              <div className="para-quem">
                <strong>Para quem:</strong> Perfeito para quem gosta de resolver problemas de forma criativa e quer criar soluções que impactam o mundo.
              </div>
              <button className="btn-select" onClick={() => navigate("/oportunidades")}
                style={{ cursor: "pointer" }}>Escolher Tecnologia</button>
            </div>
          </article>

          {/* Card ENEM */}
          <article className="theme-card enem">
            <div className="theme-header">
              <div className="theme-icon-svg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2.7 4 6 4s6-2 6-4v-5" /></svg>
              </div>
              <h3>ENEM e Vestibular</h3>
            </div>
            <div className="theme-body">
              <p className="main-desc">Organize seus estudos, planeje sua trajetória acadêmica e prepare-se estrategicamente para processos seletivos e o ensino superior.</p>
              <h4>O que você irá explorar:</h4>
              <ul>
                <li>Organização e planejamento de estudos</li>
                <li>Estratégias para processos seletivos</li>
                <li>Orientação para escolha de curso superior</li>
                <li>Desenvolvimento de rotina acadêmica</li>
              </ul>
              <div className="para-quem">
                <strong>Para quem:</strong> Indicado para quem pretende ingressar no ensino superior e busca orientação para organizar os estudos e fazer escolhas conscientes.
              </div>
              <button className="btn-select" onClick={() => navigate("/oportunidades")}
                style={{ cursor: "pointer" }}>Escolher Vestibular</button>
            </div>
          </article>
        </main>

        <section className="attention-section">
          <div className="attention-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5"><path d="M9 21h6M9 18h6M10 15H9a7 7 0 1 1 6 0h-1v-3H10v3z" /></svg>
          </div>
          <h3>Atenção</h3>
          <p>A escolha que você faz agora não define sua profissão futura. Ela apenas orienta o percurso de aprendizagem neste momento do seu Projeto de Vida. Você terá liberdade para explorar, experimentar e, se necessário, mudar de direção ao longo da jornada.</p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EscolhaTema;