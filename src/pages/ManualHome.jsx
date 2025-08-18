import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Users, ArrowRight } from 'lucide-react';

const ManualHome = () => {
  const modules = [
    {
      id: 'nomina',
      title: 'Módulo de Nómina',
      description: 'Gestión completa de empleados, asistencia, pagos de salario y reportes de nómina.',
      icon: Calculator,
      path: '/nomina',
      color: '#3b82f6'
    },
    {
      id: 'contabilidad',
      title: 'Módulo de Contabilidad',
      description: 'Sistema contable completo con plan de cuentas, asientos contables y reportes financieros.',
      icon: BookOpen,
      path: '/contabilidad',
      color: '#10b981'
    },
    {
      id: 'rrhh',
      title: 'Módulo de RRHH',
      description: 'Gestión de recursos humanos, asignación de valores de empleados y administración de personal.',
      icon: Users,
      path: '/rrhh',
      color: '#8b5cf6'
    },

  ];

  return (
    <div className="manual-page">
      <div className="manual-content">
        <div className="container-custom section-padding">
          {/* ERP Header */}
          <motion.div 
            className="erp-module-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="erp-logo-container">
              <img 
                src="/LOGO/avanza-logo.png" 
                alt="Avanza ERP Logo" 
                className="erp-logo"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Manual de Usuario
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guía completa para el uso del sistema ERP Avanza. Encuentra información detallada sobre todos los módulos, 
              funciones y procedimientos del sistema.
            </p>
          </motion.div>

          {/* Modules Section */}
          <motion.div 
            className="modules-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Módulos Disponibles</h2>
            <div className="modules-grid">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  className="module-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="module-icon" style={{ backgroundColor: module.color }}>
                    <module.icon size={32} />
                  </div>
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                  <Link to={module.path} className="module-link">
                    <span>Acceder al módulo</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ManualHome;
