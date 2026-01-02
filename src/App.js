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

<<<<<<< HEAD
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
import Editar from "./pages/Editar/Editar";
=======
// IMPORT DAS PÁGINAS DE SKILLS
import SoftSkills from "./pages1/SoftSkills";
import HardSkills from "./pages1/HardSkills";
import Projetodevida from "./pages1/Projetodevida";
import PaginaEmConstrucao from "./pages/FazTeuNome/PaginaEmConstrucao";
import Profile from "./pages1/Profile";
import Comunidade from "./pages1/Comunidade";
import Ranking from "./pages1/Ranking";
import EscolhaTema from "./pages1/EscolhaTema";
import Oportunidades from "./pages1/Oportunidades";


>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7

function App() {
  const usuarioLogado = true;

  return (
    <Router>
      <Routes>
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
<<<<<<< HEAD
        />

        <Route
          path="/vocabulariode-negocios"
          element={usuarioLogado ? <VocabulariodeNegocios /> : <Navigate to="/login" />}
=======
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
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
        />

        <Route
          path="/projetodevida"
          element={usuarioLogado ? <Projetodevida /> : <Navigate to="/login" />}
        />

        <Route
<<<<<<< HEAD
=======
          path="/em-construcao"
          element={usuarioLogado ? <PaginaEmConstrucao /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={usuarioLogado ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
          path="/comunidade"
          element={usuarioLogado ? <Comunidade /> : <Navigate to="/login" />}
        />

        <Route
          path="/ranking"
          element={usuarioLogado ? <Ranking /> : <Navigate to="/login" />}
        />

        <Route
<<<<<<< HEAD
          path="/profile"
          element={usuarioLogado ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/editar-perfil"
          element={usuarioLogado ? <Editar /> : <Navigate to="/login" />}
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
=======
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
          path="/escolhatema"
          element={usuarioLogado ? <EscolhaTema /> : <Navigate to="/login" />}
        />

<<<<<<< HEAD
=======
        
>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
        <Route
          path="/oportunidades"
          element={usuarioLogado ? <Oportunidades /> : <Navigate to="/login" />}
        />

<<<<<<< HEAD
        {/* Página em construção */}
        <Route
          path="/PaginaEmConstrucao"
          element={usuarioLogado ? <PaginaEmConstrucao /> : <Navigate to="/login" />}
        />

        {/* Fallback */}
=======


>>>>>>> f36b5ed420d234882cb438c3895c52e99342abe7
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
