import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// IMPORT DAS PÁGINAS BÁSICAS
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Dashboard from "./pages/Dashboard/Dashboard";
import RecuperarSenha from "./pages/Recuperarsenha/Recuperarsenha";
import Autoconhecimento from "./pages/Autoconhecimento/Autoconhecimento";
import VocabulariodeNegocios from "./pages/VocabulariodeNegocios/VocabulariodeNegocios";


// IMPORT DAS PÁGINAS DE SKILLS E CONTEÚDO
import SoftSkills from "./pages/SoftSkills/SoftSkills";
import HardSkills from "./pages/HardSkills/HardSkills";
import Projetodevida from "./pages/Projetodevida/Projetodevida";
import Profile from "./pages/Profile/Profile";
import Comunidade from "./pages/Comunidade/Comunidade";
import Ranking from "./pages/Ranking/Ranking";
import EscolhaTema from "./pages/EscolhaTema/EscolhaTema";
import Oportunidades from "./pages/Oportunidades/Oportunidades";
import PaginaEmConstrucao from "./pages/PaginaEmConstrucao/PaginaEmConstrucao";

// Se houver uma página de edição ou portal do professor, importe-as aqui:
import EditProfile from "./pages/Editar/Editar"
import PortalProfessor from "./pages/PortalProfessor/PortalProfessor";

import PagScroller from "./components/PagScroller/PagScroller";

function App() {
  const usuarioLogado = true;

  return (
    <Router>
      <PagScroller />
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />

        {/* Rotas Protegidas (Exigem Login) */}
        <Route
          path="/dashboard"
          element={usuarioLogado ? <Dashboard nome="Faz Teu Nome" /> : <Navigate to="/login" />}
        />
        <Route
          path="/portalprofessor"
          element={usuarioLogado ? <PortalProfessor /> : <Navigate to="/login" />}
        />

        <Route
          path="/autoconhecimento"
          element={usuarioLogado ? <Autoconhecimento /> : <Navigate to="/login" />}
        />

        <Route
          path="/vocabulario-negocios"
          element={usuarioLogado ? <VocabulariodeNegocios /> : <Navigate to="/login" />}
        />

        <Route
          path="/softskills"
          element={usuarioLogado ? <SoftSkills /> : <Navigate to="/login" />}
        />

        <Route
          path="/hardskills"
          element={usuarioLogado ? <HardSkills /> : <Navigate to="/login" />}
        />

        <Route
          path="/projetodevida"
          element={usuarioLogado ? <Projetodevida /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={usuarioLogado ? <Profile /> : <Navigate to="/login" />}
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
          path="/escolhatema"
          element={usuarioLogado ? <EscolhaTema /> : <Navigate to="/login" />}
        />

        <Route
          path="/oportunidades"
          element={usuarioLogado ? <Oportunidades /> : <Navigate to="/login" />}
        />

        <Route
          path="/em-construcao"
          element={usuarioLogado ? <PaginaEmConstrucao /> : <Navigate to="/login" />}
        />

        <Route
          path="/editar-perfil"
          element={usuarioLogado ? <EditProfile /> : <Navigate to="/login" />}
        />

        {/* Fallback: Redireciona qualquer rota não encontrada para a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;