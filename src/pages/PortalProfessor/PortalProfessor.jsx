import React from "react";
import "./PortalProfessor.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PortalProfessor = () => {
  const alunos = [
    { nome: "Ana Lima", desempenho: "92%", status: "Excelente", statusColor: "status-blue", icon: "😊", data: "14/01/2024", acao: "Ver Histórico" },
    { nome: "Marina Silva", desempenho: "88%", status: "Excelente", statusColor: "status-blue", icon: "😊", data: "14/01/2024", acao: "Ver Histórico" },
    { nome: "Lucas Costa", desempenho: "78%", status: "Bom", statusColor: "status-star", icon: "⭐", data: "12/01/2024", acao: "Sugerir revisão" },
    { nome: "Pedro Oliveira", desempenho: "65%", status: "Médio", statusColor: "status-red", icon: "⭕", data: "11/01/2024", acao: "Enviar alerta" },
    { nome: "Carla Mendes", desempenho: "46%", status: "Necessita Ajuda", statusColor: "status-help", icon: "⚠️", data: "09/01/2024", acao: "Acompanhar" },
  ];

  return (
    <div className="pagina-container">
      <Header />

      <div className="content-wrapper">
        {/* Banner do Professor */}
        <header className="hero-banner-prof">
          <div className="prof-info">
            <div className="prof-avatar-box">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Professor" />
            </div>
            <div className="prof-text">
              <h1>Portal do Professor</h1>
              <p>Prof. Ricardo Alves</p>
              <small>Escola Estadual Gregorio Arcando</small>
            </div>
          </div>
        </header>

        {/* Seção de Cards de Estatísticas */}
        <section className="stats-section">
          <h3>Suas Turmas</h3>
          <div className="stats-grid">
            <div className="stat-card orange-top">
              <div className="stat-header">
                <span>Total de Turmas</span>
                <span className="stat-icon">🔥</span>
              </div>
              <div className="stat-value">3</div>
            </div>
            <div className="stat-card blue-top">
              <div className="stat-header">
                <span>Total de Alunos</span>
                <span className="stat-icon">👥</span>
              </div>
              <div className="stat-value">85</div>
            </div>
            <div className="stat-card orange-top">
              <div className="stat-header">
                <span>Desempenho Médio</span>
                <span className="stat-icon">⭐</span>
              </div>
              <div className="stat-value">78.5%</div>
            </div>
          </div>
        </section>

        {/* Tabela de Desempenho */}
        <section className="desempenho-section">
          <h3>Desempenho dos Alunos</h3>
          <div className="table-container">
            <div className="table-header">
              <span>Aluno</span>
              <span>Desempenho</span>
              <span>Status</span>
              <span>Última Atividade</span>
              <span>Ações</span>
            </div>
            <div className="table-body">
              {alunos.map((aluno, index) => (
                <div key={index} className="table-row">
                  <span className="col-aluno">{aluno.nome}</span>
                  <span className="col-desempenho">{aluno.desempenho}</span>
                  <span className={`col-status ${aluno.statusColor}`}>
                    <span className="icon-status">{aluno.icon}</span> {aluno.status}
                  </span>
                  <span className="col-data">{aluno.data}</span>
                  <span className="col-acao"><a href="#">{aluno.acao}</a></span>
                </div>
              ))}
            </div>
            <button className="btn-ver-todos">Ver todos</button>
          </div>
        </section>

        {/* Box Vazio de Conteúdo Extra */}
        <div className="empty-content-box"></div>
      </div>

      <Footer />
    </div>
  );
};

export default PortalProfessor;