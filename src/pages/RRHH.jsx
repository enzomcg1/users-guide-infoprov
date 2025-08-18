import React from 'react';
import Section from '../components/manual/Section';
import Table from '../components/manual/Table';

const RRHH = () => {
  return (
    <div className="manual-page">
      <div className="manual-sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Módulo de RRHH</h3>
          <p className="sidebar-subtitle">Navega por las secciones</p>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-sections">
            <li><a href="#asignacion-valores" className="sidebar-section-link">Asignación de Valores</a></li>
            <li><a href="#valores-empleado" className="sidebar-section-link">Valores por Empleado</a></li>
            <li><a href="#asignacion-masiva" className="sidebar-section-link">Asignación Masiva</a></li>
            <li><a href="#filtros-sistema" className="sidebar-section-link">Filtros del Sistema</a></li>
            <li><a href="#proceso-asignacion" className="sidebar-section-link">Proceso de Asignación</a></li>
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
            <h1 className="module-main-title">Módulo de RRHH</h1>
            <p className="module-subtitle">Asignación de Valores de Empleados - Avanza ERP</p>
          </div>
          
          {/* Asignación de Valores */}
          <Section id="asignacion-valores" title="Asignación de Valores de Empleados">
            <div className="content-block">
              <h3>Descripción General</h3>
              <p>
                El módulo de <strong>Asignación de Valores de Empleados</strong> forma parte del sistema 
                <strong>NÓMINAS</strong> de Avanza ERP y permite gestionar de manera eficiente los valores 
                salariales y compensaciones de los empleados de la organización.
              </p>
              
              <h4>Ubicación en el Sistema</h4>
              <div className="system-location">
                <ul>
                  <li><strong>Módulo:</strong> NÓMINAS</li>
                  <li><strong>Menú:</strong> EMPLEADOS</li>
                  <li><strong>Programa:</strong> VALORES DE EMPLEADOS</li>
                </ul>
              </div>

              <h4>Funcionalidades Principales</h4>
              <ul>
                <li><strong>Gestión Individual:</strong> Asignación de valores por empleado</li>
                <li><strong>Asignación Masiva:</strong> Actualización masiva de valores salariales</li>
                <li><strong>Control de Estados:</strong> Seguimiento del estado de las asignaciones</li>
                <li><strong>Historial de Cambios:</strong> Trazabilidad de modificaciones salariales</li>
                <li><strong>Validaciones Automáticas:</strong> Control de consistencia de datos</li>
              </ul>
            </div>
          </Section>

          {/* Valores por Empleado */}
          <Section id="valores-empleado" title="Valores por Empleado">
            <div className="content-block">
              <h3>Pantalla Principal</h3>
              <p>
                Esta sección de la pantalla muestra la siguiente información detallada de cada empleado:
              </p>
              
              <h4>Campos de Información</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Descripción</th>
                    <th>Ejemplo</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sucursal</td>
                    <td>Ubicación física de la empresa donde trabaja el empleado</td>
                    <td>COMERCIAL EL CACIQUE S.R.L</td>
                    <td>Texto</td>
                  </tr>
                  <tr>
                    <td>Departamento</td>
                    <td>Área funcional a la que pertenece el empleado</td>
                    <td>Ventas, Administración, Producción</td>
                    <td>Lista</td>
                  </tr>
                  <tr>
                    <td>Sección</td>
                    <td>Subdivisión específica dentro del departamento</td>
                    <td>Caja, Atención al Cliente</td>
                    <td>Lista</td>
                  </tr>
                  <tr>
                    <td>Tipo Valor</td>
                    <td>Categoría del valor asignado al empleado</td>
                    <td>Salario Base, Bonificaciones</td>
                    <td>Lista</td>
                  </tr>
                  <tr>
                    <td>Empleado</td>
                    <td>Identificador único del empleado en el sistema</td>
                    <td>EMP001, EMP002</td>
                    <td>Código</td>
                  </tr>
                  <tr>
                    <td>Nombre Completo</td>
                    <td>Nombre completo del empleado</td>
                    <td>Juan Carlos Pérez González</td>
                    <td>Texto</td>
                  </tr>
                  <tr>
                    <td>Fecha Desde</td>
                    <td>Fecha de inicio de vigencia del valor</td>
                    <td>01/01/2025</td>
                    <td>Fecha</td>
                  </tr>
                  <tr>
                    <td>Fecha Hasta</td>
                    <td>Fecha de fin de vigencia del valor</td>
                    <td>31/12/2025</td>
                    <td>Fecha</td>
                  </tr>
                  <tr>
                    <td>No. Documento</td>
                    <td>Número de identificación del empleado</td>
                    <td>12345678</td>
                    <td>Número</td>
                  </tr>
                  <tr>
                    <td>Activo</td>
                    <td>Indicador de si el empleado está activo en el sistema</td>
                    <td>Sí/No</td>
                    <td>Booleano</td>
                  </tr>
                  <tr>
                    <td>Salario Base</td>
                    <td>Monto base del salario del empleado</td>
                    <td>3000000</td>
                    <td>Monetario</td>
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>Estado actual de la asignación de valores</td>
                    <td>Activo, Inactivo, Pendiente</td>
                    <td>Lista</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Acceso a Funcionalidades</h4>
              <p>
                Para ingresar a las opciones de asignación masiva, se debe usar el botón 
                <strong>ASIGN. MASIVA</strong> ubicado en la interfaz principal.
              </p>
            </div>
          </Section>

          {/* Asignación Masiva */}
          <Section id="asignacion-masiva" title="Asignación Masiva de Valores de Empleado">
            <div className="content-block">
              <h3>Funcionalidad de Asignación Masiva</h3>
              <p>
                Al hacer clic en el botón <code>Asign. Masiva</code>, se abre una ventana para agregar 
                o modificar registros de manera masiva, permitiendo actualizar múltiples empleados 
                simultáneamente.
              </p>
              
              <h4>Campos de la Ventana de Asignación Masiva</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Descripción</th>
                    <th>Ejemplo</th>
                    <th>Propósito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sucursal</td>
                    <td>Ubicación de la empresa para la asignación</td>
                    <td>COMERCIAL EL CACIQUE S.R.L</td>
                    <td>Identificar la ubicación de los empleados</td>
                  </tr>
                  <tr>
                    <td>Departamento</td>
                    <td>Área funcional para la asignación masiva</td>
                    <td>Ventas, Administración</td>
                    <td>Filtrar empleados por departamento</td>
                  </tr>
                  <tr>
                    <td>Sección</td>
                    <td>Subdivisión específica del departamento</td>
                    <td>Caja</td>
                    <td>Filtrar empleados por sección</td>
                  </tr>
                  <tr>
                    <td>Valor Actual</td>
                    <td>Monto actual del valor que se desea cambiar</td>
                    <td>3000000</td>
                    <td>Identificar empleados con valor específico</td>
                  </tr>
                  <tr>
                    <td>Tipo Valor</td>
                    <td>Categoría del valor a modificar</td>
                    <td>Salario Base</td>
                    <td>Especificar el tipo de valor a actualizar</td>
                  </tr>
                  <tr>
                    <td>Valor a Aplicar</td>
                    <td>Nuevo monto que se aplicará a los empleados</td>
                    <td>3200000</td>
                    <td>Definir el nuevo valor salarial</td>
                  </tr>
                  <tr>
                    <td>Aplicar Desde</td>
                    <td>Fecha de inicio de vigencia del nuevo valor</td>
                    <td>01/07/2025</td>
                    <td>Establecer cuándo entra en vigencia</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Ventajas de la Asignación Masiva</h4>
              <ul>
                <li><strong>Eficiencia:</strong> Actualización de múltiples empleados en una sola operación</li>
                <li><strong>Consistencia:</strong> Aplicación uniforme de cambios salariales</li>
                <li><strong>Control:</strong> Gestión centralizada de modificaciones salariales</li>
                <li><strong>Auditoría:</strong> Trazabilidad completa de cambios masivos</li>
                <li><strong>Validación:</strong> Control automático de consistencia de datos</li>
              </ul>
            </div>
          </Section>

          {/* Filtros del Sistema */}
          <Section id="filtros-sistema" title="Filtros del Sistema y su Propósito">
            <div className="content-block">
              <h3>Sistema de Filtros</h3>
              <p>
                El sistema de asignación masiva incluye filtros específicos que permiten identificar 
                y seleccionar de manera precisa los empleados que serán afectados por los cambios.
              </p>
              
              <h4>Descripción de Filtros</h4>
              <div className="filters-grid">
                <div className="filter-category">
                  <h5>Filtros de Ubicación</h5>
                  <ul>
                    <li><strong>Sucursal:</strong> Se utilizan para identificar las ubicaciones de los empleados</li>
                    <li><strong>Departamento:</strong> Filtra empleados por área funcional</li>
                    <li><strong>Sección:</strong> Filtra empleados por subdivisión específica</li>
              </ul>
                </div>
                
                <div className="filter-category">
                  <h5>Filtros de Valor</h5>
                  <ul>
                    <li><strong>Valor Actual:</strong> Se utiliza para identificar solo a los empleados que ganan un monto determinado actualmente</li>
                    <li><strong>Tipo Valor:</strong> Debe ser siempre <strong>SALARIO BASE</strong></li>
                    <li><strong>Valor a Aplicar:</strong> Es donde se determina el salario nuevo</li>
              </ul>
            </div>
                
                <div className="filter-category">
                  <h5>Filtros de Tiempo</h5>
                  <ul>
                    <li><strong>Aplicar Desde:</strong> Determina la fecha en que entra en vigencia el nuevo valor</li>
              </ul>
            </div>
            </div>

              <h4>Propósito de Cada Filtro</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Filtro</th>
                    <th>Propósito</th>
                    <th>Beneficio</th>
                    <th>Ejemplo de Uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sucursal, Departamento y Sección</td>
                    <td>Identificar ubicaciones específicas de empleados</td>
                    <td>Precisión en la selección de personal</td>
                    <td>Actualizar solo empleados de la sucursal "Centro"</td>
                  </tr>
                  <tr>
                    <td>Valor Actual</td>
                    <td>Identificar empleados con salario específico</td>
                    <td>Selección por nivel salarial actual</td>
                    <td>Actualizar empleados que ganan $3,000,000</td>
                  </tr>
                  <tr>
                    <td>Tipo Valor</td>
                    <td>Especificar la categoría de valor a modificar</td>
                    <td>Claridad en el tipo de cambio</td>
                    <td>Modificar solo salarios base, no bonificaciones</td>
                  </tr>
                  <tr>
                    <td>Valor a Aplicar</td>
                    <td>Definir el nuevo monto salarial</td>
                    <td>Establecer el valor objetivo</td>
                    <td>Establecer nuevo salario en $3,200,000</td>
                  </tr>
                  <tr>
                    <td>Aplicar Desde</td>
                    <td>Determinar fecha de vigencia del cambio</td>
                    <td>Control temporal de implementación</td>
                    <td>Cambio efectivo desde el 1 de julio</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Proceso de Asignación */}
          <Section id="proceso-asignacion" title="Proceso de Asignación de Valores">
            <div className="content-block">
              <h3>Flujo del Proceso</h3>
              <p>
                El proceso de asignación de valores de empleados sigue un flujo estructurado que 
                garantiza la precisión y consistencia de los cambios salariales.
              </p>
              
              <h4>Pasos del Proceso</h4>
              <div className="process-steps">
                <div className="process-step">
                  <h5>1. Acceso al Sistema</h5>
                  <p>
                    Navegar al módulo NÓMINAS → Menú EMPLEADOS → Programa VALORES DE EMPLEADOS
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>2. Selección de Empleados</h5>
                  <p>
                    Utilizar los filtros disponibles para identificar los empleados que serán afectados
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>3. Activación de Asignación Masiva</h5>
                  <p>
                    Hacer clic en el botón "ASIGN. MASIVA" para abrir la ventana de asignación masiva
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>4. Configuración de Filtros</h5>
                  <p>
                    Configurar todos los filtros necesarios para identificar el grupo de empleados objetivo
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>5. Definición de Nuevos Valores</h5>
                  <p>
                    Establecer el nuevo valor a aplicar y la fecha de vigencia
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>6. Validación y Confirmación</h5>
                  <p>
                    Revisar la información y confirmar la asignación masiva
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>7. Procesamiento del Sistema</h5>
                  <p>
                    El sistema procesa automáticamente todos los empleados que cumplan con los filtros
                  </p>
                </div>
                
                <div className="process-step">
                  <h5>8. Verificación de Resultados</h5>
                  <p>
                    Revisar que los cambios se hayan aplicado correctamente a todos los empleados
                  </p>
                </div>
              </div>

              <h3>Consideraciones Importantes</h3>
              <p>
                Durante el proceso de asignación masiva, es fundamental considerar los siguientes aspectos:
              </p>
              
              <h4>Aspectos Clave</h4>
              <ul>
                <li><strong>Validación de Filtros:</strong> Verificar que los filtros seleccionados identifiquen correctamente al grupo objetivo</li>
                <li><strong>Consistencia de Datos:</strong> Asegurar que los valores nuevos sean coherentes con la política salarial</li>
                <li><strong>Fecha de Vigencia:</strong> Establecer fechas apropiadas para la implementación de cambios</li>
                <li><strong>Auditoría:</strong> Mantener registro de todos los cambios realizados</li>
                <li><strong>Comunicación:</strong> Informar a los empleados afectados sobre los cambios salariales</li>
              </ul>

              <h4>Validaciones del Sistema</h4>
              <ul>
                <li><strong>Integridad de Datos:</strong> Verificación automática de campos obligatorios</li>
                <li><strong>Consistencia Salarial:</strong> Validación de rangos salariales permitidos</li>
                <li><strong>Fechas de Vigencia:</strong> Control de fechas válidas para implementación</li>
                <li><strong>Permisos de Usuario:</strong> Verificación de autorizaciones para cambios masivos</li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default RRHH;
