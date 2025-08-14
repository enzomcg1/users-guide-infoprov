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
            <li><a href="#generalidades" className="sidebar-section-link">Generalidades</a></li>
            <li><a href="#configuracion" className="sidebar-section-link">Configuración</a></li>
            <li><a href="#empleados" className="sidebar-section-link">Gestión de Empleados</a></li>
            <li><a href="#valores" className="sidebar-section-link">Asignación de Valores</a></li>
            <li><a href="#perfiles" className="sidebar-section-link">Perfiles y Cargos</a></li>
            <li><a href="#evaluaciones" className="sidebar-section-link">Evaluaciones de Desempeño</a></li>
            <li><a href="#capacitacion" className="sidebar-section-link">Capacitación y Desarrollo</a></li>
            <li><a href="#reportes" className="sidebar-section-link">Reportes de RRHH</a></li>
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
            <h1 className="module-main-title">Módulo de RRHH</h1>
            <p className="module-subtitle">Sistema integral de gestión de recursos humanos</p>
          </div>
          
          {/* Generalidades */}
          <Section id="generalidades" title="Generalidades del Sistema">
            <div className="content-block">
              <h3>Descripción General</h3>
              <p>
                El módulo de Recursos Humanos del ERP Avanza es una herramienta integral 
                diseñada para gestionar todo el ciclo de vida del empleado, desde su 
                contratación hasta su salida de la empresa.
              </p>
              
              <h4>Características Principales</h4>
              <ul>
                <li><strong>Gestión Integral:</strong> Manejo completo del ciclo de vida del empleado</li>
                <li><strong>Asignación de Valores:</strong> Configuración automática de parámetros salariales</li>
                <li><strong>Evaluaciones:</strong> Sistema de evaluación de desempeño continuo</li>
                <li><strong>Capacitación:</strong> Planificación y gestión de desarrollo profesional</li>
                <li><strong>Compliance:</strong> Cumplimiento con normativas laborales vigentes</li>
              </ul>

              <h4>Módulos Relacionados</h4>
              <div className="database-schema">
                <ul>
                  <li><strong>Nómina:</strong> Integración directa con cálculos salariales</li>
                  <li><strong>Contabilidad:</strong> Distribución de costos por departamento</li>
                  <li><strong>Inventarios:</strong> Control de activos asignados a empleados</li>
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
                <li><strong>Empresa:</strong> Datos organizacionales y estructura</li>
                <li><strong>Departamentos:</strong> Organización jerárquica de la empresa</li>
                <li><strong>Cargos:</strong> Definición de posiciones y responsabilidades</li>
                <li><strong>Ubicaciones:</strong> Sucursales y centros de trabajo</li>
              </ul>

              <h4>Parámetros de RRHH</h4>
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
                    <td>Período de Evaluación</td>
                    <td>Frecuencia de evaluaciones de desempeño</td>
                    <td>Semestral</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Escala de Evaluación</td>
                    <td>Escala numérica para evaluaciones</td>
                    <td>1-5</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Período de Capacitación</td>
                    <td>Frecuencia de capacitaciones obligatorias</td>
                    <td>Anual</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Horas Mínimas</td>
                    <td>Horas mínimas de capacitación por año</td>
                    <td>40</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Período de Rotación</td>
                    <td>Período para análisis de rotación</td>
                    <td>Mensual</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Configuración de Compliance</h4>
              <ul>
                <li><strong>Normativas Laborales:</strong> Legislación aplicable por país</li>
                <li><strong>Documentos Obligatorios:</strong> Documentación requerida por empleado</li>
                <li><strong>Auditorías:</strong> Frecuencia de auditorías internas</li>
                <li><strong>Reportes Regulatorios:</strong> Reportes para entidades gubernamentales</li>
              </ul>
            </div>
          </Section>

          {/* Gestión de Empleados */}
          <Section id="empleados" title="Gestión de Empleados">
            <div className="content-block">
              <h3>Información del Empleado</h3>
              <p>
                El sistema mantiene información completa y actualizada de cada empleado:
              </p>
              
              <h4>Datos Personales</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Categoría</th>
                    <th>Campos</th>
                    <th>Obligatorio</th>
                    <th>Validación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Identificación</td>
                    <td>Número de identificación, tipo, fecha de expedición</td>
                    <td>Sí</td>
                    <td>Formato válido según país</td>
                  </tr>
                  <tr>
                    <td>Datos Básicos</td>
                    <td>Nombres, apellidos, fecha de nacimiento, género</td>
                    <td>Sí</td>
                    <td>Mayor de 18 años</td>
                  </tr>
                  <tr>
                    <td>Contacto</td>
                    <td>Teléfono, email, dirección, ciudad</td>
                    <td>Sí</td>
                    <td>Email válido, teléfono válido</td>
                  </tr>
                  <tr>
                    <td>Familiar</td>
                    <td>Estado civil, dependientes, contacto de emergencia</td>
                    <td>No</td>
                    <td>Opcional</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Datos Laborales</h4>
              <ul>
                <li><strong>Contratación:</strong> Fecha de ingreso, tipo de contrato, período de prueba</li>
                <li><strong>Organización:</strong> Cargo, departamento, supervisor, ubicación</li>
                <li><strong>Remuneración:</strong> Salario base, bonificaciones, beneficios</li>
                <li><strong>Horarios:</strong> Jornada laboral, turnos, flexibilidad</li>
              </ul>

              <h3>Proceso de Contratación</h3>
              <p>
                Para contratar un nuevo empleado:
              </p>
              <ol>
                <li>Complete la solicitud de contratación</li>
                <li>Verifique la documentación requerida</li>
                <li>Configure los parámetros salariales</li>
                <li>Asigne el cargo y departamento</li>
                <li>Configure los accesos al sistema</li>
                <li>Programe la inducción y capacitación</li>
              </ol>

              <h4>Documentos Requeridos</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Documento</th>
                    <th>Descripción</th>
                    <th>Obligatorio</th>
                    <th>Vigencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Documento de Identidad</td>
                    <td>Cédula, pasaporte o documento equivalente</td>
                    <td>Sí</td>
                    <td>Vigente</td>
                  </tr>
                  <tr>
                    <td>Hoja de Vida</td>
                    <td>CV actualizado con experiencia laboral</td>
                    <td>Sí</td>
                    <td>Reciente</td>
                  </tr>
                  <tr>
                    <td>Certificados Laborales</td>
                    <td>Experiencia previa verificable</td>
                    <td>No</td>
                    <td>Últimos 5 años</td>
                  </tr>
                  <tr>
                    <td>Referencias</td>
                    <td>Referencias laborales verificables</td>
                    <td>No</td>
                    <td>Actuales</td>
                  </tr>
                  <tr>
                    <td>Exámenes Médicos</td>
                    <td>Certificado de aptitud laboral</td>
                    <td>Sí</td>
                    <td>Anual</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Asignación de Valores */}
          <Section id="valores" title="Asignación de Valores">
            <div className="content-block">
              <h3>Valores Salariales</h3>
              <p>
                El sistema permite configurar diferentes tipos de valores para el cálculo 
                de salarios:
              </p>
              
              <h4>Tipos de Valores</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Descripción</th>
                    <th>Frecuencia</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salario Base</td>
                    <td>Remuneración básica del empleado</td>
                    <td>Mensual</td>
                    <td>$2,000,000</td>
                  </tr>
                  <tr>
                    <td>Bonificaciones</td>
                    <td>Pagos adicionales por desempeño</td>
                    <td>Variable</td>
                    <td>Bono por metas</td>
                  </tr>
                  <tr>
                    <td>Beneficios</td>
                    <td>Compensaciones no monetarias</td>
                    <td>Mensual</td>
                    <td>Seguro médico</td>
                  </tr>
                  <tr>
                    <td>Deducciones</td>
                    <td>Descuentos obligatorios o voluntarios</td>
                    <td>Mensual</td>
                    <td>Seguridad social</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Configuración de Valores</h4>
              <ul>
                <li><strong>Valores Fijos:</strong> Montos que no cambian mensualmente</li>
                <li><strong>Valores Variables:</strong> Montos que dependen de criterios específicos</li>
                <li><strong>Valores por Porcentaje:</strong> Cálculos basados en porcentajes del salario base</li>
                <li><strong>Valores por Escala:</strong> Montos según nivel o antigüedad</li>
              </ul>

              <h3>Proceso de Asignación</h3>
              <p>
                Para asignar valores a un empleado:
              </p>
              <ol>
                <li>Acceda al perfil del empleado</li>
                <li>Seleccione la sección "Valores Salariales"</li>
                <li>Configure el salario base</li>
                <li>Agregue bonificaciones aplicables</li>
                <li>Configure beneficios y deducciones</li>
                <li>Valide que los totales sean correctos</li>
                <li>Guarde y active la configuración</li>
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
                    <td>Bloquear asignación</td>
                    <td>Ajustar salario base</td>
                  </tr>
                  <tr>
                    <td>Límite de Bonificaciones</td>
                    <td>Verificar que no exceda el límite permitido</td>
                    <td>Advertencia</td>
                    <td>Revisar montos</td>
                  </tr>
                  <tr>
                    <td>Deducciones</td>
                    <td>Verificar que no excedan el 50% del salario</td>
                    <td>Bloquear asignación</td>
                    <td>Ajustar deducciones</td>
                  </tr>
                  <tr>
                    <td>Total Neto</td>
                    <td>Verificar que el salario neto sea positivo</td>
                    <td>Bloquear asignación</td>
                    <td>Revisar configuración</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Perfiles y Cargos */}
          <Section id="perfiles" title="Perfiles y Cargos">
            <div className="content-block">
              <h3>Estructura Organizacional</h3>
              <p>
                El sistema mantiene la estructura organizacional de la empresa:
              </p>
              
              <h4>Departamentos</h4>
              <ul>
                <li>Administración y Finanzas</li>
                <li>Recursos Humanos</li>
                <li>Ventas y Marketing</li>
                <li>Operaciones y Producción</li>
                <li>Tecnología de la Información</li>
                <li>Servicios al Cliente</li>
              </ul>

              <h4>Cargos y Posiciones</h4>
              <ul>
                <li>Director General</li>
                <li>Gerente de Departamento</li>
                <li>Supervisor</li>
                <li>Analista</li>
                <li>Asistente</li>
                <li>Operador</li>
              </ul>

              <h3>Configuración de Cargos</h3>
              <p>
                Para crear un nuevo cargo:
              </p>
              <ol>
                <li>Acceda al menú "RRHH" → "Organización" → "Cargos"</li>
                <li>Seleccione "Nuevo Cargo"</li>
                <li>Ingrese el nombre del cargo</li>
                <li>Seleccione el departamento</li>
                <li>Configure el nivel jerárquico</li>
                <li>Defina las responsabilidades</li>
                <li>Configure los requisitos mínimos</li>
                <li>Establezca el rango salarial</li>
              </ol>
            </div>
          </Section>

          {/* Evaluaciones de Desempeño */}
          <Section id="evaluaciones" title="Evaluaciones de Desempeño">
            <div className="content-block">
              <h3>Sistema de Evaluación</h3>
              <p>
                El sistema de evaluaciones permite medir el desempeño de los empleados:
              </p>
              
              <h4>Criterios de Evaluación</h4>
              <ul>
                <li>Desempeño en el cargo</li>
                <li>Iniciativa y creatividad</li>
                <li>Trabajo en equipo</li>
                <li>Comunicación efectiva</li>
                <li>Cumplimiento de objetivos</li>
                <li>Desarrollo profesional</li>
              </ul>

              <h4>Escalas de Evaluación</h4>
              <ul>
                <li><strong>Excelente (5):</strong> Supera todas las expectativas</li>
                <li><strong>Muy Bueno (4):</strong> Cumple todas las expectativas</li>
                <li><strong>Bueno (3):</strong> Cumple las expectativas básicas</li>
                <li><strong>Regular (2):</strong> Cumple parcialmente las expectativas</li>
                <li><strong>Deficiente (1):</strong> No cumple las expectativas</li>
              </ul>

              <h3>Proceso de Evaluación</h3>
              <p>
                Para realizar una evaluación de desempeño:
              </p>
              <ol>
                <li>Programe la fecha de evaluación</li>
                <li>Notifique al empleado y evaluador</li>
                <li>Complete la evaluación según los criterios</li>
                <li>Programe la entrevista de retroalimentación</li>
                <li>Documente los resultados y acuerdos</li>
                <li>Establezca el plan de mejora</li>
              </ol>
            </div>
          </Section>

          {/* Capacitación y Desarrollo */}
          <Section id="capacitacion" title="Capacitación y Desarrollo">
            <div className="content-block">
              <h3>Plan de Capacitación</h3>
              <p>
                El sistema permite planificar y gestionar actividades de capacitación:
              </p>
              
              <h4>Tipos de Capacitación</h4>
              <ul>
                <li><strong>Inducción:</strong> Para nuevos empleados</li>
                <li><strong>Técnica:</strong> Específica del cargo</li>
                <li><strong>Soft Skills:</strong> Habilidades blandas</li>
                <li><strong>Seguridad:</strong> Normas de seguridad laboral</li>
                <li><strong>Compliance:</strong> Cumplimiento normativo</li>
              </ul>

              <h4>Modalidades de Capacitación</h4>
              <ul>
                <li>Presencial en aula</li>
                <li>Virtual sincrónica</li>
                <li>E-learning asincrónico</li>
                <li>Capacitación en el puesto</li>
                <li>Mentoría y coaching</li>
              </ul>

              <h3>Gestión de Capacitaciones</h3>
              <p>
                Para gestionar una actividad de capacitación:
              </p>
              <ol>
                <li>Identifique las necesidades de capacitación</li>
                <li>Diseñe el programa de capacitación</li>
                <li>Seleccione los participantes</li>
                <li>Programe fechas y horarios</li>
                <li>Asigne recursos y facilitadores</li>
                <li>Ejecute la capacitación</li>
                <li>Evalúe los resultados</li>
                <li>Documente la certificación</li>
              </ol>
            </div>
          </Section>

          {/* Reportes de RRHH */}
          <Section id="reportes" title="Reportes de RRHH">
            <div className="content-block">
              <h3>Reportes Disponibles</h3>
              <p>
                El módulo de RRHH genera los siguientes reportes:
              </p>
              
              <h4>Reportes de Personal</h4>
              <ul>
                <li>Listado de empleados por departamento</li>
                <li>Información detallada de empleados</li>
                <li>Antigüedad y rotación de personal</li>
                <li>Distribución por edad y género</li>
                <li>Análisis de ausentismo</li>
              </ul>

              <h4>Reportes de Compensación</h4>
              <ul>
                <li>Análisis de salarios por cargo</li>
                <li>Comparativo salarial por departamento</li>
                <li>Evolución salarial por empleado</li>
                <li>Análisis de bonificaciones</li>
                <li>Proyecciones salariales</li>
              </ul>

              <h4>Reportes de Desarrollo</h4>
              <ul>
                <li>Plan de capacitación anual</li>
                <li>Evaluaciones de desempeño</li>
                <li>Plan de sucesión</li>
                <li>Análisis de competencias</li>
                <li>Reportes de compliance</li>
              </ul>

              <h3>Configuración de Reportes</h3>
              <p>
                Personalice los reportes según las necesidades:
              </p>
              <ol>
                <li>Configure los filtros por período</li>
                <li>Defina los grupos de análisis</li>
                <li>Establezca los formatos de presentación</li>
                <li>Configure la exportación automática</li>
                <li>Programe la generación periódica</li>
              </ol>
            </div>
          </Section>

          {/* Troubleshooting */}
          <Section id="troubleshooting" title="Troubleshooting y Solución de Problemas">
            <div className="content-block">
              <h3>Problemas Comunes y Soluciones</h3>
              
              <h4>Errores de Validación</h4>
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
                    <td>Empleado Duplicado</td>
                    <td>Empleado ya existe en el sistema</td>
                    <td>Número de identificación duplicado</td>
                    <td>Verificar identificación o usar alias</td>
                  </tr>
                  <tr>
                    <td>Valores Inválidos</td>
                    <td>Los valores asignados no son válidos</td>
                    <td>Configuración incorrecta</td>
                    <td>Revisar parámetros de validación</td>
                  </tr>
                  <tr>
                    <td>Documentos Faltantes</td>
                    <td>Documentos obligatorios no cargados</td>
                    <td>Documentación incompleta</td>
                    <td>Completar documentación requerida</td>
                  </tr>
                  <tr>
                    <td>Evaluación Pendiente</td>
                    <td>Evaluación de desempeño vencida</td>
                    <td>Evaluación no realizada</td>
                    <td>Programar evaluación inmediata</td>
                  </tr>
                  <tr>
                    <td>Capacitación Vencida</td>
                    <td>Capacitación obligatoria vencida</td>
                    <td>Capacitación no completada</td>
                    <td>Programar capacitación urgente</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Validaciones del Sistema</h4>
              <p>
                El sistema ERP Avanza incluye validaciones automáticas para:
              </p>
              <ul>
                <li><strong>Integridad de Datos:</strong> Verificación de campos obligatorios</li>
                <li><strong>Consistencia de Valores:</strong> Validación de parámetros salariales</li>
                <li><strong>Documentación:</strong> Control de documentos requeridos</li>
                <li><strong>Evaluaciones:</strong> Seguimiento de evaluaciones pendientes</li>
              </ul>
            </div>
          </Section>

          {/* Casos Especiales */}
          <Section id="casos-especiales" title="Casos Especiales y Excepciones">
            <div className="content-block">
              <h3>Manejo de Casos Especiales</h3>
              
              <h4>Casos de Contratación</h4>
              <ul>
                <li><strong>Contratación Temporal:</strong> Empleados por proyecto o temporada</li>
                <li><strong>Contratación a Tiempo Parcial:</strong> Jornadas reducidas</li>
                <li><strong>Contratación Remota:</strong> Trabajo desde casa o ubicación remota</li>
                <li><strong>Contratación Internacional:</strong> Empleados extranjeros</li>
              </ul>

              <h4>Casos de Gestión</h4>
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
                    <td>Cambio de Cargo</td>
                    <td>Promoción o cambio de funciones</td>
                    <td>Actualizar perfil y valores</td>
                    <td>Mantener historial</td>
                  </tr>
                  <tr>
                    <td>Transferencia</td>
                    <td>Cambio de departamento o ubicación</td>
                    <td>Actualizar asignaciones</td>
                    <td>Verificar permisos</td>
                  </tr>
                  <tr>
                    <td>Licencias</td>
                    <td>Ausencias temporales por diferentes motivos</td>
                    <td>Configurar período de licencia</td>
                    <td>Mantener beneficios</td>
                  </tr>
                  <tr>
                    <td>Reincorporación</td>
                    <td>Retorno después de ausencia prolongada</td>
                    <td>Reactivar perfil completo</td>
                    <td>Verificar documentación</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Integración */}
          <Section id="integracion" title="Integración con Otros Módulos">
            <div className="content-block">
              <h3>Sistema de Integración</h3>
              
              <h4>Integración con Nómina</h4>
              <ul>
                <li><strong>Datos del Empleado:</strong> Información personal y laboral sincronizada</li>
                <li><strong>Valores Salariales:</strong> Configuración automática de parámetros</li>
                <li><strong>Cambios Organizacionales:</strong> Actualización automática de estructura</li>
                <li><strong>Reportes Consolidados:</strong> Información unificada de personal</li>
              </ul>

              <h4>Integración con Contabilidad</h4>
              <ul>
                <li><strong>Distribución de Costos:</strong> Asignación automática por departamento</li>
                <li><strong>Centros de Costo:</strong> Clasificación automática de gastos</li>
                <li><strong>Presupuestos:</strong> Control de presupuestos por área</li>
                <li><strong>Reportes Financieros:</strong> Análisis de costos de personal</li>
              </ul>

              <h4>Funcionalidades de Integración</h4>
              <p>
                El ERP Avanza permite la integración automática entre módulos para:
              </p>
              <ul>
                <li><strong>Sincronización de Datos:</strong> Actualización automática entre módulos</li>
                <li><strong>Reportes Consolidados:</strong> Información unificada del sistema</li>
                <li><strong>Validaciones Cruzadas:</strong> Verificación de consistencia entre módulos</li>
                <li><strong>Auditoría Integrada:</strong> Trazabilidad completa de transacciones</li>
              </ul>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default RRHH;
