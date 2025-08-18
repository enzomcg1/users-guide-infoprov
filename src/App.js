import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/manual/Layout';
import ManualHome from './pages/ManualHome';
import Nomina from './pages/Nomina';
import Contabilidad from './pages/Contabilidad';
import RRHH from './pages/RRHH';
import SearchTest from './components/SearchTest';

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
          </Route>
          <Route path="/test-search" element={<SearchTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
