import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ExternalLink, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="manual-footer">
      <div className="container-custom section-padding">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logos">
                <img 
                  src="/LOGO/infoprov-logo.png" 
                  alt="Infoprov Logo" 
                  className="footer-logo-img"
                />
                <img 
                  src="/LOGO/avanza-logo.png" 
                  alt="ERP Avanza Logo" 
                  className="footer-logo-img avanza-logo"
                />
              </div>
              <h3>ERP Avanza</h3>
            </div>
            <p className="footer-description">
              Sistema integral de gestión empresarial diseñado para optimizar 
              todos los procesos de su organización.
            </p>
          </div>

          <div className="footer-section">
            <h4>Módulos del Sistema</h4>
            <ul className="footer-links">
              <li><a href="/nomina">Módulo de Nómina</a></li>
              <li><a href="/contabilidad">Módulo de Contabilidad</a></li>
              <li><a href="/rrhh">Módulo de RRHH</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Recursos</h4>
            <ul className="footer-links">
              <li><a href="/">Manual Principal</a></li>
              <li><a href="/documentacion-tecnica">Documentación Técnica</a></li>
              <li><a href="#" className="external-link">
                Videos Tutoriales <ExternalLink size={14} />
              </a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">

              <div className="contact-item">
                <Phone size={16} />
                <span>+595 994 154 178</span>
              </div>
              <div className="contact-item">
                <Instagram size={16} />
                <span>@infoprov_eas</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Asunción, Paraguay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Infoprov. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="/terminos-uso">Términos de Uso</a>
              <a href="/politica-privacidad">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
