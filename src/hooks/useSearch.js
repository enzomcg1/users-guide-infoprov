import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';

// Índice de búsqueda completo y actualizado
const searchData = [
  // Nómina
  {
    id: 'nomina-introduccion',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Introducción al Módulo de Nómina',
    content: 'El módulo de Nómina de Avanza ERP permite gestionar de forma integral todos los procesos relacionados con la administración de salarios, beneficios, deducciones y aportes de los empleados de la organización. Este módulo asegura el cumplimiento legal, facilita el control interno y se integra de manera automática con la Contabilidad General (General Ledger).',
    path: '/nomina',
    sectionId: 'introduccion',
    tags: ['salarios', 'empleados', 'beneficios', 'deducciones', 'aportes', 'legal', 'control', 'contabilidad']
  },
  {
    id: 'nomina-configuracion-inicial',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Configuración Inicial de Nómina',
    content: 'La configuración inicial del módulo de nómina es fundamental para el correcto funcionamiento del sistema. Incluye parámetros generales como períodos de pago, tipos de contrato, convenios colectivos, deducciones y aportes patronales. Cada empleado debe estar registrado con datos personales, información laboral, seguridad social, cargas familiares y cuentas bancarias.',
    path: '/nomina',
    sectionId: 'configuracion-inicial',
    tags: ['configuración', 'parámetros', 'períodos', 'contratos', 'convenios', 'empleados', 'datos', 'laboral']
  },
  {
    id: 'nomina-procesos-calculo',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Procesos de Cálculo de Nómina',
    content: 'El proceso de generación de nómina es completamente automatizado y sigue un flujo estandarizado. Incluye selección del período, inclusión automática de empleados activos, aplicación de conceptos fijos y variables, cálculo automático de aportes y deducciones, generación de pre-nómina para validación, y confirmación final con bloqueo de valores.',
    path: '/nomina',
    sectionId: 'procesos-calculo',
    tags: ['proceso', 'automatizado', 'flujo', 'período', 'empleados', 'conceptos', 'cálculo', 'validación']
  },
  {
    id: 'nomina-reportes-consultas',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Reportes y Consultas',
    content: 'El módulo genera una amplia variedad de reportes incluyendo recibos de sueldo individuales, resumen general de nómina por período, reportes de aportes patronales y retenciones legales, historial de pagos de cada empleado, y costos laborales por centro de costo. Las consultas permiten revisar estado de cuenta del empleado, nóminas procesadas por período, y deducciones y beneficios aplicados.',
    path: '/nomina',
    sectionId: 'reportes-consultas',
    tags: ['reportes', 'recibos', 'sueldo', 'aportes', 'retenciones', 'historial', 'costos', 'consultas']
  },
  {
    id: 'nomina-integracion',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Integración con Contabilidad',
    content: 'Cada proceso de nómina genera automáticamente un sub-diario contable. Los conceptos de nómina se asocian a cuentas contables específicas como sueldos y salarios, aportes patronales, retenciones legales, y pagos de salarios. Totalmente integrado con el módulo General Ledger.',
    path: '/nomina',
    sectionId: 'integracion',
    tags: ['integración', 'contabilidad', 'sub-diario', 'cuentas', 'conceptos', 'general ledger']
  },
  {
    id: 'nomina-funcionalidades-avanzadas',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Funcionalidades Avanzadas',
    content: 'Incluye gestión integral de ausencias y permisos, cálculo automático de vacaciones con acumulación automática y liquidación, manejo de anticipos de sueldo, liquidaciones finales por despido o renuncia, control de retroactivos y ajustes salariales.',
    path: '/nomina',
    sectionId: 'funcionalidades-avanzadas',
    tags: ['ausencias', 'permisos', 'vacaciones', 'anticipos', 'liquidaciones', 'retroactivos', 'ajustes']
  },
  {
    id: 'nomina-seguridad-control',
    module: 'nomina',
    moduleName: 'Módulo de Nómina',
    type: 'Sección',
    title: 'Seguridad y Control',
    content: 'Los cálculos de nómina solo pueden ser modificados antes de la confirmación. Una vez confirmada, los valores quedan bloqueados. Se mantiene una traza de auditoría de todos los cambios con registro de usuarios y control de acceso por roles.',
    path: '/nomina',
    sectionId: 'seguridad-control',
    tags: ['seguridad', 'control', 'confirmación', 'bloqueo', 'auditoría', 'usuarios', 'roles']
  },

  // Contabilidad
  {
    id: 'contabilidad-proceso-contabilizacion',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Proceso de Contabilización de Operaciones',
    content: 'Avanza ERP cuenta con un Motor de Generación de Sub-diario de Asientos Contables que genera automáticamente los sub-diarios de asientos de las operaciones de los distintos módulos. Cada transacción le corresponde un sub-diario contable, aunque algunas operaciones pueden generar más de un registro sub-diario.',
    path: '/contabilidad',
    sectionId: 'proceso-contabilizacion',
    tags: ['contabilización', 'motor', 'sub-diario', 'asientos', 'transacciones', 'registros']
  },
  {
    id: 'contabilidad-creacion-cuentas',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Creación de Cuentas Contables',
    content: 'Avanza ERP dispone de un asistente para la creación de cuentas contables utilizando una plantilla que define los segmentos del número de cuenta. Permite crear cuentas como hermana de una cuenta existente o como hija de una cuenta, con numeración automática y validaciones.',
    path: '/contabilidad',
    sectionId: 'creacion-cuentas',
    tags: ['cuentas', 'contables', 'asistente', 'plantilla', 'segmentos', 'numeración', 'validaciones']
  },
  {
    id: 'contabilidad-periodos-contables',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Administración de Períodos Contables',
    content: 'Permite determinar el marco de tiempo para la gestión contable organizándolo en ejercicios y periodos contables. El ciclo de vida es NUNCA ABIERTO → ABIERTO → CERRADO. Los registros contables solo pueden ser ingresados, modificados o anulados en periodos abiertos.',
    path: '/contabilidad',
    sectionId: 'periodos-contables',
    tags: ['períodos', 'contables', 'ejercicios', 'ciclo', 'abierto', 'cerrado', 'registros']
  },
  {
    id: 'contabilidad-plantillas-asientos',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Plantillas de Asientos Contables',
    content: 'Las plantillas definen la estructura contable para diferentes tipos de operaciones organizadas por grupos funcionales como ANTICIPOS-CLIENTES, COBRANZAS, COMPRAS, COSTOS, CREDITOS-BANCO, DEPOSITOS, DEVOLUCIONES, PAGOS, VENTAS y otros.',
    path: '/contabilidad',
    sectionId: 'plantillas-asientos',
    tags: ['plantillas', 'asientos', 'estructura', 'operaciones', 'grupos', 'funcionales']
  },
  {
    id: 'contabilidad-cuentas-pagar',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Cuentas a Pagar',
    content: 'Genera automáticamente asientos contables para facturas, notas de crédito y anulaciones de transacciones de proveedores. Las condiciones incluyen estado CONFIRMADO, tipo de transacción específico, y fecha de anulación nula para transacciones válidas.',
    path: '/contabilidad',
    sectionId: 'cuentas-pagar',
    tags: ['cuentas', 'pagar', 'facturas', 'notas', 'crédito', 'proveedores', 'transacciones']
  },
  {
    id: 'contabilidad-cuentas-cobrar',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Cuentas por Cobrar',
    content: 'Sistema de asientos automáticos para facturas, notas de crédito, anulaciones, costo de ventas mayoristas, cobranzas contado, cobranzas crédito, cobranzas anticipo y anulación de cobranzas con validaciones específicas.',
    path: '/contabilidad',
    sectionId: 'cuentas-cobrar',
    tags: ['cuentas', 'cobrar', 'facturas', 'ventas', 'cobranzas', 'anticipo', 'validaciones']
  },
  {
    id: 'contabilidad-pagos',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Sistema de Pagos',
    content: 'Gestiona pagos con cheques, cheques diferidos, pagos efectivo y cuenta contable, anticipos efectivo, anticipos cheque, y órdenes de pago con diferentes métodos de pago y estados de confirmación.',
    path: '/contabilidad',
    sectionId: 'pagos',
    tags: ['pagos', 'cheques', 'efectivo', 'anticipos', 'órdenes', 'métodos', 'confirmación']
  },
  {
    id: 'contabilidad-bancos',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Operaciones Bancarias',
    content: 'Controla depósitos realizados directamente en el banco y movimientos de débito, crédito y transferencias entre cuentas bancarias de la organización con confirmación automática.',
    path: '/contabilidad',
    sectionId: 'bancos',
    tags: ['bancos', 'depósitos', 'débito', 'crédito', 'transferencias', 'cuentas', 'confirmación']
  },
  {
    id: 'contabilidad-pos',
    module: 'contabilidad',
    moduleName: 'Módulo de Contabilidad',
    type: 'Sección',
    title: 'Sistema POS',
    content: 'Genera asientos automáticos para transacciones de venta POS y costos POS, con importes provenientes de la distribución de facturas y formas de pago correspondientes.',
    path: '/contabilidad',
    sectionId: 'pos',
    tags: ['pos', 'transacciones', 'venta', 'costos', 'facturas', 'formas', 'pago']
  },

  // RRHH
  {
    id: 'rrhh-asignacion-valores',
    module: 'rrhh',
    moduleName: 'Módulo de RRHH',
    type: 'Sección',
    title: 'Asignación de Valores de Empleados',
    content: 'Forma parte del sistema NÓMINAS de Avanza ERP y permite gestionar de manera eficiente los valores salariales y compensaciones de los empleados. Incluye gestión individual, asignación masiva, control de estados, historial de cambios y validaciones automáticas.',
    path: '/rrhh',
    sectionId: 'asignacion-valores',
    tags: ['asignación', 'valores', 'empleados', 'salariales', 'compensaciones', 'masiva', 'estados']
  },
  {
    id: 'rrhh-valores-empleado',
    module: 'rrhh',
    moduleName: 'Módulo de RRHH',
    type: 'Sección',
    title: 'Valores por Empleado',
    content: 'La pantalla principal muestra información detallada incluyendo sucursal, departamento, sección, tipo valor, empleado, nombre completo, fechas de vigencia, documento, estado activo, salario base y estado de la asignación.',
    path: '/rrhh',
    sectionId: 'valores-empleado',
    tags: ['valores', 'empleado', 'sucursal', 'departamento', 'sección', 'vigencia', 'salario']
  },
  {
    id: 'rrhh-asignacion-masiva',
    module: 'rrhh',
    moduleName: 'Módulo de RRHH',
    type: 'Sección',
    title: 'Asignación Masiva de Valores de Empleado',
    content: 'Permite agregar o modificar registros de manera masiva actualizando múltiples empleados simultáneamente. Incluye campos como sucursal, departamento, sección, valor actual, tipo valor, valor a aplicar y fecha de vigencia.',
    path: '/rrhh',
    sectionId: 'asignacion-masiva',
    tags: ['asignación', 'masiva', 'empleados', 'sucursal', 'departamento', 'valores', 'vigencia']
  },
  {
    id: 'rrhh-filtros-sistema',
    module: 'rrhh',
    moduleName: 'Módulo de RRHH',
    type: 'Sección',
    title: 'Filtros del Sistema y su Propósito',
    content: 'Incluye filtros específicos para identificar empleados: filtros de ubicación (sucursal, departamento, sección), filtros de valor (valor actual, tipo valor, valor a aplicar) y filtros de tiempo (aplicar desde).',
    path: '/rrhh',
    sectionId: 'filtros-sistema',
    tags: ['filtros', 'sistema', 'ubicación', 'valor', 'tiempo', 'empleados', 'identificación']
  },
  {
    id: 'rrhh-proceso-asignacion',
    module: 'rrhh',
    moduleName: 'Módulo de RRHH',
    type: 'Sección',
    title: 'Proceso de Asignación de Valores',
    content: 'Sigue un flujo estructurado de 8 pasos desde acceso al sistema hasta verificación de resultados. Incluye consideraciones importantes como validación de filtros, consistencia de datos, fecha de vigencia, auditoría y comunicación.',
    path: '/rrhh',
    sectionId: 'proceso-asignacion',
    tags: ['proceso', 'asignación', 'flujo', 'pasos', 'validación', 'consistencia', 'auditoría']
  }
];

// Configuración de Fuse.js para búsqueda optimizada
const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.45 },
    { name: 'content', weight: 0.35 },
    { name: 'tags', weight: 0.12 },
    { name: 'moduleName', weight: 0.08 }
  ],
  threshold: 0.6, // más tolerante a errores tipográficos y prefijos
  distance: 200,
  ignoreLocation: true,
  findAllMatches: true,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 1,
  shouldSort: true,
  useExtendedSearch: true
};

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  // Crear instancia de Fuse.js
  const fuse = useMemo(() => new Fuse(searchData, fuseOptions), []);

  // Normalización (acentos, mayúsculas) para fallback sencillo
  const normalizeText = useCallback((text) => {
    if (!text) return '';
    return String(text)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }, []);

  // Función de búsqueda principal
  const search = useCallback(async (term, filter = 'all') => {
    try {
      if (!term || typeof term !== 'string' || term.trim().length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      const trimmedTerm = term.trim();

      // Filtrar por módulo si se especifica
      let dataToSearch = searchData;
      if (filter !== 'all') {
        dataToSearch = searchData.filter(item => item.module === filter);
      }

      // Búsqueda simple y directa - sin Fuse por ahora para debuggear
      console.log('🔍 DEBUG: Término buscado:', trimmedTerm);
      console.log('🔍 DEBUG: Filtro aplicado:', filter);
      console.log('🔍 DEBUG: Datos disponibles:', dataToSearch.length);
      
      const normTerm = normalizeText(trimmedTerm);
      const simpleResults = dataToSearch.filter((item) => {
        const searchableText = [
          item.title,
          item.content,
          item.moduleName,
          ...(item.tags || [])
        ].join(' ').toLowerCase();
        
        const matches = searchableText.includes(trimmedTerm.toLowerCase()) || 
                       normalizeText(searchableText).includes(normTerm);
        
        if (matches) {
          console.log('✅ Coincidencia encontrada:', item.title);
        }
        
        return matches;
      });

      console.log('🔍 DEBUG: Resultados encontrados:', simpleResults.length);
      
      const results = simpleResults.map((item) => ({
        item,
        score: 0.1, // score bajo para ordenar primero
        matches: []
      })).slice(0, 20);

      // Procesar resultados
      const processedResults = results
        .map(result => ({
          ...result.item,
          score: result.score,
          matches: result.matches
        }))
        .slice(0, 15)
        .map(item => ({
          ...item,
          onClick: () => {
            try {
              navigate(item.path);
              if (item.sectionId) {
                // Scroll to section after navigation
                setTimeout(() => {
                  try {
                    const element = document.getElementById(item.sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } catch (scrollError) {
                    console.warn('Error scrolling to section:', scrollError);
                  }
                }, 300);
              }
            } catch (navError) {
              console.error('Navigation error:', navError);
              // Fallback: usar window.location
              window.location.href = item.path;
            }
          }
        }));

             console.log('🔍 DEBUG: Estableciendo resultados en estado:', processedResults.length);
       setSearchResults(processedResults);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [navigate, normalizeText]);

  // Función para limpiar búsqueda
  const clearSearch = useCallback(() => {
    setSearchResults([]);
    setSearchTerm('');
  }, []);

  // Función para actualizar término de búsqueda
  const updateSearchTerm = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Función para actualizar filtro
  const updateFilter = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  // Búsqueda automática cuando cambia el término o filtro
  const performSearch = useCallback(() => {
    if (searchTerm.trim().length >= 2) {
      search(searchTerm, activeFilter);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, activeFilter, search]);

  return {
    search,
    searchResults,
    isSearching,
    searchTerm,
    activeFilter,
    clearSearch,
    updateSearchTerm,
    updateFilter,
    performSearch
  };
};
