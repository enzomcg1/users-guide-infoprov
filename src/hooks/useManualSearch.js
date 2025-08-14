import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Índice de búsqueda del manual - optimizado para Vercel
const manualIndex = [
  // Nómina
  {
    id: 'nomina-generalidades',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Generalidades del Sistema',
    content: 'El módulo de Nómina del ERP Avanza es un sistema integral que permite la gestión completa del ciclo de vida del empleado, desde su contratación hasta la liquidación final, incluyendo el cálculo automático de salarios, prestaciones sociales y reportes legales.',
    path: '/nomina',
    sectionId: 'generalidades'
  },
  {
    id: 'nomina-configuracion',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Configuración del Sistema',
    content: 'Parámetros de configuración, configuración general, empresa, período fiscal, moneda, zona horaria, parámetros de nómina, período de pago, días laborables, horas laborables, salario mínimo, factor de prestaciones.',
    path: '/nomina',
    sectionId: 'configuracion'
  },
  {
    id: 'nomina-empleados',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Gestión de Empleados',
    content: 'Proceso de gestión de empleados, alta de empleados, datos básicos, datos fiscales, información laboral, datos bancarios, documentos, campos obligatorios, validaciones del sistema.',
    path: '/nomina',
    sectionId: 'empleados'
  },
  {
    id: 'nomina-contratos',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Contratos y Condiciones Laborales',
    content: 'Tipos de contrato, contrato a término fijo, contrato a término indefinido, contrato por obra o labor, contrato de aprendizaje, contrato ocasional, condiciones especiales, horario nocturno, horas extras.',
    path: '/nomina',
    sectionId: 'contratos'
  },
  {
    id: 'nomina-asistencias',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Control de Asistencias y Horarios',
    content: 'Sistema de control de asistencias, métodos de registro, reloj biométrico, tarjeta proximidad, registro manual, app móvil, web service, tipos de ausencias, incapacidad por enfermedad general.',
    path: '/nomina',
    sectionId: 'asistencias'
  },
  {
    id: 'nomina-salarios',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Estructura Salarial y Prestaciones',
    content: 'Componentes del salario, salario base, salario básico, auxilio de transporte, auxilio de alimentación, bonificaciones, comisiones, prestaciones sociales, prima de servicios, cesantías.',
    path: '/nomina',
    sectionId: 'salarios'
  },
  {
    id: 'nomina-nominas',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Generación y Liquidación de Nóminas',
    content: 'Proceso de liquidación, fases de liquidación, preparación, cálculo, validación, aprobación, generación, distribución, validaciones del sistema, reportes generados.',
    path: '/nomina',
    sectionId: 'nominas'
  },
  {
    id: 'nomina-reportes',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Reportes y Consultas',
    content: 'Sistema de reportes, reportes estándar, reporte de empleados, reporte de asistencias, reporte de salarios, reporte de prestaciones, reporte de impuestos, reportes personalizables.',
    path: '/nomina',
    sectionId: 'reportes'
  },
  {
    id: 'nomina-troubleshooting',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Troubleshooting y Resolución de Problemas',
    content: 'Problemas comunes y soluciones, errores de liquidación, error de cálculo, empleado no encontrado, salario negativo, prestaciones incorrectas, error de impuestos, problemas de rendimiento.',
    path: '/nomina',
    sectionId: 'troubleshooting'
  },
  {
    id: 'nomina-casos-especiales',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Casos Especiales y Excepciones',
    content: 'Manejo de casos especiales, empleados con salarios variables, comisiones, bonificaciones, horas extras, deducciones variables, retroactivos, empleados con múltiples contratos.',
    path: '/nomina',
    sectionId: 'casos-especiales'
  },
  {
    id: 'nomina-integracion',
    module: 'nomina',
    moduleName: 'Nómina',
    type: 'Sección',
    title: 'Integración con Otros Módulos',
    content: 'Sistema de integración, integración con contabilidad, asientos automáticos, distribución de costos, conciliación, reportes consolidados, integración con RRHH, APIs y web services.',
    path: '/nomina',
    sectionId: 'integracion'
  },

  // Contabilidad
  {
    id: 'contabilidad-general',
    module: 'contabilidad',
    moduleName: 'Contabilidad',
    type: 'Módulo',
    title: 'Módulo de Contabilidad',
    content: 'Sistema integral de gestión contable y financiera para empresas, incluyendo plan de cuentas, asientos contables, libros auxiliares, balances y reportes financieros.',
    path: '/contabilidad',
    sectionId: null
  },

  // RRHH
  {
    id: 'rrhh-general',
    module: 'rrhh',
    moduleName: 'RRHH',
    type: 'Módulo',
    title: 'Módulo de Recursos Humanos',
    content: 'Gestión integral del capital humano, incluyendo perfiles de cargo, evaluaciones de desempeño, capacitaciones, asignación de valores y gestión del talento.',
    path: '/rrhh',
    sectionId: null
  },

  // Documentación Técnica
  {
    id: 'tecnica-arquitectura',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Arquitectura del Sistema',
    content: 'Arquitectura modular que permite la integración eficiente entre diferentes módulos del sistema, facilitando la gestión integral de la empresa.',
    path: '/documentacion-tecnica',
    sectionId: 'arquitectura'
  },
  {
    id: 'tecnica-especificaciones',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Especificaciones Técnicas',
    content: 'Requisitos del sistema, requisitos mínimos, sistema operativo, procesador, memoria RAM, almacenamiento, base de datos, requisitos recomendados.',
    path: '/documentacion-tecnica',
    sectionId: 'especificaciones'
  },
  {
    id: 'tecnica-base-datos',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Estructura de Base de Datos',
    content: 'Diseño de base de datos, principios de diseño, normalización, integridad referencial, escalabilidad, seguridad, tablas principales, módulo de nómina, módulo de contabilidad.',
    path: '/documentacion-tecnica',
    sectionId: 'base-datos'
  },
  {
    id: 'tecnica-seguridad',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Seguridad y Permisos',
    content: 'Sistema de seguridad, niveles de acceso, administrador del sistema, gerentes, supervisores, usuarios operativos, medidas de seguridad, autenticación, autorización.',
    path: '/documentacion-tecnica',
    sectionId: 'seguridad'
  },
  {
    id: 'tecnica-integracion',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Integración y APIs',
    content: 'Sistema de integración, APIs disponibles, API REST, web services, conectores, webhooks, formatos de datos, JSON, XML, CSV, PDF, sistemas compatibles.',
    path: '/documentacion-tecnica',
    sectionId: 'integracion'
  },
  {
    id: 'tecnica-rendimiento',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Rendimiento y Optimización',
    content: 'Optimización del sistema, factores de rendimiento, índices de base de datos, cache en memoria, compresión de datos, particionamiento, métricas de rendimiento.',
    path: '/documentacion-tecnica',
    sectionId: 'rendimiento'
  },
  {
    id: 'tecnica-mantenimiento',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Mantenimiento y Soporte',
    content: 'Programa de mantenimiento, mantenimiento preventivo, diario, semanal, mensual, trimestral, anual, soporte técnico, nivel 1, nivel 2, nivel 3.',
    path: '/documentacion-tecnica',
    sectionId: 'mantenimiento'
  },
  {
    id: 'tecnica-implementacion',
    module: 'tecnica',
    moduleName: 'Documentación Técnica',
    type: 'Sección',
    title: 'Implementación y Despliegue',
    content: 'Proceso de implementación, fases de implementación, análisis y planificación, configuración, personalización, migración de datos, pruebas, capacitación.',
    path: '/documentacion-tecnica',
    sectionId: 'implementacion'
  }
];

export const useManualSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Función de búsqueda optimizada para Vercel
  const search = useCallback(async (searchTerm, filter = 'all') => {
    try {
      if (!searchTerm || typeof searchTerm !== 'string' || searchTerm.length < 3) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);

      // Búsqueda síncrona optimizada para Vercel
      const searchLower = searchTerm.toLowerCase().trim();
      
      // Filtrar por módulo si se especifica
      const filteredIndex = filter === 'all' 
        ? manualIndex 
        : manualIndex.filter(item => item.module === filter);

      // Búsqueda optimizada con scoring
      const results = filteredIndex
        .map(item => {
          const titleMatch = item.title.toLowerCase().includes(searchLower);
          const contentMatch = item.content.toLowerCase().includes(searchLower);
          const moduleMatch = item.moduleName.toLowerCase().includes(searchLower);
          const typeMatch = item.type.toLowerCase().includes(searchLower);
          
          // Calcular score de relevancia
          let score = 0;
          if (titleMatch) score += 10;
          if (contentMatch) score += 5;
          if (moduleMatch) score += 3;
          if (typeMatch) score += 2;
          
          return {
            ...item,
            score,
            hasMatch: titleMatch || contentMatch || moduleMatch || typeMatch
          };
        })
        .filter(item => item.hasMatch)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10)
        .map(item => ({
          ...item,
          onClick: () => {
            try {
              navigate(item.path);
              if (item.sectionId) {
                // Scroll to section after navigation with error handling
                setTimeout(() => {
                  try {
                    const element = document.getElementById(item.sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } catch (scrollError) {
                    console.warn('Error scrolling to section:', scrollError);
                  }
                }, 100);
              }
            } catch (navError) {
              console.error('Navigation error:', navError);
              // Fallback: usar window.location
              window.location.href = item.path;
            }
          }
        }));

      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [navigate]);

  const clearSearch = useCallback(() => {
    setSearchResults([]);
  }, []);

  // Memoizar resultados para mejor rendimiento
  const memoizedResults = useMemo(() => searchResults, [searchResults]);

  return {
    search,
    searchResults: memoizedResults,
    isSearching,
    clearSearch
  };
};



