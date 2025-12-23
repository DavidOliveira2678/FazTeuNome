import React from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./VocabulariodeNegocios.css";

export default function VocabulariodeNegocios({ nome }) {
  const navigate = useNavigate(); 

  const handleVoltar = () => {
    navigate("/dashboard"); 
  };

  return (
    <>
      <div className="VocabulariodeNegocios-container">

        <nav className="VocabulariodeNegocios-topbar">
          <div className="topbar-logo">FAZ TEU NOME</div>
          <div className="topbar-links">
            <span>Início</span>
            <span>Meu Perfil</span>
            <span>Comunidade</span>
            <span>Ranking</span>
          </div>
          <div className="topbar-user">
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

        <div className="VocabulariodeNegocios-header">
          <div className="header-top">
            <div className="header-left">
              <span className="softskills-label">Soft Skills</span>
              <h2>Vocabulario de Negócios</h2>
              <p>Domine os termos essenciais do mundo corporativo e profissional</p>
              <p>Progresso do Módulo</p>
              <div style={{ marginTop: "14px" }}>
                <div className="progress-bar gray" style={{ width: "250%" }}>

                </div>
              </div>
            </div>
            <div className="progress-info">
              <div className="progress-box adjusted">
                <span>Concluído</span>
                <span>0%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="main-row">
          <div className="learning-path">
            <button className="btn-voltar" onClick={handleVoltar}>
              Voltar
            </button>

            <h3>Comunicação Profissional?</h3>
            <p>
              O vocabulário de negócios é essencial para uma comunicação efetiva no ambiente corporativo. 
              <br />
              Conhecer os termos corretos demonstra profissionalismo e facilita o entendimento entre equipes, departamentos e empresas.
            </p>

            <div className="content-row">

              <div className="content-left">

                <div className="Termos-container">
                  <h3>Termos Essenciais</h3>
                  <label>Stakeholder</label>
                  <textarea placeholder="Qualquer pessoa ou grupo que tem interesse no sucesso de uma empresa" />
                  <label>ROI (Return on Investment)</label>
                  <textarea placeholder="Retorno sobre investimento - métrica que calcula a eficiência de um investimento" />
                  <label>KPI (Key Performance Indicator)</label>
                  <textarea placeholder="Indicador-chave de desempenho usado para medir o sucesso de uma atividade" />
                  <label>Deadline</label>
                  <textarea placeholder="Prazo final para conclusão de uma tarefa ou projeto"/>
                </div>

                <div className="exercicio-pratico">
                  <h3>Exercício Prático</h3>
                  <p>Complete as frases abaixo com os termos aprendidos:</p>
                  <label>O __________ do projeto é na próxima sexta-feira</label>
                  <textarea placeholder="Digite sua resposta" />
                  <label>Precisamos apresentar os _______ de vendas na reunião.</label>
                  <textarea placeholder="Digite sua resposta" />
                  <label>Os _______ da empresa incluem funcionários, clientes e investidores</label>
                  <textarea placeholder="Digite sua resposta" />
                </div>
                <div className="Aplicação-container aplicacao-real">
                  <h3>Aplicação Real</h3>
                  <p className="Aplicação-descricao">
                    Escreva um parágrafo curto descrevendo uma situação profissional usando pelo menos 3 termos que você aprendeu hoje:
                  </p>
                  <textarea placeholder="Exemplo: Na ultima reunião, discutimos os KPIs do trimestre com todos os stakeholders" />
                </div>

                <button className="btn-continuar">Salvar e Continuar</button>
              </div>

              <div className="content-right">
                <div className="Agora-container">
                  <div className="Agora-card">
                  <h4>✅ Agora é sua vez</h4>
                  <div className="jogo-papeis">Jogo dos Papéis</div>
                  <p>
                    Chegou a hora de sair da teoria e entrar no jogo. Reúna-se com seus colegas, forme uma equipe e enfrente desafios inspirados em situações reais do mundo do trabalho.
                  </p>
                </div>

                <div className="action-buttons">
                  <button className="btn-secondary">Visualizar meu papel</button>
                  <button className="btn-secondary">Visualizar minha missão</button>
                  <button className="btn-primary">Começar</button>
                </div>

               <button className="btn-duvidas" >
                 <span className="icone-duvida"> ? </span>
                 Dúvidas
                 </button>

                </div>
                

              </div>

            </div>
          </div>
        </div>
      </div>

      <footer className="VocabulariodeNegocios-footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Faz Teu Nome</h4>
            <p>Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.</p>
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
            <p>Desenvolvimento com escuta ativa e protagonismo juvenil para o município de Igarassu-PE.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Faz Teu Nome — Todos os direitos reservados.</span>
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
