import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Database, Shield, Zap, Wrench, Rocket, Code, Server } from 'lucide-react';

const TechSidebar = () => {
  const sections = [
    {
      id: 'arquitectura',
      title: 'Arquitectura del Sistema',
      icon: Server,
      description: 'Componentes principales y flujo de datos'
    },
    {
      id: 'especificaciones',
      title: 'Especificaciones Técnicas',
      icon: Settings,
      description: 'Requisitos del sistema y compatibilidad'
    },
    {
      id: 'base-datos',
      title: 'Estructura de Base de Datos',
      icon: Database,
      description: 'Diseño de tablas y relaciones'
    },
    {
      id: 'seguridad',
      title: 'Seguridad y Permisos',
      icon: Shield,
      description: 'Niveles de acceso y medidas de seguridad'
    },
    {
      id: 'integracion',
      title: 'Integración y APIs',
      icon: Code,
      description: 'APIs disponibles y sistemas compatibles'
    },
    {
      id: 'rendimiento',
      title: 'Rendimiento y Optimización',
      icon: Zap,
      description: 'Métricas y recomendaciones de optimización'
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento y Soporte',
      icon: Wrench,
      description: 'Programa de mantenimiento y soporte técnico'
    },
    {
      id: 'implementacion',
      title: 'Implementación y Despliegue',
      icon: Rocket,
      description: 'Proceso de implementación y consideraciones'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="manual-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">
          <Settings size={20} />
          Documentación Técnica
        </h3>
        <p className="sidebar-subtitle">Navega por las secciones técnicas</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-sections">
          {sections.map((section, index) => (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(section.id)}
                className="sidebar-section-link"
                title={section.description}
              >
                <div className="section-icon">
                  <section.icon size={18} />
                </div>
                <div className="section-content">
                  <span className="section-title">{section.title}</span>
                  <span className="section-description">{section.description}</span>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="tech-info">
          <h4>Información Técnica</h4>
          <p>ERP Avanza v2.0</p>
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </div>
    </div>
  );
};

export default TechSidebar;



