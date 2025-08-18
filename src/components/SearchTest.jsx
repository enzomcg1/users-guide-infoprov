import React, { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

const SearchTest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = 'all';
  const { search, searchResults, isSearching, clearSearch, updateSearchTerm, updateFilter } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm && searchTerm.trim()) {
      updateSearchTerm(searchTerm);
      updateFilter(activeFilter);
      search(searchTerm, activeFilter);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    clearSearch();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Prueba del Buscador</h2>
      
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Escribe para buscar..."
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '10px'
          }}
        />
        
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="radio"
              name="filter"
              value="all"
              checked={activeFilter === 'all'}
              onChange={(e) => setActiveFilter(e.target.value)}
            />
            Todo
          </label>
          <label style={{ marginLeft: '15px' }}>
            <input
              type="radio"
              name="filter"
              value="nomina"
              checked={activeFilter === 'nomina'}
              onChange={(e) => setActiveFilter(e.target.value)}
            />
            Nómina
          </label>
          <label style={{ marginLeft: '15px' }}>
            <input
              type="radio"
              name="filter"
              value="contabilidad"
              checked={activeFilter === 'contabilidad'}
              onChange={(e) => setActiveFilter(e.target.value)}
            />
            Contabilidad
          </label>
          <label style={{ marginLeft: '15px' }}>
            <input
              type="radio"
              name="filter"
              value="rrhh"
              checked={activeFilter === 'rrhh'}
              onChange={(e) => setActiveFilter(e.target.value)}
            />
            RRHH
          </label>
        </div>
        
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#a4c442',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Buscar
        </button>
        
        <button
          type="button"
          onClick={handleClear}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Limpiar
        </button>
      </form>

      {isSearching && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            border: '3px solid #f3f4f6',
            borderTop: '3px solid #a4c442',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 10px'
          }}></div>
          <p>Buscando...</p>
        </div>
      )}

      {searchResults.length > 0 && (
        <div>
          <h3>Resultados ({searchResults.length})</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {searchResults.map((result, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '15px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  borderLeft: '4px solid #a4c442'
                }}
                onClick={result.onClick}
              >
                <div style={{ marginBottom: '8px' }}>
                  <strong>{result.title}</strong>
                  <span style={{
                    marginLeft: '10px',
                    fontSize: '12px',
                    color: '#6b7280',
                    backgroundColor: '#f3f4f6',
                    padding: '2px 8px',
                    borderRadius: '12px'
                  }}>
                    {result.moduleName}
                  </span>
                </div>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '14px' }}>
                  {result.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchTerm && searchResults.length === 0 && !isSearching && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
          <h3>No se encontraron resultados</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SearchTest;
