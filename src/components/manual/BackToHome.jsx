import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const BackToHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Solo mostrar si no estamos en la página principal
  if (location.pathname === '/') {
    return null;
  }

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <motion.div
      className="back-to-home-container"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={handleBackToHome}
        className="back-to-home-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Volver al inicio"
      >
        <Home size={18} />
        <span>Inicio</span>
      </motion.button>
      
      <motion.button
        onClick={() => navigate(-1)}
        className="back-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Volver atrás"
      >
        <ArrowLeft size={18} />
        <span>Atrás</span>
      </motion.button>
    </motion.div>
  );
};

export default BackToHome;
