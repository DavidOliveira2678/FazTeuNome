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

// NOVAS TELAS
import Projetodevida from "./pages/Projetodevida/Projetodevida";
import Comunidade from "./pages/Comunidade/Comunidade";
import Ranking from "./pages/Ranking/Ranking";
import Profile from "./pages/Profile/Profile";
import HardSkills from "./pages/HardSkills/HardSkills";
import SoftSkills from "./pages/SoftSkills/SoftSkills";
import PortalProfessor from "./pages/PortalProfessor/PortalProfessor";
import EscolhaTema from "./pages/EscolhaTema/EscolhaTema";
import Oportunidades from "./pages/Oportunidades/Oportunidades";
import PaginaEmConstrucao from "./pages/PaginaEmConstrucao/PaginaEmConstrucao";

function App() {
  const usuarioLogado = true;

  return (
    <Router>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />

        {/* Protegidas */}
        <Route
          path="/dashboard"
          element={usuarioLogado ? <Dashboard nome="Faz Teu Nome" /> : <Navigate to="/login" />}
        />

        <Route
          path="/autoconhecimento"
          element={usuarioLogado ? <Autoconhecimento /> : <Navigate to="/login" />}
        />

        <Route
          path="/vocabulariode-negocios"
          element={usuarioLogado ? <VocabulariodeNegocios /> : <Navigate to="/login" />}
        />

        <Route
          path="/projetodevida"
          element={usuarioLogado ? <Projetodevida /> : <Navigate to="/login" />}
        />

        <Route
          path="/comunidade"
          element={usuarioLogado ? <Comunidade /> : <Navigate to="/login" />}
        />

        <Route
          path="/ranking"
          element={usuarioLogado ? <Ranking /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={usuarioLogado ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/hardskills"
          element={usuarioLogado ? <HardSkills /> : <Navigate to="/login" />}
        />

        <Route
          path="/softskills"
          element={usuarioLogado ? <SoftSkills /> : <Navigate to="/login" />}
        />

        <Route
          path="/portal-professor"
          element={usuarioLogado ? <PortalProfessor /> : <Navigate to="/login" />}
        />

        <Route
          path="/escolhatema"
          element={usuarioLogado ? <EscolhaTema /> : <Navigate to="/login" />}
        />

        <Route
          path="/oportunidades"
          element={usuarioLogado ? <Oportunidades /> : <Navigate to="/login" />}
        />

        {/* Página em construção */}
        <Route
          path="/PaginaEmConstrucao"
          element={usuarioLogado ? <PaginaEmConstrucao /> : <Navigate to="/login" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
