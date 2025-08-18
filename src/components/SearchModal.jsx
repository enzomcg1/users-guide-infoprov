import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calculator, BookOpen, Users, Filter } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';

const SearchModal = ({ isOpen, onClose }) => {
  const {
    searchResults,
    isSearching,
    searchTerm,
    activeFilter,
    clearSearch,
    updateSearchTerm,
    updateFilter,
    search
  } = useSearch();

  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Filtros disponibles
  const filters = [
    { key: 'all', label: 'Todo', icon: Filter, color: '#6b7280' },
    { key: 'nomina', label: 'Nómina', icon: Calculator, color: '#a4c442' },
    { key: 'contabilidad', label: 'Contabilidad', icon: BookOpen, color: '#3b82f6' },
    { key: 'rrhh', label: 'RRHH', icon: Users, color: '#8b5cf6' }
  ];

  // Efecto para sincronizar el término de búsqueda local con el hook
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  // Efecto para realizar búsqueda automática
  useEffect(() => {
    if (localSearchTerm.trim().length >= 2) {
      const timeoutId = setTimeout(() => {
        updateSearchTerm(localSearchTerm);
        search(localSearchTerm, activeFilter);
        setShowResults(true);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setShowResults(false);
      clearSearch();
    }
  }, [localSearchTerm, updateSearchTerm, search, activeFilter, clearSearch]);

  // Función para manejar cambios en el término de búsqueda
  const handleSearchChange = useCallback((e) => {
    setLocalSearchTerm(e.target.value);
  }, []);

  // Función para manejar cambios en el filtro
  const handleFilterChange = useCallback((filter) => {
    updateFilter(filter);
    if (localSearchTerm.trim().length >= 2) {
      search(localSearchTerm, filter);
    }
  }, [updateFilter, localSearchTerm, search]);

  // Función para limpiar búsqueda
  const handleClear = useCallback(() => {
    setLocalSearchTerm('');
    clearSearch();
    setShowResults(false);
  }, [clearSearch]);

  // Función para cerrar modal
  const handleClose = useCallback(() => {
    onClose();
    handleClear();
  }, [onClose, handleClear]);

  // Función para obtener icono del módulo
  const getModuleIcon = useCallback((module) => {
    switch (module) {
      case 'nomina': return <Calculator size={16} />;
      case 'contabilidad': return <BookOpen size={16} />;
      case 'rrhh': return <Users size={16} />;
      default: return <Filter size={16} />;
    }
  }, []);

  // Función para obtener color del módulo
  const getModuleColor = useCallback((module) => {
    switch (module) {
      case 'nomina': return '#a4c442';
      case 'contabilidad': return '#3b82f6';
      case 'rrhh': return '#8b5cf6';
      default: return '#6b7280';
    }
  }, []);

  // Función para formatear el score
  const formatScore = useCallback((score) => {
    if (score === undefined || score === null) return 'N/A';
    if (score === 0) return '100%';
    if (score === 1) return '0%';
    return `${Math.round((1 - score) * 100)}%`;
  }, []);

  // Función para resaltar texto
  const highlightText = useCallback((text, searchTerm) => {
    if (!searchTerm || !text) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="search-modal-overlay"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="search-modal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="search-modal-header">
            <h2>Buscar en el Manual</h2>
            <button onClick={handleClose} className="search-close-btn">
              <X size={24} />
            </button>
          </div>

          {/* Barra de búsqueda */}
          <div className="search-form">
            <div className="search-input-wrapper">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Escribe lo que buscas..."
                value={localSearchTerm}
                onChange={handleSearchChange}
                className="search-input"
                autoComplete="off"
                autoFocus
              />
              {localSearchTerm && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="clear-search-btn"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filtros */}
          <div className="search-filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`search-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                style={{
                  '--filter-color': filter.color
                }}
              >
                <filter.icon size={16} />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Resultados */}
          {/* DEBUG INFO */}
          <div style={{ padding: '10px', background: '#f0f0f0', fontSize: '12px', color: '#666' }}>
            <strong>DEBUG:</strong> showResults: {showResults.toString()}, 
            isSearching: {isSearching.toString()}, 
            searchResults.length: {searchResults.length}, 
            localSearchTerm: "{localSearchTerm}"
          </div>
          
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
                    <div className="search-results-header">
                      <h3>Resultados ({searchResults.length})</h3>
                      <span className="search-results-subtitle">
                        Clic en un resultado para navegar
                      </span>
                    </div>
                    
                    {searchResults.map((result, index) => (
                      <motion.div
                        key={result.id || index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="search-result-item"
                        onClick={result.onClick}
                        style={{
                          borderLeftColor: getModuleColor(result.module)
                        }}
                      >
                        <div className="search-result-header">
                          <div className="search-result-icon" style={{ backgroundColor: `${getModuleColor(result.module)}20` }}>
                            {getModuleIcon(result.module)}
                          </div>
                          <div className="search-result-info">
                            <h4 dangerouslySetInnerHTML={{ 
                              __html: highlightText(result.title, localSearchTerm) 
                            }} />
                            <div className="search-result-meta">
                              <span className="search-result-module">
                                {result.moduleName}
                              </span>
                              <span className="search-result-score">
                                Relevancia: {formatScore(result.score)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p 
                          className="search-result-content"
                          dangerouslySetInnerHTML={{ 
                            __html: highlightText(result.content, localSearchTerm) 
                          }}
                        />
                        {result.tags && result.tags.length > 0 && (
                          <div className="search-result-tags">
                            {result.tags.slice(0, 5).map((tag, tagIndex) => (
                              <span key={tagIndex} className="search-result-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : localSearchTerm && (
                  <div className="search-no-results">
                    <Search size={48} />
                    <h3>No se encontraron resultados</h3>
                    <p>Intenta con otros términos de búsqueda o cambia el filtro</p>
                    <div className="search-suggestions">
                      <p>Sugerencias:</p>
                      <ul>
                        <li>Verifica la ortografía</li>
                        <li>Usa términos más generales</li>
                        <li>Prueba con sinónimos</li>
                        <li>Cambia el filtro de módulo</li>
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;
