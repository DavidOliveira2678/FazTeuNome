import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Editar.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome_completo: "",
    email: "",
    escola: "",
    telefone: "",
    bio: "",
  });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  // Carregar dados atuais do usuário
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

  // Atualizar valores dos inputs
  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // Enviar alterações para o backend
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/usuarios/editar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(usuario),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          setErro(data.erro);
        } else {
          setSucesso("Perfil atualizado com sucesso!");
          setTimeout(() => navigate("/profile"), 1500);
        }
      })
      .catch(() => setErro("Erro ao atualizar perfil"));
  };

  return (
    <div className="page-container">
      <div className="top-bar">
        <span>Editar e compartilhar</span>
      </div>

      <main className="main-content">
        <div className="content-wrapper">
          <h1>Editar Perfil</h1>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          {sucesso && <p style={{ color: "green" }}>{sucesso}</p>}

          <form onSubmit={handleSubmit} className="editar-form">
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome_completo"
              value={usuario.nome_completo}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
            />

            <label>Escola</label>
            <input
              type="text"
              name="escola"
              value={usuario.escola}
              onChange={handleChange}
            />

            <label>Telefone</label>
            <input
              type="text"
              name="telefone"
              value={usuario.telefone}
              onChange={handleChange}
            />

            <label>Sobre Mim</label>
            <textarea
              name="bio"
              value={usuario.bio}
              onChange={handleChange}
              maxLength={300}
            />

            <button type="submit" className="btn-save">
              Salvar Alterações
            </button>
            <button
              type="button"
              className="btn-cancelar"
              onClick={() => navigate("/profile")}
            >
              Cancelar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;