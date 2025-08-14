import React from 'react';
import Section from '../components/manual/Section';
import Table from '../components/manual/Table';

const DocumentacionTecnica = () => {
  return (
    <div className="manual-page">
      <div className="manual-sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Documentación Técnica</h3>
          <p className="sidebar-subtitle">Navega por las secciones</p>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-sections">
            <li><a href="#generalidades" className="sidebar-section-link">Generalidades</a></li>
            <li><a href="#arquitectura" className="sidebar-section-link">Arquitectura del Sistema</a></li>
            <li><a href="#base-datos" className="sidebar-section-link">Base de Datos</a></li>
            <li><a href="#apis" className="sidebar-section-link">APIs y Servicios</a></li>
            <li><a href="#seguridad" className="sidebar-section-link">Seguridad y Autenticación</a></li>
            <li><a href="#despliegue" className="sidebar-section-link">Despliegue y Configuración</a></li>
            <li><a href="#monitoreo" className="sidebar-section-link">Monitoreo y Logs</a></li>
            <li><a href="#troubleshooting" className="sidebar-section-link">Troubleshooting</a></li>
            <li><a href="#casos-especiales" className="sidebar-section-link">Casos Especiales</a></li>
            <li><a href="#integracion" className="sidebar-section-link">Integración</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="manual-content">
        <div className="container-custom section-padding">
          
          {/* ERP Header */}
          <div className="erp-module-header">
            <div className="erp-logo-container">
              <img 
                src="/LOGO/avanza-logo.png" 
                alt="ERP Avanza Logo" 
                className="erp-logo"
              />
            </div>
            <h1 className="module-main-title">Documentación Técnica</h1>
            <p className="module-subtitle">Sistema ERP Avanza - Especificaciones técnicas y arquitectura</p>
          </div>
          
          {/* Generalidades */}
          <Section id="generalidades" title="Generalidades del Sistema">
            <div className="content-block">
              <h3>Descripción General</h3>
              <p>
                El ERP Avanza es un sistema empresarial integral desarrollado con tecnologías modernas,
                diseñado para proporcionar una solución robusta y escalable para la gestión empresarial.
              </p>
              
              <h4>Características Técnicas Principales</h4>
              <ul>
                <li><strong>Arquitectura Modular:</strong> Sistema basado en módulos independientes</li>
                <li><strong>Base de Datos Relacional:</strong> Gestión eficiente de datos empresariales</li>
                <li><strong>Interfaz Web Responsiva:</strong> Acceso multiplataforma y dispositivos</li>
                <li><strong>APIs RESTful:</strong> Integración con sistemas externos</li>
                <li><strong>Seguridad Robusta:</strong> Autenticación y autorización avanzadas</li>
              </ul>

              <h4>Módulos del Sistema</h4>
              <div className="database-schema">
                <ul>
                  <li><strong>Nómina:</strong> Gestión completa de recursos humanos</li>
                  <li><strong>Contabilidad:</strong> Sistema contable integral</li>
                  <li><strong>RRHH:</strong> Gestión de personal y talento</li>
                  <li><strong>Facturación:</strong> Control de ventas y compras</li>
                  <li><strong>Inventarios:</strong> Gestión de stock y almacenes</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Arquitectura del Sistema */}
          <Section id="arquitectura" title="Arquitectura del Sistema">
            <div className="content-block">
              <h3>Arquitectura General</h3>
              <p>
                El ERP Avanza sigue una arquitectura de tres capas que garantiza la separación
                de responsabilidades y la escalabilidad del sistema:
              </p>
              
              <h4>Capa de Presentación</h4>
              <ul>
                <li><strong>Interfaz Web:</strong> Aplicación React con componentes reutilizables</li>
                <li><strong>Responsive Design:</strong> Adaptable a diferentes dispositivos</li>
                <li><strong>Componentes UI:</strong> Biblioteca de componentes personalizados</li>
                <li><strong>Navegación:</strong> Sistema de rutas y navegación intuitiva</li>
              </ul>

              <h4>Capa de Lógica de Negocio</h4>
              <ul>
                <li><strong>Servicios:</strong> Lógica de negocio centralizada</li>
                <li><strong>Validaciones:</strong> Reglas de negocio y validaciones</li>
                <li><strong>Procesos:</strong> Flujos de trabajo automatizados</li>
                <li><strong>Integración:</strong> Comunicación entre módulos</li>
              </ul>

              <h4>Capa de Datos</h4>
              <ul>
                <li><strong>Base de Datos:</strong> Almacenamiento persistente de datos</li>
                <li><strong>Acceso a Datos:</strong> Capa de abstracción de base de datos</li>
                <li><strong>Cache:</strong> Optimización de rendimiento</li>
                <li><strong>Backup:</strong> Estrategias de respaldo y recuperación</li>
              </ul>
            </div>
          </Section>

          {/* Base de Datos */}
          <Section id="base-datos" title="Base de Datos">
            <div className="content-block">
              <h3>Estructura de Base de Datos</h3>
              <p>
                La base de datos del ERP Avanza está diseñada para optimizar el rendimiento
                y garantizar la integridad de los datos empresariales:
              </p>
              
              <h4>Tablas Principales</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Módulo</th>
                    <th>Tabla</th>
                    <th>Propósito</th>
                    <th>Relaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Usuarios</td>
                    <td>users</td>
                    <td>Gestión de usuarios del sistema</td>
                    <td>roles, permissions</td>
                  </tr>
                  <tr>
                    <td>Empresas</td>
                    <td>companies</td>
                    <td>Información de empresas</td>
                    <td>branches, departments</td>
                  </tr>
                  <tr>
                    <td>Empleados</td>
                    <td>employees</td>
                    <td>Datos de empleados</td>
                    <td>positions, salaries</td>
                  </tr>
                  <tr>
                    <td>Contabilidad</td>
                    <td>accounts</td>
                    <td>Plan de cuentas</td>
                    <td>transactions, balances</td>
                  </tr>
                  <tr>
                    <td>Nómina</td>
                    <td>payroll</td>
                    <td>Procesamiento de nómina</td>
                    <td>employees, deductions</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Relaciones de Base de Datos</h4>
              <ul>
                <li><strong>Relaciones Uno a Muchos:</strong> Empresa → Sucursales → Departamentos</li>
                <li><strong>Relaciones Muchos a Muchos:</strong> Empleados ↔ Roles del Sistema</li>
                <li><strong>Relaciones Jerárquicas:</strong> Plan de Cuentas (árbol)</li>
                <li><strong>Relaciones Transaccionales:</strong> Asientos Contables</li>
              </ul>

              <h3>Optimizaciones de Rendimiento</h3>
              <p>
                El sistema implementa varias estrategias para optimizar el rendimiento:
              </p>
              <ul>
                <li><strong>Índices:</strong> Índices en campos de búsqueda frecuente</li>
                <li><strong>Particionamiento:</strong> Particionamiento por fecha en tablas grandes</li>
                <li><strong>Cache:</strong> Cache de consultas frecuentes</li>
                <li><strong>Compresión:</strong> Compresión de datos históricos</li>
              </ul>
            </div>
          </Section>

          {/* APIs y Servicios */}
          <Section id="apis" title="APIs y Servicios">
            <div className="content-block">
              <h3>Arquitectura de APIs</h3>
              <p>
                El ERP Avanza expone funcionalidades a través de APIs RESTful que permiten
                la integración con sistemas externos y aplicaciones móviles:
              </p>
              
              <h4>Endpoints Principales</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Endpoint</th>
                    <th>Método</th>
                    <th>Descripción</th>
                    <th>Autenticación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>/api/auth/login</td>
                    <td>POST</td>
                    <td>Autenticación de usuarios</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>/api/users</td>
                    <td>GET</td>
                    <td>Lista de usuarios</td>
                    <td>JWT</td>
                  </tr>
                  <tr>
                    <td>/api/employees</td>
                    <td>GET</td>
                    <td>Datos de empleados</td>
                    <td>JWT</td>
                  </tr>
                  <tr>
                    <td>/api/accounts</td>
                    <td>GET</td>
                    <td>Plan de cuentas</td>
                    <td>JWT</td>
                  </tr>
                  <tr>
                    <td>/api/payroll</td>
                    <td>POST</td>
                    <td>Procesamiento de nómina</td>
                    <td>JWT</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Formato de Respuesta</h4>
              <ul>
                <li><strong>JSON:</strong> Formato estándar de respuesta</li>
                <li><strong>Paginación:</strong> Soporte para resultados paginados</li>
                <li><strong>Filtros:</strong> Filtrado por múltiples criterios</li>
                <li><strong>Ordenamiento:</strong> Ordenamiento por campos específicos</li>
              </ul>

              <h4>Manejo de Errores</h4>
              <ul>
                <li><strong>Códigos HTTP:</strong> Códigos de estado estándar</li>
                <li><strong>Mensajes de Error:</strong> Descripciones claras de errores</li>
                <li><strong>Logs:</strong> Registro detallado de errores</li>
                <li><strong>Validación:</strong> Validación de datos de entrada</li>
              </ul>
            </div>
          </Section>

          {/* Seguridad y Autenticación */}
          <Section id="seguridad" title="Seguridad y Autenticación">
            <div className="content-block">
              <h3>Sistema de Seguridad</h3>
              <p>
                El ERP Avanza implementa múltiples capas de seguridad para proteger
                la información empresarial y garantizar el acceso autorizado:
              </p>
              
              <h4>Autenticación</h4>
              <ul>
                <li><strong>JWT Tokens:</strong> Autenticación basada en tokens</li>
                <li><strong>Refresh Tokens:</strong> Renovación automática de sesiones</li>
                <li><strong>Multi-Factor:</strong> Soporte para autenticación de dos factores</li>
                <li><strong>Single Sign-On:</strong> Integración con sistemas SSO</li>
              </ul>

              <h4>Autorización</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Nivel</th>
                    <th>Descripción</th>
                    <th>Ejemplo</th>
                    <th>Implementación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Roles</td>
                    <td>Conjunto de permisos predefinidos</td>
                    <td>Administrador, Usuario, Supervisor</td>
                    <td>Tabla roles</td>
                  </tr>
                  <tr>
                    <td>Permisos</td>
                    <td>Acciones específicas permitidas</td>
                    <td>Crear, Leer, Actualizar, Eliminar</td>
                    <td>Tabla permissions</td>
                  </tr>
                  <tr>
                    <td>Recursos</td>
                    <td>Entidades del sistema</td>
                    <td>Empleados, Cuentas, Nómina</td>
                    <td>Tabla resources</td>
                  </tr>
                  <tr>
                    <td>Políticas</td>
                    <td>Reglas de acceso específicas</td>
                    <td>Acceso por departamento</td>
                    <td>Tabla policies</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Protección de Datos</h4>
              <ul>
                <li><strong>Encriptación:</strong> Encriptación de datos sensibles</li>
                <li><strong>Auditoría:</strong> Registro de todas las acciones</li>
                <li><strong>Backup:</strong> Respaldo seguro de información</li>
                <li><strong>Compliance:</strong> Cumplimiento con normativas de seguridad</li>
              </ul>
            </div>
          </Section>

          {/* Despliegue y Configuración */}
          <Section id="despliegue" title="Despliegue y Configuración">
            <div className="content-block">
              <h3>Configuración del Sistema</h3>
              <p>
                El ERP Avanza puede ser desplegado en diferentes entornos según
                las necesidades de la empresa:
              </p>
              
              <h4>Entornos de Despliegue</h4>
              <ul>
                <li><strong>Desarrollo:</strong> Entorno para desarrollo y pruebas</li>
                <li><strong>Staging:</strong> Entorno de pre-producción</li>
                <li><strong>Producción:</strong> Entorno de producción activo</li>
                <li><strong>DR:</strong> Entorno de recuperación ante desastres</li>
              </ul>

              <h4>Requisitos del Sistema</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Requisito Mínimo</th>
                    <th>Recomendado</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Servidor Web</td>
                    <td>2 vCPU, 4GB RAM</td>
                    <td>4 vCPU, 8GB RAM</td>
                    <td>Node.js 18+</td>
                  </tr>
                  <tr>
                    <td>Base de Datos</td>
                    <td>2 vCPU, 4GB RAM</td>
                    <td>4 vCPU, 16GB RAM</td>
                    <td>PostgreSQL 14+</td>
                  </tr>
                  <tr>
                    <td>Almacenamiento</td>
                    <td>100GB SSD</td>
                    <td>500GB SSD</td>
                    <td>RAID recomendado</td>
                  </tr>
                  <tr>
                    <td>Red</td>
                    <td>100 Mbps</td>
                    <td>1 Gbps</td>
                    <td>Latencia menor a 50ms</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Variables de Entorno</h4>
              <ul>
                <li><strong>NODE_ENV:</strong> Entorno de ejecución</li>
                <li><strong>DATABASE_URL:</strong> URL de conexión a base de datos</li>
                <li><strong>JWT_SECRET:</strong> Clave secreta para JWT</li>
                <li><strong>PORT:</strong> Puerto del servidor</li>
                <li><strong>LOG_LEVEL:</strong> Nivel de logging</li>
              </ul>
            </div>
          </Section>

          {/* Monitoreo y Logs */}
          <Section id="monitoreo" title="Monitoreo y Logs">
            <div className="content-block">
              <h3>Sistema de Monitoreo</h3>
              <p>
                El ERP Avanza incluye herramientas de monitoreo para garantizar
                el rendimiento y la disponibilidad del sistema:
              </p>
              
              <h4>Métricas de Monitoreo</h4>
              <ul>
                <li><strong>Rendimiento:</strong> Tiempo de respuesta de APIs</li>
                <li><strong>Recursos:</strong> Uso de CPU, memoria y disco</li>
                <li><strong>Base de Datos:</strong> Consultas lentas y conexiones</li>
                <li><strong>Errores:</strong> Tasa de errores y excepciones</li>
              </ul>

              <h4>Sistema de Logs</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Nivel</th>
                    <th>Descripción</th>
                    <th>Ejemplo</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ERROR</td>
                    <td>Errores críticos del sistema</td>
                    <td>Error de conexión a BD</td>
                    <td>Notificación inmediata</td>
                  </tr>
                  <tr>
                    <td>WARN</td>
                    <td>Advertencias del sistema</td>
                    <td>Espacio en disco bajo</td>
                    <td>Monitoreo continuo</td>
                  </tr>
                  <tr>
                    <td>INFO</td>
                    <td>Información general</td>
                    <td>Usuario autenticado</td>
                    <td>Registro estándar</td>
                  </tr>
                  <tr>
                    <td>DEBUG</td>
                    <td>Información de depuración</td>
                    <td>Valores de variables</td>
                    <td>Solo en desarrollo</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Alertas y Notificaciones</h4>
              <ul>
                <li><strong>Alertas Automáticas:</strong> Notificaciones por email/SMS</li>
                <li><strong>Dashboards:</strong> Paneles de monitoreo en tiempo real</li>
                <li><strong>Reportes:</strong> Reportes periódicos de rendimiento</li>
                <li><strong>Escalación:</strong> Escalación automática de incidentes</li>
              </ul>
            </div>
          </Section>

          {/* Troubleshooting */}
          <Section id="troubleshooting" title="Troubleshooting y Solución de Problemas">
            <div className="content-block">
              <h3>Problemas Comunes y Soluciones</h3>
              
              <h4>Errores de Sistema</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Error</th>
                    <th>Descripción</th>
                    <th>Causa</th>
                    <th>Solución</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Error de Conexión BD</td>
                    <td>No se puede conectar a la base de datos</td>
                    <td>Servidor BD caído o red interrumpida</td>
                    <td>Verificar estado del servidor BD</td>
                  </tr>
                  <tr>
                    <td>Timeout de API</td>
                    <td>Las APIs responden lentamente</td>
                    <td>Consultas BD lentas o sobrecarga</td>
                    <td>Optimizar consultas y recursos</td>
                  </tr>
                  <tr>
                    <td>Error de Autenticación</td>
                    <td>Tokens JWT inválidos</td>
                    <td>Token expirado o malformado</td>
                    <td>Renovar token o reautenticar</td>
                  </tr>
                  <tr>
                    <td>Error de Permisos</td>
                    <td>Acceso denegado a recursos</td>
                    <td>Usuario sin permisos suficientes</td>
                    <td>Verificar roles y permisos</td>
                  </tr>
                  <tr>
                    <td>Error de Memoria</td>
                    <td>Falta de memoria en el sistema</td>
                    <td>Uso excesivo de memoria</td>
                    <td>Reiniciar servicio o escalar</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Validaciones del Sistema</h4>
              <p>
                El sistema ERP Avanza incluye validaciones automáticas para:
              </p>
              <ul>
                <li><strong>Integridad de Datos:</strong> Verificación de consistencia</li>
                <li><strong>Seguridad:</strong> Validación de permisos y autenticación</li>
                <li><strong>Rendimiento:</strong> Monitoreo de recursos del sistema</li>
                <li><strong>Conectividad:</strong> Verificación de servicios externos</li>
              </ul>
            </div>
          </Section>

          {/* Casos Especiales */}
          <Section id="casos-especiales" title="Casos Especiales y Excepciones">
            <div className="content-block">
              <h3>Manejo de Casos Especiales</h3>
              
              <h4>Mantenimiento del Sistema</h4>
              <ul>
                <li><strong>Backup Automático:</strong> Respaldo programado de datos</li>
                <li><strong>Actualizaciones:</strong> Proceso de actualización del sistema</li>
                <li><strong>Migración de Datos:</strong> Transferencia entre versiones</li>
                <li><strong>Recuperación:</strong> Restauración desde respaldos</li>
              </ul>

              <h4>Casos de Contingencia</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Caso</th>
                    <th>Descripción</th>
                    <th>Proceso</th>
                    <th>Consideraciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Caída del Sistema</td>
                    <td>Servidor principal no responde</td>
                    <td>Activar servidor de respaldo</td>
                    <td>Verificar sincronización de datos</td>
                  </tr>
                  <tr>
                    <td>Pérdida de Datos</td>
                    <td>Corrupción de base de datos</td>
                    <td>Restaurar desde último backup</td>
                    <td>Verificar integridad de datos</td>
                  </tr>
                  <tr>
                    <td>Ataque de Seguridad</td>
                    <td>Intrusión detectada en el sistema</td>
                    <td>Aislar sistema y investigar</td>
                    <td>Preservar evidencia</td>
                  </tr>
                  <tr>
                    <td>Desastre Natural</td>
                    <td>Daño físico a infraestructura</td>
                    <td>Activar plan de recuperación</td>
                    <td>Comunicar a usuarios</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Integración */}
          <Section id="integracion" title="Integración con Otros Sistemas">
            <div className="content-block">
              <h3>Sistema de Integración</h3>
              
              <h4>Integración con Sistemas Externos</h4>
              <ul>
                <li><strong>Bancos:</strong> Conexión para conciliación bancaria</li>
                <li><strong>Gobierno:</strong> Reportes fiscales y tributarios</li>
                <li><strong>Proveedores:</strong> Integración con sistemas de proveedores</li>
                <li><strong>Clientes:</strong> Portales de autogestión</li>
              </ul>

              <h4>Funcionalidades de Integración</h4>
              <p>
                El ERP Avanza permite la integración automática con sistemas externos para:
              </p>
              <ul>
                <li><strong>Sincronización de Datos:</strong> Actualización automática entre sistemas</li>
                <li><strong>Reportes Consolidados:</strong> Información unificada del ecosistema</li>
                <li><strong>Validaciones Cruzadas:</strong> Verificación de consistencia entre sistemas</li>
                <li><strong>Auditoría Integrada:</strong> Trazabilidad completa de transacciones</li>
              </ul>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default DocumentacionTecnica;
