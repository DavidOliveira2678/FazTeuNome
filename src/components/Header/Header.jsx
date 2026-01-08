import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from "react-router-dom";
import imgIconHeader from '../../assets/icon-header.png';
import "./Header.css";

function LeaveDialog({ onClose, navigate, children }){
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-div">
        { children }
        <div className="modal-div-buttons">
          <button className="modal-button-stay" style={{ cursor: "pointer" }} type="button" onClick={onClose}>Ficar</button>
          <button className="modal-button-leave" style={{ cursor: "pointer" }} type="button" onClick={() => { localStorage.clear(); navigate("/login"); }}>Sair</button>
          </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [usuario, setUsuario] = useState(null);
  const ativo = (caminho) => location.pathname === caminho ? "link-ativo" : "";
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/api/usuarios/perfil", {
      headers: { Authorization: "Bearer " + token },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.erro) setUsuario(data);
      });
  }, []);

  return (
    <header className="header">
      <div
        className="header-logo"
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        <img src={imgIconHeader} alt="logo_faz_teu_nome" />
        <span>Faz Teu Nome</span>
      </div>

      <nav className="header-nav-links">
        <span className={`header-nav-links-clickable-inicio ${ativo("/dashboard")}`} onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>Início</span>
        <span className={`header-nav-links-clickable-perfil ${ativo("/profile")}`} onClick={() => navigate("/profile") } style={{ cursor: "pointer" }}>Meu Perfil</span>
        <span className={`header-nav-links-clickable-comunidade ${ativo("/comunidade")}`} onClick={() => navigate("/comunidade")} style={{ cursor: "pointer" }}>Comunidade</span>
        <span className={`header-nav-links-clickable-ranking ${ativo("/ranking")}`} onClick={() => navigate("/ranking")} style={{ cursor: "pointer" }}>Ranking</span>
      </nav>

      <div className="header-user">
        👤
        <span className="header-user-name" onClick={() => usuario ? navigate("/profile") : navigate("/") } style={{ marginLeft: "8px", cursor:"pointer" }}>
          {usuario ? usuario.nome_completo : "Carregando..."}
        </span>

        <span
          className="header-user-leave"
          style={{ marginLeft: "12px", cursor: "pointer" }}
          title="Sair"
          onClick={() => setModalAberto(true)}
        >
          ⬅
        </span>
        {modalAberto && (
          <LeaveDialog onClose={() => setModalAberto(false)} navigate={navigate}>
            <h2>Você está saindo da sua conta</h2>
            <p>Tem certeza que deseja sair, {usuario?.nome_completo || "estudante" }?</p>
          </LeaveDialog>
        )}
      </div>
    </header>
  )
}