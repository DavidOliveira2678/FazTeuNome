import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [usuario, setUsuario] = useState(null);
  const ativo = (caminho) => location.pathname === caminho ? "link-ativo" : "";

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
    <>
    <header className="header">
      <div
        className="header-logo"
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        🚀 <span>Faz Teu Nome</span>
      </div>

      <nav className="nav-links">
        <span className={`nav-links-clickable-inicio ${ativo("/dashboard")}`} onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>Início</span>
        <span className={`nav-links-clickable-perfil ${ativo("/profile")}`} onClick={() => navigate("/profile") } style={{ cursor: "pointer" }}>Meu Perfil</span>
        <span className={`nav-links-clickable-comunidade ${ativo("/comunidade")}`} onClick={() => navigate("/comunidade")} style={{ cursor: "pointer" }}>Comunidade</span>
        <span className={`nav-links-clickable-ranking ${ativo("/ranking")}`} onClick={() => navigate("/ranking")} style={{ cursor: "pointer" }}>Ranking</span>
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
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          ⬅
        </span>
      </div>
    </header>
    </>
  );
}