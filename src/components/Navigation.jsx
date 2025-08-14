import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, BookOpen, Calculator, Users, Settings } from 'lucide-react';
import { useManualSearch } from '../hooks/useManualSearch';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { search, searchResults, isSearching, clearSearch } = useManualSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm && searchTerm.trim()) {
      // Debounce para evitar demasiadas búsquedas
      const timeoutId = setTimeout(() => {
        search(searchTerm, activeFilter);
        setShowResults(true);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    } else {
      setShowResults(false);
      clearSearch();
    }
  }, [searchTerm, activeFilter, search, clearSearch]);

  const navItems = [
    { name: 'Manual Principal', href: '/' },
    { name: 'Nómina', href: '/nomina' },
    { name: 'Contabilidad', href: '/contabilidad' },
    { name: 'RRHH', href: '/rrhh' },
    { name: 'Documentación Técnica', href: '/documentacion-tecnica' },
  ];

  const filters = [
    { key: 'all', label: 'Todo', icon: BookOpen },
    { key: 'nomina', label: 'Nómina', icon: Calculator },
    { key: 'contabilidad', label: 'Contabilidad', icon: BookOpen },
    { key: 'rrhh', label: 'RRHH', icon: Users },
    { key: 'tecnica', label: 'Técnica', icon: Settings },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('/')) {
      // Es una ruta de React Router
      window.location.href = href;
    } else {
      // Es un ancla de la misma página
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm && searchTerm.trim()) {
      try {
        search(searchTerm, activeFilter);
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
        setShowResults(false);
      }
    }
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  const getModuleIcon = (module) => {
    switch (module) {
      case 'nomina': return <Calculator size={16} />;
      case 'contabilidad': return <BookOpen size={16} />;
      case 'rrhh': return <Users size={16} />;
      case 'tecnica': return <Settings size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
    setShowResults(false);
    clearSearch();
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
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="search-modal-overlay"
            onClick={closeSearch}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="search-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="search-modal-header">
                <h2>Buscar en el manual</h2>
                <button onClick={closeSearch} className="search-close-btn">
                  <X size={24} />
                </button>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-wrapper">
                  <Search size={20} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Escribe lo que buscas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    autoComplete="off"
                    autoFocus
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="clear-search-btn"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </form>

              {/* Search Filters */}
              <div className="search-filters">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`search-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  >
                    <filter.icon size={16} />
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Search Results */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="search-results-container"
                  >
                    {isSearching ? (
                      <div className="search-loading">
                        <div className="search-spinner"></div>
                        <p>Buscando...</p>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="search-results">
                        {searchResults.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="search-result-item"
                          >
                            <div className="search-result-header">
                              <div className="search-result-icon">
                                {getModuleIcon(result.module)}
                              </div>
                              <div className="search-result-info">
                                <h4>{result.title}</h4>
                                <span className="search-result-module">{result.module}</span>
                              </div>
                            </div>
                            <p 
                              className="search-result-content"
                              dangerouslySetInnerHTML={{ 
                                __html: highlightText(result.content, searchTerm) 
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    ) : searchTerm && (
                      <div className="search-no-results">
                        <Search size={48} />
                        <h3>No se encontraron resultados</h3>
                        <p>Intenta con otros términos de búsqueda</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 