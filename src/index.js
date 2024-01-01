import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SuiviPsychologique from './pages/Home/SuiviPsychologique';
import Psychoeducation from './pages/Home/Psychoeducation';
import GuidanceParentale from './pages/Home/GuidanceParentale';
import HabiliteSociale from './pages/Home/HabiliteSociale';
import Bilan from './pages/Home/Bilan';
import RemediationCognitive from './pages/Home/RemediationCognitive';

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
        </Routes>
      </HashRouter>
      <Footer />
    </>
  </React.StrictMode>
);
