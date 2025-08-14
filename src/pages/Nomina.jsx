import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/manual/Section';
import ImageBlock from '../components/manual/ImageBlock';
import Table from '../components/manual/Table';

const Nomina = () => {
  return (
    <div className="manual-page">
      <div className="manual-sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Módulo de Nómina</h3>
          <p className="sidebar-subtitle">Navega por las secciones</p>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-sections">
            <li><a href="#generalidades" className="sidebar-section-link">Generalidades</a></li>
            <li><a href="#configuracion" className="sidebar-section-link">Configuración</a></li>
            <li><a href="#empleados" className="sidebar-section-link">Gestión de Empleados</a></li>
            <li><a href="#contratos" className="sidebar-section-link">Contratos y Condiciones</a></li>
            <li><a href="#asistencias" className="sidebar-section-link">Control de Asistencias</a></li>
            <li><a href="#salarios" className="sidebar-section-link">Estructura Salarial</a></li>
            <li><a href="#nominas" className="sidebar-section-link">Generación de Nóminas</a></li>
            <li><a href="#reportes" className="sidebar-section-link">Reportes y Consultas</a></li>
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
            <h1 className="module-main-title">Módulo de Nómina</h1>
            <p className="module-subtitle">Sistema integral de gestión de nóminas y recursos humanos</p>
          </div>

          {/* Generalidades */}
          <Section id="generalidades" title="Generalidades del Sistema">
            <div className="content-block">
              <h3>Descripción General</h3>
              <p>
                El módulo de Nómina del ERP Avanza es un sistema integral que permite la gestión completa 
                del ciclo de vida del empleado, desde su contratación hasta la liquidación final, incluyendo 
                el cálculo automático de salarios, prestaciones sociales y reportes legales.
              </p>
              
              <h4>Características Principales</h4>
              <ul>
                <li><strong>Gestión Integral:</strong> Manejo completo de empleados, contratos, asistencias y salarios</li>
                <li><strong>Cálculos Automáticos:</strong> Liquidación automática de nóminas con validaciones</li>
                <li><strong>Compliance Legal:</strong> Cumplimiento con normativas laborales vigentes</li>
                <li><strong>Reportes Avanzados:</strong> Generación de reportes para entidades gubernamentales</li>
                <li><strong>Integración:</strong> Conexión con módulos de contabilidad y RRHH</li>
              </ul>

              <h4>Módulos Relacionados</h4>
              <div className="database-schema">
                <ul>
                  <li><strong>Contabilidad:</strong> Registro automático de gastos de nómina</li>
                  <li><strong>RRHH:</strong> Gestión de perfiles y evaluaciones</li>
                  <li><strong>Inventarios:</strong> Control de activos asignados</li>
                  <li><strong>Facturación:</strong> Cálculo de costos por proyecto</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Configuración */}
          <Section id="configuracion" title="Configuración del Sistema">
            <div className="content-block">
              <h3>Parámetros de Configuración</h3>
              
              <h4>Configuración General</h4>
              <ul>
                <li><strong>Empresa:</strong> Datos fiscales y legales de la empresa</li>
                <li><strong>Período Fiscal:</strong> Año fiscal y períodos de nómina</li>
                <li><strong>Moneda:</strong> Moneda base para cálculos salariales</li>
                <li><strong>Zona Horaria:</strong> Configuración de horarios y turnos</li>
              </ul>

              <h4>Parámetros de Nómina</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Parámetro</th>
                    <th>Descripción</th>
                    <th>Valor por Defecto</th>
                    <th>Obligatorio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Período de Pago</td>
                    <td>Frecuencia de liquidación de nóminas</td>
                    <td>Mensual</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Días Laborables</td>
                    <td>Número de días laborables por semana</td>
                    <td>5</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Horas Laborables</td>
                    <td>Horas de trabajo por día</td>
                    <td>8</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Salario Mínimo</td>
                    <td>Salario mínimo legal vigente</td>
                    <td>Variable</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Factor de Prestaciones</td>
                    <td>Factor para cálculo de prestaciones sociales</td>
                    <td>1.0833</td>
                    <td>Sí</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Configuración de Impuestos</h4>
              <ul>
                <li><strong>Retención en la Fuente:</strong> Porcentajes y bases de retención</li>
                <li><strong>Seguridad Social:</strong> Porcentajes de aportes patronales y de empleados</li>
                <li><strong>Parafiscales:</strong> SENA, ICBF, Cajas de Compensación</li>
                <li><strong>Impuestos Locales:</strong> Impuestos municipales y departamentales</li>
              </ul>
            </div>
          </Section>

          {/* Gestión de Empleados */}
          <Section id="empleados" title="Gestión de Empleados">
            <div className="content-block">
              <h3>Proceso de Gestión de Empleados</h3>
              
              <h4>Alta de Empleados</h4>
              <ol>
                <li><strong>Datos Básicos:</strong> Información personal y de contacto</li>
                <li><strong>Datos Fiscales:</strong> Número de identificación y tipo</li>
                <li><strong>Información Laboral:</strong> Cargo, departamento y fecha de ingreso</li>
                <li><strong>Datos Bancarios:</strong> Cuenta bancaria para pagos</li>
                <li><strong>Documentos:</strong> Carga de documentos requeridos</li>
              </ol>

              <h4>Campos Obligatorios</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Validación</th>
                    <th>Error Común</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Número de Identificación</td>
                    <td>Texto</td>
                    <td>Único en el sistema</td>
                    <td>Duplicado de empleado</td>
                  </tr>
                  <tr>
                    <td>Nombres y Apellidos</td>
                    <td>Texto</td>
                    <td>No vacío, solo letras</td>
                    <td>Caracteres especiales</td>
                  </tr>
                  <tr>
                    <td>Fecha de Nacimiento</td>
                    <td>Fecha</td>
                    <td>Mayor de 18 años</td>
                    <td>Fecha futura</td>
                  </tr>
                  <tr>
                    <td>Fecha de Ingreso</td>
                    <td>Fecha</td>
                    <td>No futura</td>
                    <td>Fecha anterior a 1900</td>
                  </tr>
                  <tr>
                    <td>Salario Base</td>
                    <td>Numérico</td>
                    <td>Mayor al mínimo legal</td>
                    <td>Valor negativo</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Validaciones del Sistema</h4>
              <ul>
                <li><strong>Edad Mínima:</strong> Verificación de edad legal para trabajar</li>
                <li><strong>Documentos Únicos:</strong> Prevención de duplicados</li>
                <li><strong>Salario Mínimo:</strong> Cumplimiento de normativa laboral</li>
                <li><strong>Fechas Válidas:</strong> Lógica en fechas de ingreso y retiro</li>
                <li><strong>Datos Bancarios:</strong> Validación de formato de cuenta</li>
              </ul>
            </div>
          </Section>

          {/* Contratos y Condiciones */}
          <Section id="contratos" title="Contratos y Condiciones Laborales">
            <div className="content-block">
              <h3>Tipos de Contrato</h3>
              
              <h4>Clasificación de Contratos</h4>
              <ul>
                <li><strong>Contrato a Término Fijo:</strong> Duración específica definida</li>
                <li><strong>Contrato a Término Indefinido:</strong> Sin fecha de terminación</li>
                <li><strong>Contrato por Obra o Labor:</strong> Por proyecto específico</li>
                <li><strong>Contrato de Aprendizaje:</strong> Para formación profesional</li>
                <li><strong>Contrato Ocasional:</strong> Para trabajos temporales</li>
              </ul>

              <h4>Condiciones Especiales</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Tipo de Condición</th>
                    <th>Descripción</th>
                    <th>Impacto en Nómina</th>
                    <th>Consideraciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Horario Nocturno</td>
                    <td>Trabajo entre 9 PM y 6 AM</td>
                    <td>Recargo del 35%</td>
                    <td>Verificar horarios reales</td>
                  </tr>
                  <tr>
                    <td>Horas Extras</td>
                    <td>Trabajo adicional al horario normal</td>
                    <td>Recargo del 25%</td>
                    <td>Límite de 2 horas diarias</td>
                  </tr>
                  <tr>
                    <td>Domingos y Festivos</td>
                    <td>Trabajo en días no laborables</td>
                    <td>Recargo del 75%</td>
                    <td>Compensación obligatoria</td>
                  </tr>
                  <tr>
                    <td>Turnos Rotativos</td>
                    <td>Cambio de horarios periódicamente</td>
                    <td>Recargo del 15%</td>
                    <td>Notificación previa requerida</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Modificaciones de Contrato</h4>
              <ul>
                <li><strong>Cambio de Cargo:</strong> Modificación de funciones y responsabilidades</li>
                <li><strong>Cambio de Salario:</strong> Ajustes salariales y retroactivos</li>
                <li><strong>Cambio de Horario:</strong> Modificación de turnos y jornadas</li>
                <li><strong>Cambio de Ubicación:</strong> Traslado a otra sede o ciudad</li>
              </ul>
            </div>
          </Section>

          {/* Control de Asistencias */}
          <Section id="asistencias" title="Control de Asistencias y Horarios">
            <div className="content-block">
              <h3>Sistema de Control de Asistencias</h3>
              
              <h4>Métodos de Registro</h4>
              <ul>
                <li><strong>Reloj Biométrico:</strong> Huella dactilar y reconocimiento facial</li>
                <li><strong>Tarjeta Proximidad:</strong> RFID y tarjetas magnéticas</li>
                <li><strong>Registro Manual:</strong> Entrada manual por supervisores</li>
                <li><strong>App Móvil:</strong> Registro desde dispositivos móviles</li>
                <li><strong>Web Service:</strong> Integración con sistemas externos</li>
              </ul>

              <h4>Tipos de Ausencias</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Tipo de Ausencia</th>
                    <th>Descripción</th>
                    <th>Impacto Salarial</th>
                    <th>Documentación Requerida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Incapacidad por Enfermedad General</td>
                    <td>Enfermedad no laboral</td>
                    <td>Primeros 2 días: 0%, del 3er día: 66.67%</td>
                    <td>Certificado médico</td>
                  </tr>
                  <tr>
                    <td>Incapacidad por Accidente de Trabajo</td>
                    <td>Accidente durante el trabajo</td>
                    <td>100% desde el primer día</td>
                    <td>Reporte ARL</td>
                  </tr>
                  <tr>
                    <td>Licencia de Maternidad</td>
                    <td>Descanso por maternidad</td>
                    <td>100% por 18 semanas</td>
                    <td>Certificado médico</td>
                  </tr>
                  <tr>
                    <td>Licencia de Paternidad</td>
                    <td>Descanso por paternidad</td>
                    <td>100% por 8 días</td>
                    <td>Certificado de nacimiento</td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>Descanso anual remunerado</td>
                    <td>100% del salario</td>
                    <td>Solicitud aprobada</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Validaciones de Asistencia</h4>
              <ul>
                <li><strong>Horarios Válidos:</strong> Verificación de entrada y salida</li>
                <li><strong>Ausencias Justificadas:</strong> Validación de documentación</li>
                <li><strong>Horas Extras:</strong> Control de límites legales</li>
                <li><strong>Descansos:</strong> Verificación de pausas obligatorias</li>
                <li><strong>Turnos:</strong> Validación de rotaciones programadas</li>
              </ul>
            </div>
          </Section>

          {/* Estructura Salarial */}
          <Section id="salarios" title="Estructura Salarial y Prestaciones">
            <div className="content-block">
              <h3>Componentes del Salario</h3>
              
              <h4>Salario Base</h4>
              <ul>
                <li><strong>Salario Básico:</strong> Remuneración fija mensual</li>
                <li><strong>Auxilio de Transporte:</strong> Compensación por movilidad</li>
                <li><strong>Auxilio de Alimentación:</strong> Compensación por alimentación</li>
                <li><strong>Bonificaciones:</strong> Incentivos por desempeño</li>
                <li><strong>Comisiones:</strong> Porcentajes por ventas o metas</li>
              </ul>

              <h4>Prestaciones Sociales</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Prestación</th>
                    <th>Cálculo</th>
                    <th>Responsabilidad</th>
                    <th>Frecuencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prima de Servicios</td>
                    <td>Salario base × 8.33% × días trabajados / 360</td>
                    <td>Patrono</td>
                    <td>Semestral</td>
                  </tr>
                  <tr>
                    <td>Cesantías</td>
                    <td>Salario base × 8.33% × días trabajados / 360</td>
                    <td>Patrono</td>
                    <td>Anual</td>
                  </tr>
                  <tr>
                    <td>Intereses sobre Cesantías</td>
                    <td>Cesantías × 12% × días trabajados / 360</td>
                    <td>Patrono</td>
                    <td>Anual</td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>Salario base × 4.17% × días trabajados / 360</td>
                    <td>Patrono</td>
                    <td>Al tomar vacaciones</td>
                  </tr>
                  <tr>
                    <td>Indemnización por Despido</td>
                    <td>Salario base × días trabajados / 30</td>
                    <td>Patrono</td>
                    <td>Al despedir</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Deducciones Obligatorias</h4>
              <ul>
                <li><strong>Salud:</strong> 4% del salario base (empleado)</li>
                <li><strong>Pensión:</strong> 4% del salario base (empleado)</li>
                <li><strong>Fondo de Solidaridad:</strong> 1% del salario base (empleado)</li>
                <li><strong>Retención en la Fuente:</strong> Según tabla del DIAN</li>
                <li><strong>Cuotas Sindicales:</strong> Si aplica afiliación</li>
              </ul>
            </div>
          </Section>

          {/* Generación de Nóminas */}
          <Section id="nominas" title="Generación y Liquidación de Nóminas">
            <div className="content-block">
              <h3>Proceso de Liquidación</h3>
              
              <h4>Fases de Liquidación</h4>
              <ol>
                <li><strong>Preparación:</strong> Verificación de datos y configuraciones</li>
                <li><strong>Cálculo:</strong> Procesamiento automático de salarios</li>
                <li><strong>Validación:</strong> Verificación de resultados y totales</li>
                <li><strong>Aprobación:</strong> Autorización por responsables</li>
                <li><strong>Generación:</strong> Creación de reportes y archivos</li>
                <li><strong>Distribución:</strong> Envío a empleados y entidades</li>
              </ol>

              <h4>Validaciones del Sistema</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Validación</th>
                    <th>Descripción</th>
                    <th>Acción del Sistema</th>
                    <th>Resolución</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salario Mínimo</td>
                    <td>Verificar que no esté por debajo del mínimo legal</td>
                    <td>Bloquear liquidación</td>
                    <td>Ajustar salario base</td>
                  </tr>
                  <tr>
                    <td>Horas Extras</td>
                    <td>Verificar límite de 2 horas diarias</td>
                    <td>Advertencia</td>
                    <td>Revisar horarios</td>
                  </tr>
                  <tr>
                    <td>Deducciones</td>
                    <td>Verificar que no excedan el 50% del salario</td>
                    <td>Bloquear liquidación</td>
                    <td>Ajustar deducciones</td>
                  </tr>
                  <tr>
                    <td>Prestaciones</td>
                    <td>Verificar cálculo correcto de prestaciones</td>
                    <td>Advertencia</td>
                    <td>Revisar fórmulas</td>
                  </tr>
                  <tr>
                    <td>Totales</td>
                    <td>Verificar que los totales sean coherentes</td>
                    <td>Bloquear liquidación</td>
                    <td>Revisar cálculos</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Reportes Generados</h4>
              <ul>
                <li><strong>Nómina Individual:</strong> Desglose completo por empleado</li>
                <li><strong>Nómina Consolidada:</strong> Resumen general de la empresa</li>
                <li><strong>Reporte de Prestaciones:</strong> Detalle de prestaciones sociales</li>
                <li><strong>Reporte de Impuestos:</strong> Retenciones y aportes</li>
                <li><strong>Archivo Plano:</strong> Formato para entidades gubernamentales</li>
              </ul>
            </div>
          </Section>

          {/* Reportes y Consultas */}
          <Section id="reportes" title="Reportes y Consultas">
            <div className="content-block">
              <h3>Sistema de Reportes</h3>
              
              <h4>Reportes Estándar</h4>
              <ul>
                <li><strong>Reporte de Empleados:</strong> Lista completa con información básica</li>
                <li><strong>Reporte de Asistencias:</strong> Control de entradas y salidas</li>
                <li><strong>Reporte de Salarios:</strong> Desglose de remuneraciones</li>
                <li><strong>Reporte de Prestaciones:</strong> Cálculo de prestaciones sociales</li>
                <li><strong>Reporte de Impuestos:</strong> Retenciones y aportes</li>
              </ul>

              <h4>Reportes Personalizables</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Tipo de Reporte</th>
                    <th>Parámetros</th>
                    <th>Formato de Salida</th>
                    <th>Frecuencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Reporte por Departamento</td>
                    <td>Departamento, período, empleados</td>
                    <td>PDF, Excel, CSV</td>
                    <td>Mensual</td>
                  </tr>
                  <tr>
                    <td>Reporte por Cargo</td>
                    <td>Cargo, salario, antigüedad</td>
                    <td>PDF, Excel, CSV</td>
                    <td>Trimestral</td>
                  </tr>
                  <tr>
                    <td>Reporte de Rotación</td>
                    <td>Período, motivo, departamento</td>
                    <td>PDF, Excel, CSV</td>
                    <td>Mensual</td>
                  </tr>
                  <tr>
                    <td>Reporte de Costos</td>
                    <td>Período, centro de costo, empleado</td>
                    <td>PDF, Excel, CSV</td>
                    <td>Mensual</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Consultas Avanzadas</h4>
              <ul>
                <li><strong>Filtros Múltiples:</strong> Combinación de criterios de búsqueda</li>
                <li><strong>Agrupaciones:</strong> Agrupación por departamento, cargo, antigüedad</li>
                <li><strong>Ordenamiento:</strong> Ordenamiento por múltiples campos</li>
                <li><strong>Exportación:</strong> Múltiples formatos de salida</li>
                <li><strong>Programación:</strong> Generación automática de reportes</li>
              </ul>
            </div>
          </Section>

          {/* Troubleshooting */}
          <Section id="troubleshooting" title="Troubleshooting y Resolución de Problemas">
            <div className="content-block">
              <h3>Problemas Comunes y Soluciones</h3>
              
              <h4>Errores de Liquidación</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Error</th>
                    <th>Descripción</th>
                    <th>Causa Probable</th>
                    <th>Solución</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Error de Cálculo</td>
                    <td>Diferencias en totales de nómina</td>
                    <td>Configuración incorrecta de parámetros</td>
                    <td>Verificar configuraciones de salario y prestaciones</td>
                  </tr>
                  <tr>
                    <td>Empleado No Encontrado</td>
                    <td>Empleado no aparece en liquidación</td>
                    <td>Estado inactivo o fecha de retiro incorrecta</td>
                    <td>Verificar estado y fechas del empleado</td>
                  </tr>
                  <tr>
                    <td>Salario Negativo</td>
                    <td>Salario neto negativo</td>
                    <td>Deducciones excesivas</td>
                    <td>Revisar deducciones y límites legales</td>
                  </tr>
                  <tr>
                    <td>Prestaciones Incorrectas</td>
                    <td>Cálculo erróneo de prestaciones</td>
                    <td>Fórmulas de cálculo incorrectas</td>
                    <td>Verificar fórmulas en configuración</td>
                  </tr>
                  <tr>
                    <td>Error de Impuestos</td>
                    <td>Retenciones incorrectas</td>
                    <td>Tabla de retención desactualizada</td>
                    <td>Actualizar tabla de retención en la fuente</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Validaciones del Sistema</h4>
              <p>
                El sistema ERP Avanza incluye validaciones automáticas para:
              </p>
              <ul>
                <li><strong>Integridad de Datos:</strong> Verificación de campos obligatorios</li>
                <li><strong>Consistencia Salarial:</strong> Validación de parámetros de nómina</li>
                <li><strong>Períodos de Liquidación:</strong> Control de apertura y cierre</li>
                <li><strong>Empleados Activos:</strong> Verificación de empleados en el sistema</li>
              </ul>
            </div>
          </Section>

          {/* Casos Especiales */}
          <Section id="casos-especiales" title="Casos Especiales y Excepciones">
            <div className="content-block">
              <h3>Manejo de Casos Especiales</h3>
              
              <h4>Empleados con Salarios Variables</h4>
              <ul>
                <li><strong>Comisiones:</strong> Cálculo basado en ventas o metas</li>
                <li><strong>Bonificaciones:</strong> Incentivos por desempeño o proyectos</li>
                <li><strong>Horas Extras:</strong> Cálculo dinámico según horarios</li>
                <li><strong>Deducciones Variables:</strong> Préstamos o adelantos</li>
                <li><strong>Retroactivos:</strong> Ajustes salariales con efecto retroactivo</li>
              </ul>

              <h4>Empleados con Múltiples Contratos</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Escenario</th>
                    <th>Descripción</th>
                    <th>Manejo del Sistema</th>
                    <th>Consideraciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Contrato Principal + Ocasional</td>
                    <td>Empleado con contrato fijo y trabajos adicionales</td>
                    <td>Liquidación separada por contrato</td>
                    <td>Verificar límites de horas extras</td>
                  </tr>
                  <tr>
                    <td>Múltiples Sucursales</td>
                    <td>Empleado trabajando en diferentes ubicaciones</td>
                    <td>Distribución de costos por centro</td>
                    <td>Asignar centro de costo principal</td>
                  </tr>
                  <tr>
                    <td>Cambio de Cargo</td>
                    <td>Promoción o cambio de funciones</td>
                    <td>Liquidación con salario promedio</td>
                    <td>Calcular proporción de días</td>
                  </tr>
                  <tr>
                    <td>Licencias Prolongadas</td>
                    <td>Ausencias por más de 30 días</td>
                    <td>Suspender liquidación automática</td>
                    <td>Reactivar al regreso</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Casos de Liquidación Especial</h4>
              <ul>
                <li><strong>Liquidación Final:</strong> Cálculo completo al retirarse</li>
                <li><strong>Liquidación de Vacaciones:</strong> Pago de vacaciones no gozadas</li>
                <li><strong>Liquidación de Prestaciones:</strong> Pago de prestaciones sociales</li>
                <li><strong>Liquidación por Despido:</strong> Indemnización y prestaciones</li>
                <li><strong>Liquidación por Renuncia:</strong> Prestaciones hasta fecha de retiro</li>
              </ul>
            </div>
          </Section>

          {/* Integración */}
          <Section id="integracion" title="Integración con Otros Módulos">
            <div className="content-block">
              <h3>Sistema de Integración</h3>
              
              <h4>Integración con Contabilidad</h4>
              <ul>
                <li><strong>Asientos Automáticos:</strong> Registro automático de gastos de nómina</li>
                <li><strong>Distribución de Costos:</strong> Asignación a centros de costo</li>
                <li><strong>Conciliación:</strong> Verificación de totales entre módulos</li>
                <li><strong>Reportes Consolidados:</strong> Información financiera completa</li>
              </ul>

              <h4>Integración con RRHH</h4>
              <ul>
                <li><strong>Perfiles de Cargo:</strong> Información de cargos y responsabilidades</li>
                <li><strong>Evaluaciones:</strong> Impacto en bonificaciones y promociones</li>
                <li><strong>Capacitaciones:</strong> Registro de formación del personal</li>
                <li><strong>Plan de Carrera:</strong> Desarrollo profesional del empleado</li>
              </ul>

              <h4>APIs y Web Services</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Propósito</th>
                    <th>Formato</th>
                    <th>Frecuencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Consulta de Empleados</td>
                    <td>Obtener información básica de empleados</td>
                    <td>JSON, XML</td>
                    <td>En tiempo real</td>
                  </tr>
                  <tr>
                    <td>Registro de Asistencias</td>
                    <td>Registrar entradas y salidas</td>
                    <td>JSON, XML</td>
                    <td>En tiempo real</td>
                  </tr>
                  <tr>
                    <td>Liquidación de Nómina</td>
                    <td>Procesar liquidación de nómina</td>
                    <td>JSON, XML</td>
                    <td>Periódico</td>
                  </tr>
                  <tr>
                    <td>Reportes</td>
                    <td>Generar reportes personalizados</td>
                    <td>PDF, Excel, CSV</td>
                    <td>Bajo demanda</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default Nomina;
