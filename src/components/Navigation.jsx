import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navItems = [
    { name: 'Manual Principal', href: '/' },
    { name: 'Nómina', href: '/nomina' },
    { name: 'Contabilidad', href: '/contabilidad' },
    { name: 'RRHH', href: '/rrhh' },
    
  ];



  const scrollToSection = (href) => {
    if (href.startsWith('/')) {
      // Es una ruta de React Router - usar navigate
      navigate(href);
    } else {
      // Es un ancla de la misma página
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`nav-fixed ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}
      >
        <div className="container-custom section-padding">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="header-logo-container"
            >
              <img 
                src="/LOGO/infoprov-logo.png" 
                alt="Infoprov Logo" 
                className="header-logo"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    color: isScrolled ? '#374151' : '#1e293b',
                    fontWeight: '500',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1e293b'}
                  onMouseLeave={(e) => e.target.style.color = isScrolled ? '#374151' : '#1e293b'}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Search Button and CTA */}
            <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'rgba(164, 196, 66, 0.1)',
                  border: '1px solid rgba(164, 196, 66, 0.2)',
                  color: '#a4c442',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(164, 196, 66, 0.15)';
                  e.target.style.borderColor = 'rgba(164, 196, 66, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(164, 196, 66, 0.1)';
                  e.target.style.borderColor = 'rgba(164, 196, 66, 0.2)';
                }}
              >
                <Search size={16} />
                Buscar
              </motion.button>
              

            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: '8px',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              className="mobile-menu-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  marginTop: '16px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}
                className="mobile-menu"
              >
                <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {/* Mobile Search Button */}
                  <motion.button
                    whileHover={{ x: 10 }}
                    onClick={() => {
                      setIsSearchOpen(true);
                      setIsOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 16px',
                      color: '#374151',
                      transition: 'all 0.2s ease',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#1e293b';
                      e.target.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Search size={16} />
                    Buscar en el manual
                  </motion.button>
                  
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection(item.href)}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        color: '#374151',
                        transition: 'all 0.2s ease',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1e293b';
                        e.target.style.backgroundColor = '#f9fafb';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#374151';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <div style={{ padding: '0 16px', paddingTop: '8px' }}>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Navigation; 