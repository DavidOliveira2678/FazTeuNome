import "./PaginaEmConstrucao.css";

function PaginaEmConstrucao() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span>Faz Teu Nome</span>
        </div>

        <nav className="nav-links">
          <a href="#">Início</a>
          <a href="#">Meu Perfil</a>
          <a href="#">Comunidade</a>
          <a href="#">Ranking</a>
        </nav>

        <div className="img-icons">
          <img
            src="/assets/perfil.png"
            alt="Perfil"
            className="profile-icon"
          />
          <img src="/assets/sair.png"
            alt="Sair"
            className="sair-icon"
          />
        </div>
      </header>

      <br />
      <br />

      <main>
        <div className="container">
          <div className="banner">PÁGINA EM CONSTRUÇÃO</div>

          <p className="texto">
            Estamos trabalhando para trazer uma experiência completa para você.
            <br />
            Em breve, este conteúdo estará disponível.
          </p>
        </div>

        <div className="container1">
          <img
            src="/assets/imagemconstrucao.png"
            alt="Imagem central"
          />
        </div>

        <div className="container-botao">
          <button className="btn-retornar">Retornar</button>
        </div>

        <br />
        <br />
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Faz Teu Nome</h4>
            <p>
              Plataforma pedagógica para capacitação e formação de estudantes da
              rede pública.
            </p>
          </div>

          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li>
                <a className="footer-link" href="#">
                  Trilhas de aprendizagem
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Comunidade
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Ranking
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>
                <a className="footer-link" href="#">
                  Suporte
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Igarassu</h4>
            <p>
              Desenvolvimento web com estudantes da rede pública de Igarassu,
              Pernambuco. Projeto de iniciação científica e extensão.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PaginaEmConstrucao;
