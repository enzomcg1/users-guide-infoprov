import React from 'react';
import { motion } from 'framer-motion';
import { Star, Palette, Code, TrendingUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Palette, value: 'Diseño', label: 'Web & Mobile' },
    { icon: Code, value: 'Desarrollo', label: 'Frontend & Backend' },
    { icon: TrendingUp, value: 'Herramientas', label: 'de Contenido' },
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <div className="container-custom section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', maxWidth: '1024px', margin: '0 auto' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            <Star style={{ width: '16px', height: '16px' }} />
            Soluciones digitales personalizadas
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Creamos experiencias{' '}
            <span className="gradient-text">digitales</span>{' '}
            que inspiran
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Transformamos ideas en realidades digitales. Diseño, desarrollo y marketing que impulsan tu negocio hacia el éxito.
          </motion.p>



          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="stats-grid"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="stat-item"
              >
                <div className="stat-value">
                  <stat.icon style={{ width: '28px', height: '28px', color: '#1e293b' }} />
                  <span>{stat.value}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-dot"
        />
      </motion.div>
    </section>
  );
};

export default Hero; 