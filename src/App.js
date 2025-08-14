import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/manual/Layout';
import ManualHome from './pages/ManualHome';
import Nomina from './pages/Nomina';
import Contabilidad from './pages/Contabilidad';
import RRHH from './pages/RRHH';
import DocumentacionTecnica from './pages/DocumentacionTecnica';
import TerminosUso from './pages/TerminosUso';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ManualHome />} />
            <Route path="nomina" element={<Nomina />} />
            <Route path="contabilidad" element={<Contabilidad />} />
            <Route path="rrhh" element={<RRHH />} />
            <Route path="documentacion-tecnica" element={<DocumentacionTecnica />} />
            <Route path="terminos-uso" element={<TerminosUso />} />
            <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
