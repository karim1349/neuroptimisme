import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SuiviPsychologique from './pages/Services/SuiviPsychologique';
import Psychoeducation from './pages/Services/Psychoeducation';
import GuidanceParentale from './pages/Services/GuidanceParentale';
import HabiliteSociale from './pages/Services/HabiliteSociale';
import Bilan from './pages/Services/Bilan';
import RemediationCognitive from './pages/Services/RemediationCognitive';
import Experiences from './pages/Connaitre/Experiences';
import About from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/suivi_psychologique" element={<SuiviPsychologique />} />
          <Route path="/psychoeducation" element={<Psychoeducation />} />
          <Route path="/guidance_parentale" element={<GuidanceParentale />} />
          <Route path="/habilite_sociale" element={<HabiliteSociale />} />
          <Route path="/bilan" element={<Bilan />} />
          <Route path="/remediation_cognitive" element={<RemediationCognitive />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/a_propos" element={<About />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  </React.StrictMode>
);
