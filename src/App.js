import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Dashboard from "./pages/Dashboard/Dashboard";
import RecuperarSenha from "./pages/Recuperarsenha/Recuperarsenha";
import Autoconhecimento from "./pages/Autoconhecimento/Autoconhecimento";
import VocabulariodeNegocios from "./pages/VocabulariodeNegocios/VocabulariodeNegocios";

function App() {
  const usuarioLogado = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />

        <Route
          path="/dashboard"
          element={
            usuarioLogado ? (
              <Dashboard nome="Faz Teu Nome" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/autoconhecimento"
          element={
            usuarioLogado ? (
              <Autoconhecimento />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/vocabulariode-negocios"
          element={
            usuarioLogado ? (
              <VocabulariodeNegocios />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
