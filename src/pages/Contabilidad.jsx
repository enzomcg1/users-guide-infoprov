import React from 'react';
import Section from '../components/manual/Section';
import Table from '../components/manual/Table';

const Contabilidad = () => {
  return (
    <div className="manual-page">
      <div className="manual-sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Módulo de Contabilidad</h3>
          <p className="sidebar-subtitle">Navega por las secciones</p>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-sections">
            <li><a href="#generalidades" className="sidebar-section-link">Generalidades</a></li>
            <li><a href="#configuracion" className="sidebar-section-link">Configuración</a></li>
            <li><a href="#plan-cuentas" className="sidebar-section-link">Plan de Cuentas</a></li>
            <li><a href="#asientos" className="sidebar-section-link">Asientos Contables</a></li>
            <li><a href="#libros" className="sidebar-section-link">Libros Contables</a></li>
            <li><a href="#balance" className="sidebar-section-link">Balance General</a></li>
            <li><a href="#estado-resultados" className="sidebar-section-link">Estado de Resultados</a></li>
            <li><a href="#reportes" className="sidebar-section-link">Reportes Contables</a></li>
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
            <h1 className="module-main-title">Módulo de Contabilidad</h1>
            <p className="module-subtitle">Sistema contable integral y automatizado</p>
          </div>
          
          {/* Generalidades */}
          <Section id="generalidades" title="Generalidades del Sistema">
            <div className="content-block">
              <h3>Descripción General</h3>
              <p>
                El módulo de Contabilidad del ERP Avanza es el núcleo del sistema financiero, 
                diseñado para manejar todas las operaciones contables de la empresa de manera 
                integral y automatizada.
              </p>
              
              <h4>Características Principales</h4>
              <ul>
                <li><strong>Gestión Integral:</strong> Manejo completo del plan de cuentas y transacciones</li>
                <li><strong>Asientos Automáticos:</strong> Generación automática de asientos contables</li>
                <li><strong>Compliance Fiscal:</strong> Cumplimiento con normativas contables y fiscales</li>
                <li><strong>Reportes Avanzados:</strong> Generación de reportes financieros completos</li>
                <li><strong>Integración:</strong> Conexión con módulos de facturación, nómina e inventarios</li>
              </ul>

              <h4>Módulos Relacionados</h4>
              <div className="database-schema">
                <ul>
                  <li><strong>Facturación:</strong> Registro automático de ventas y compras</li>
                  <li><strong>Nómina:</strong> Registro automático de gastos de personal</li>
                  <li><strong>Inventarios:</strong> Valorización y movimientos de stock</li>
                  <li><strong>Bancos:</strong> Conciliación bancaria automática</li>
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
                <li><strong>Período Fiscal:</strong> Año fiscal y períodos contables</li>
                <li><strong>Moneda:</strong> Moneda base para transacciones contables</li>
                <li><strong>Zona Horaria:</strong> Configuración de horarios de trabajo</li>
              </ul>

              <h4>Parámetros Contables</h4>
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
                    <td>Período Contable</td>
                    <td>Frecuencia de cierre contable</td>
                    <td>Mensual</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Días del Período</td>
                    <td>Número de días del período contable</td>
                    <td>30</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Moneda Base</td>
                    <td>Moneda principal de la empresa</td>
                    <td>Peso Colombiano</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Monedas Extranjeras</td>
                    <td>Monedas adicionales permitidas</td>
                    <td>USD, EUR</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Factor de Conversión</td>
                    <td>Factor para conversión de monedas</td>
                    <td>Variable</td>
                    <td>Sí</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Configuración de Impuestos</h4>
              <ul>
                <li><strong>IVA:</strong> Porcentajes y bases de cálculo</li>
                <li><strong>Retención en la Fuente:</strong> Porcentajes y bases de retención</li>
                <li><strong>Impuestos Locales:</strong> Impuestos municipales y departamentales</li>
                <li><strong>Impuestos Nacionales:</strong> Impuestos del orden nacional</li>
              </ul>
            </div>
          </Section>

          {/* Plan de Cuentas */}
          <Section id="plan-cuentas" title="Plan de Cuentas">
            <div className="content-block">
              <h3>Estructura del Plan de Cuentas</h3>
              <p>
                El plan de cuentas está organizado siguiendo los principios contables 
                generalmente aceptados y las normativas locales:
              </p>
              
              <h4>Clasificación de Cuentas</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Clase</th>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Naturaleza</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Activos</td>
                    <td>1</td>
                    <td>Recursos económicos de la empresa</td>
                    <td>Débito</td>
                    <td>1100 - Caja y Bancos</td>
                  </tr>
                  <tr>
                    <td>Pasivos</td>
                    <td>2</td>
                    <td>Obligaciones y deudas de la empresa</td>
                    <td>Crédito</td>
                    <td>2100 - Proveedores</td>
                  </tr>
                  <tr>
                    <td>Patrimonio</td>
                    <td>3</td>
                    <td>Capital y utilidades retenidas</td>
                    <td>Crédito</td>
                    <td>3100 - Capital Social</td>
                  </tr>
                  <tr>
                    <td>Ingresos</td>
                    <td>4</td>
                    <td>Entradas de recursos económicos</td>
                    <td>Crédito</td>
                    <td>4100 - Ventas</td>
                  </tr>
                  <tr>
                    <td>Gastos</td>
                    <td>5</td>
                    <td>Salidas de recursos económicos</td>
                    <td>Débito</td>
                    <td>5100 - Gastos Administrativos</td>
                  </tr>
                </tbody>
              </Table>

              <h3>Creación de Cuentas</h3>
              <p>
                Para crear una nueva cuenta en el sistema:
              </p>
              <ol>
                <li>Acceda al menú "Contabilidad" → "Plan de Cuentas"</li>
                <li>Seleccione "Nueva Cuenta"</li>
                <li>Complete el código de la cuenta (debe ser único)</li>
                <li>Ingrese el nombre descriptivo de la cuenta</li>
                <li>Seleccione el tipo de cuenta (activo, pasivo, etc.)</li>
                <li>Configure si la cuenta es de movimiento o balance</li>
                <li>Guarde la información de la cuenta</li>
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
                    <td>Código de Cuenta</td>
                    <td>Texto</td>
                    <td>Único en el sistema</td>
                    <td>Duplicado de código</td>
                  </tr>
                  <tr>
                    <td>Nombre de Cuenta</td>
                    <td>Texto</td>
                    <td>No vacío, descriptivo</td>
                    <td>Nombre muy genérico</td>
                  </tr>
                  <tr>
                    <td>Tipo de Cuenta</td>
                    <td>Lista</td>
                    <td>Debe ser válido</td>
                    <td>Tipo no seleccionado</td>
                  </tr>
                  <tr>
                    <td>Naturaleza</td>
                    <td>Lista</td>
                    <td>Débito o Crédito</td>
                    <td>Naturaleza incorrecta</td>
                  </tr>
                  <tr>
                    <td>Cuenta Padre</td>
                    <td>Referencia</td>
                    <td>Debe existir</td>
                    <td>Cuenta padre inexistente</td>
                  </tr>
                </tbody>
              </Table>

              <h3>Jerarquía de Cuentas</h3>
              <p>
                El sistema permite crear cuentas principales y subcuentas para una 
                mejor organización:
              </p>
              <ul>
                <li>Cuentas de primer nivel (ej: 1100 - Caja y Bancos)</li>
                <li>Subcuentas de segundo nivel (ej: 1101 - Caja)</li>
                <li>Subcuentas de tercer nivel (ej: 1101.01 - Caja Principal)</li>
              </ul>

              <h4>Ejemplos de Estructura</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Nivel</th>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1100</td>
                    <td>Caja y Bancos</td>
                    <td>Cuenta principal de efectivo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1101</td>
                    <td>Caja</td>
                    <td>Efectivo en caja</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1101.01</td>
                    <td>Caja Principal</td>
                    <td>Caja de la oficina principal</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1102</td>
                    <td>Bancos</td>
                    <td>Cuentas bancarias</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1102.01</td>
                    <td>Banco Principal</td>
                    <td>Cuenta corriente principal</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Asientos Contables */}
          <Section id="asientos" title="Asientos Contables">
            <div className="content-block">
              <h3>Tipos de Asientos</h3>
              <p>
                El sistema maneja diferentes tipos de asientos contables:
              </p>
              
              <h4>Clasificación de Asientos</h4>
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
                    <td>Asientos de Apertura</td>
                    <td>Saldos iniciales del período</td>
                    <td>Al inicio del período</td>
                    <td>Saldo de caja y bancos</td>
                  </tr>
                  <tr>
                    <td>Asientos de Operación</td>
                    <td>Transacciones del día a día</td>
                    <td>Diario</td>
                    <td>Ventas, compras, pagos</td>
                  </tr>
                  <tr>
                    <td>Asientos de Ajuste</td>
                    <td>Correcciones y ajustes contables</td>
                    <td>Al cierre del período</td>
                    <td>Depreciación, provisiones</td>
                  </tr>
                  <tr>
                    <td>Asientos de Cierre</td>
                    <td>Cierre de cuentas de resultado</td>
                    <td>Al cierre del período</td>
                    <td>Cierre de ingresos y gastos</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Asientos Automáticos</h4>
              <ul>
                <li><strong>Facturación:</strong> Registro automático de ventas y compras</li>
                <li><strong>Pagos:</strong> Registro de pagos a proveedores y cobros de clientes</li>
                <li><strong>Nómina:</strong> Registro automático de gastos de personal</li>
                <li><strong>Depreciación:</strong> Cálculo automático de depreciación de activos</li>
                <li><strong>Intereses:</strong> Cálculo de intereses bancarios</li>
              </ul>

              <h3>Creación de Asientos</h3>
              <p>
                Para crear un asiento contable manual:
              </p>
              <ol>
                <li>Acceda al menú "Contabilidad" → "Asientos Contables"</li>
                <li>Seleccione "Nuevo Asiento"</li>
                <li>Ingrese la fecha del asiento</li>
                <li>Agregue las líneas del asiento (debe y haber)</li>
                <li>Verifique que el asiento esté balanceado</li>
                <li>Agregue una descripción del asiento</li>
                <li>Guarde y apruebe el asiento</li>
              </ol>

              <h4>Estructura de un Asiento</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Descripción</th>
                    <th>Obligatorio</th>
                    <th>Validación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fecha</td>
                    <td>Fecha del asiento contable</td>
                    <td>Sí</td>
                    <td>Dentro del período abierto</td>
                  </tr>
                  <tr>
                    <td>Número</td>
                    <td>Número secuencial del asiento</td>
                    <td>Sí</td>
                    <td>Único en el período</td>
                  </tr>
                  <tr>
                    <td>Descripción</td>
                    <td>Explicación del asiento</td>
                    <td>Sí</td>
                    <td>Mínimo 10 caracteres</td>
                  </tr>
                  <tr>
                    <td>Referencia</td>
                    <td>Documento de respaldo</td>
                    <td>No</td>
                    <td>Opcional</td>
                  </tr>
                  <tr>
                    <td>Centro de Costo</td>
                    <td>Centro de costo asociado</td>
                    <td>No</td>
                    <td>Si aplica</td>
                  </tr>
                </tbody>
              </Table>

              <h3>Validaciones del Sistema</h3>
              <p>
                El sistema valida automáticamente:
              </p>
              <ul>
                <li>Que el asiento esté balanceado (debe = haber)</li>
                <li>Que las cuentas existan en el plan de cuentas</li>
                <li>Que las fechas sean válidas</li>
                <li>Que los montos sean numéricos</li>
                <li>Que las cuentas estén activas</li>
                <li>Que no haya cuentas bloqueadas</li>
              </ul>

              <h4>Ejemplo de Asiento Contable</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Cuenta</th>
                    <th>Descripción</th>
                    <th>Débito</th>
                    <th>Crédito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1101 - Caja</td>
                    <td>Pago en efectivo</td>
                    <td>$1,000,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4100 - Ventas</td>
                    <td>Venta de mercancía</td>
                    <td></td>
                    <td>$1,000,000</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td></td>
                    <td><strong>$1,000,000</strong></td>
                    <td><strong>$1,000,000</strong></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Libros Contables */}
          <Section id="libros" title="Libros Contables">
            <div className="content-block">
              <h3>Libros Principales</h3>
              <p>
                El sistema genera automáticamente los siguientes libros contables:
              </p>
              
              <h4>Libro Diario</h4>
              <p>
                Registro cronológico de todas las transacciones contables:
              </p>
              <ul>
                <li>Fecha de la transacción</li>
                <li>Número de asiento</li>
                <li>Cuentas involucradas</li>
                <li>Monto de la transacción</li>
                <li>Descripción del asiento</li>
              </ul>

              <h4>Libro Mayor</h4>
              <p>
                Resumen de movimientos por cuenta:
              </p>
              <ul>
                <li>Código y nombre de la cuenta</li>
                <li>Saldo inicial del período</li>
                <li>Movimientos de débito y crédito</li>
                <li>Saldo final del período</li>
              </ul>

              <h3>Configuración de Libros</h3>
              <p>
                Configure los parámetros de los libros contables:
              </p>
              <ol>
                <li>Defina el formato de impresión</li>
                <li>Configure los encabezados y pies de página</li>
                <li>Establezca los filtros por período</li>
                <li>Configure la numeración automática</li>
              </ol>
            </div>
          </Section>

          {/* Balance General */}
          <Section id="balance" title="Balance General">
            <div className="content-block">
              <h3>Estructura del Balance</h3>
              <p>
                El Balance General muestra la situación financiera de la empresa en una fecha específica:
              </p>
              
              <h4>Activos</h4>
              <ul>
                <li><strong>Activos Corrientes:</strong> Efectivo, cuentas por cobrar, inventarios</li>
                <li><strong>Activos No Corrientes:</strong> Propiedades, equipos, intangibles</li>
              </ul>

              <h4>Pasivos</h4>
              <ul>
                <li><strong>Pasivos Corrientes:</strong> Cuentas por pagar, préstamos a corto plazo</li>
                <li><strong>Pasivos No Corrientes:</strong> Préstamos a largo plazo, bonos</li>
              </ul>

              <h4>Patrimonio</h4>
              <ul>
                <li>Capital social</li>
                <li>Utilidades retenidas</li>
                <li>Reservas</li>
              </ul>

              <h3>Generación del Balance</h3>
              <p>
                Para generar el Balance General:
              </p>
              <ol>
                <li>Acceda al menú "Reportes" → "Balance General"</li>
                <li>Seleccione la fecha de corte</li>
                <li>Configure las opciones de presentación</li>
                <li>Ejecute el reporte</li>
                <li>Revise y exporte según sea necesario</li>
              </ol>
            </div>
          </Section>

          {/* Estado de Resultados */}
          <Section id="estado-resultados" title="Estado de Resultados">
            <div className="content-block">
              <h3>Componentes del Estado de Resultados</h3>
              <p>
                El Estado de Resultados muestra la rentabilidad de la empresa en un período:
              </p>
              
              <h4>Ingresos</h4>
              <ul>
                <li>Ventas de bienes y servicios</li>
                <li>Otros ingresos operativos</li>
                <li>Ingresos financieros</li>
              </ul>

              <h4>Gastos</h4>
              <ul>
                <li>Costos de ventas</li>
                <li>Gastos operativos</li>
                <li>Gastos financieros</li>
                <li>Gastos administrativos</li>
              </ul>

              <h3>Cálculo de Utilidades</h3>
              <p>
                El sistema calcula automáticamente:
              </p>
              <ul>
                <li>Utilidad bruta (ingresos - costos de ventas)</li>
                <li>Utilidad operativa (utilidad bruta - gastos operativos)</li>
                <li>Utilidad antes de impuestos</li>
                <li>Utilidad neta</li>
              </ul>
            </div>
          </Section>

          {/* Reportes Contables */}
          <Section id="reportes" title="Reportes Contables">
            <div className="content-block">
              <h3>Reportes Principales</h3>
              <p>
                El módulo de contabilidad genera los siguientes reportes:
              </p>
              
              <h4>Reportes Financieros</h4>
              <ul>
                <li>Balance General</li>
                <li>Estado de Resultados</li>
                <li>Estado de Flujo de Efectivo</li>
                <li>Estado de Cambios en el Patrimonio</li>
              </ul>

              <h4>Reportes de Análisis</h4>
              <ul>
                <li>Análisis de ratios financieros</li>
                <li>Análisis de tendencias</li>
                <li>Comparativo entre períodos</li>
                <li>Análisis de rentabilidad</li>
              </ul>

              <h4>Reportes Fiscales</h4>
              <ul>
                <li>Libro de compras</li>
                <li>Libro de ventas</li>
                <li>Reportes para impuestos</li>
                <li>Declaraciones fiscales</li>
              </ul>

              <h3>Configuración de Reportes</h3>
              <p>
                Personalice los reportes según las necesidades de la empresa:
              </p>
              <ol>
                <li>Configure los formatos de presentación</li>
                <li>Defina los filtros por período y cuenta</li>
                <li>Establezca los encabezados personalizados</li>
                <li>Configure la exportación automática</li>
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
                    <td>Asiento Desbalanceado</td>
                    <td>El asiento no está balanceado</td>
                    <td>Débito ≠ Crédito</td>
                    <td>Verificar totales de débito y crédito</td>
                  </tr>
                  <tr>
                    <td>Cuenta Inexistente</td>
                    <td>La cuenta no existe en el plan</td>
                    <td>Código de cuenta incorrecto</td>
                    <td>Verificar código o crear la cuenta</td>
                  </tr>
                  <tr>
                    <td>Período Cerrado</td>
                    <td>No se puede modificar el período</td>
                    <td>Período ya cerrado</td>
                    <td>Abrir el período o crear asiento de ajuste</td>
                  </tr>
                  <tr>
                    <td>Cuenta Bloqueada</td>
                    <td>La cuenta está bloqueada</td>
                    <td>Cuenta inactiva o bloqueada</td>
                    <td>Activar la cuenta o usar alternativa</td>
                  </tr>
                  <tr>
                    <td>Fecha Inválida</td>
                    <td>Fecha fuera del período</td>
                    <td>Fecha incorrecta</td>
                    <td>Verificar fecha del período</td>
                  </tr>
                </tbody>
              </Table>

              <h4>Validaciones del Sistema</h4>
              <p>
                El sistema ERP Avanza incluye validaciones automáticas para:
              </p>
              <ul>
                <li><strong>Integridad de Datos:</strong> Verificación de campos obligatorios</li>
                <li><strong>Consistencia Contable:</strong> Validación de asientos balanceados</li>
                <li><strong>Períodos Contables:</strong> Control de apertura y cierre</li>
                <li><strong>Plan de Cuentas:</strong> Verificación de cuentas activas</li>
              </ul>
            </div>
          </Section>

          {/* Casos Especiales */}
          <Section id="casos-especiales" title="Casos Especiales y Excepciones">
            <div className="content-block">
              <h3>Manejo de Casos Especiales</h3>
              
              <h4>Asientos de Ajuste</h4>
              <ul>
                <li><strong>Corrección de Errores:</strong> Asientos de reversión y corrección</li>
                <li><strong>Provisiones:</strong> Cálculo de provisiones contables</li>
                <li><strong>Depreciación:</strong> Cálculo de depreciación de activos</li>
                <li><strong>Ajustes de Cierre:</strong> Cierre de cuentas de resultado</li>
              </ul>

              <h4>Casos de Liquidación</h4>
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
                    <td>Cambio de Período</td>
                    <td>Cambio de período contable</td>
                    <td>Cierre del período anterior</td>
                    <td>Verificar saldos de cierre</td>
                  </tr>
                  <tr>
                    <td>Reversión de Asientos</td>
                    <td>Cancelación de asientos erróneos</td>
                    <td>Crear asiento de reversión</td>
                    <td>Mantener auditoría</td>
                  </tr>
                  <tr>
                    <td>Asientos de Cierre</td>
                    <td>Cierre de cuentas de resultado</td>
                    <td>Transferir a cuenta de capital</td>
                    <td>Verificar totales</td>
                  </tr>
                  <tr>
                    <td>Asientos de Apertura</td>
                    <td>Apertura del nuevo período</td>
                    <td>Transferir saldos de cierre</td>
                    <td>Verificar consistencia</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Section>

          {/* Integración */}
          <Section id="integracion" title="Integración con Otros Módulos">
            <div className="content-block">
              <h3>Sistema de Integración</h3>
              
              <h4>Integración con Facturación</h4>
              <ul>
                <li><strong>Ventas:</strong> Registro automático de ingresos y cuentas por cobrar</li>
                <li><strong>Compras:</strong> Registro automático de gastos y cuentas por pagar</li>
                <li><strong>IVA:</strong> Cálculo automático de impuestos</li>
                <li><strong>Retenciones:</strong> Cálculo de retenciones en la fuente</li>
              </ul>

              <h4>Integración con Nómina</h4>
              <ul>
                <li><strong>Gastos de Personal:</strong> Registro automático de nómina</li>
                <li><strong>Prestaciones:</strong> Cálculo de prestaciones sociales</li>
                <li><strong>Impuestos:</strong> Retenciones de empleados</li>
                <li><strong>Centros de Costo:</strong> Distribución por departamentos</li>
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

export default Contabilidad;
