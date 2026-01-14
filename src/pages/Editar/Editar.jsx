import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Editar.css";
import Banner from "../../components/Banner/Banner";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    setLoading(true);
    fetch("http://localhost:5000/api/usuarios/perfil", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Não autorizado");
        return res.json();
      })
      .then((data) => {
        setUsuario({
          nome_completo: data.nome_completo || "",
          email: data.email || "",
          escola: data.escola || "",
          telefone: data.telefone || "",
          bio: data.bio || "",
        });
      })
      .catch(() => {
        setErro("Erro ao carregar perfil");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!usuario.nome_completo || !usuario.escola) {
      setErro("Preencha os campos obrigatórios.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setErro("Token não encontrado. Faça login novamente.");
      navigate("/login");
      return;
    }

    setLoading(true);
    fetch("http://localhost:5000/api/usuarios/editar-perfil", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(usuario),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro na atualização");
        return res.json();
      })
      .then((data) => {
        if (data.erro) {
          setErro(data.erro);
        } else {
          setSucesso("Perfil atualizado com sucesso!");
          setTimeout(() => navigate("/profile"), 1500);
        }
      })
      .catch(() => setErro("Erro ao atualizar perfil"))
      .finally(() => setLoading(false));
  };

  return (
    <Banner
            variant="banner-editar"
            align="center"
            direction="center"
          >
      <div className="edit-profile-page">
        <div className="edit-profile-top-bar">
          <span>Editar e compartilhar</span>
        </div>

        <main className="edit-profile-main">
          <div className="edit-profile-card">
            <h1>Editar Perfil</h1>

            {loading && <p>Carregando...</p>}
            {erro && <div className="edit-profile-erro">{erro}</div>}
            {sucesso && (
              <div className="edit-profile-sucesso">{sucesso}</div>
            )}

            <form onSubmit={handleSubmit} className="edit-profile-form">
              <label>Nome Completo *</label>
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
                disabled
              />

              <label>Escola *</label>
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
                maxLength={255}
              />

              <button type="submit" className="btn-save" disabled={loading}>
                {loading ? "Salvando..." : "Salvar Alterações"}
              </button>

              <button
                type="button"
                className="btn-cancelar"
                onClick={() => navigate("/profile")}
                disabled={loading}
              >
                Cancelar
              </button>
            </form>
          </div>
        </main>
      </div>
    </Banner>
  );
};

export default EditProfile;
