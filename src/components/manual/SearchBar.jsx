import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, BookOpen, Calculator, Users, Settings } from 'lucide-react';

const SearchBar = ({ onSearch, searchResults, isSearching, onClose, onSearchOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const searchInputRef = useRef(null);

  const filters = [
    { id: 'all', label: 'Todo', icon: BookOpen },
    { id: 'nomina', label: 'Nómina', icon: Calculator },
    { id: 'contabilidad', label: 'Contabilidad', icon: BookOpen },
    { id: 'rrhh', label: 'RRHH', icon: Users },
    { id: 'tecnica', label: 'Técnica', icon: Settings }
  ];

  useEffect(() => {
    if (searchTerm.length > 2) {
      setShowResults(true);
      onSearch(searchTerm, activeFilter);
    } else {
      setShowResults(false);
    }
  }, [searchTerm, activeFilter, onSearch]);

  useEffect(() => {
    if (onSearchOpen) {
      onSearchOpen(isSearchOpen);
    }
  }, [isSearchOpen, onSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.length > 2) {
      onSearch(searchTerm, activeFilter);
    }
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
    setShowResults(false);
    if (onClose) onClose();
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
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

  // Si el buscador no está abierto, mostrar solo el botón de búsqueda
  if (!isSearchOpen) {
    return (
      <div className="search-container">
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="search-toggle-btn"
        >
          <Search size={20} />
          <span>Buscar en el manual...</span>
        </button>
      </div>
    );
  }

  return (
    <div className="search-container search-open" ref={searchInputRef}>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar en el manual..."
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
          <button
            type="button"
            onClick={handleCloseSearch}
            className="close-search-btn"
            title="Cerrar buscador"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="search-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              <filter.icon size={14} />
              {filter.label}
            </button>
          ))}
        </div>
      </form>

      <AnimatePresence>
        {showResults && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="search-results-header">
              <h4>Resultados de búsqueda</h4>
              {isSearching && <div className="search-spinner"></div>}
            </div>
            
            {searchResults.length > 0 ? (
              <div className="search-results-list">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className="search-result-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <div className="result-header">
                      <div className="result-module">
                        {getModuleIcon(result.module)}
                        <span className="module-name">{result.moduleName}</span>
                      </div>
                      <span className="result-type">{result.type}</span>
                    </div>
                    
                    <h5 className="result-title" 
                        dangerouslySetInnerHTML={{ 
                          __html: highlightText(result.title, searchTerm) 
                        }} />
                    
                    <p className="result-content" 
                       dangerouslySetInnerHTML={{ 
                         __html: highlightText(result.content, searchTerm) 
                       }} />
                    
                    <div className="result-actions">
                      <button 
                        onClick={() => result.onClick()}
                        className="go-to-result-btn"
                      >
                        Ir a sección
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : searchTerm.length > 2 && !isSearching ? (
              <div className="no-results">
                <p>No se encontraron resultados para "{searchTerm}"</p>
                <p className="search-tips">
                  Intenta con términos más específicos o revisa la ortografía
                </p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
