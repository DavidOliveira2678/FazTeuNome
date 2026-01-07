import { useNavigate } from 'react-router-dom';
import "./Footer.css";

export default function Footer(){
    const navigate = useNavigate();

    return (
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Faz Teu Nome</h4>
            <p>Plataforma pedagógica para protagonismo juvenil e construção de projeto de vida.</p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul>
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>Trilha de aprendizagem</li>
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/comunidade")}>Comunidade</li>
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>Hackaton</li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>Guia do Professor</li>
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>FAQ</li>
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>Contato</li>
            </ul>
          </div> 
          <div className='footer-pref-igarassu'>
            <h4>Igarassu</h4>
            <p>Desenvolvimento com escuta ativa e protagonismo juvenil para o <a href="https://igarassu.pe.gov.br/" target='_blank'>município de Igarassu - PE.</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Faz Teu Nome. Todos os direitos reservados.</span>
          <div className="footer-links">
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>Privacidade</a>
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>Termos</a>
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/em-construcao")}>Acessibilidade</a>
          </div>
        </div>
      </footer>
    )
}