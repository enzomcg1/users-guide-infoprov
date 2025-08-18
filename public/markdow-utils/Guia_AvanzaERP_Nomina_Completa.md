# Infoprov EAS - Guía de Usuario Avanza Payroll

## Nómina

La aplicación Nómina de Avanza ERP tiene como objetivo gestionar la relación de la compañía con cada una de las personas empleadas, desde su incorporación hasta su desvinculación. Las actividades se subdividen en los siguientes grupos:

* **Empleados**: Funciones para mantener actualizada la información de cada persona empleada.
* **Asistencia**: Funciones para registrar y controlar la asistencia de las personas a sus puestos de trabajo.
* **Cuentas y Movimientos**: Funciones para mantener la información de las cuentas y los movimientos de haberes y descuentos de los empleados.
* **Pagos de Salario**: Actividades para procesar los pagos de haberes a las personas según los periodos establecidos.
* **Desvinculación**: Funciones para procesar los eventos de desvinculación de las personas de la compañía.

---

## Empleados

El mantenimiento de la información de los empleados se realiza a través de funciones que permiten ingresar y actualizar todos los datos de cada persona. La información se subdivide en:

* **Legajo de empleado**: Datos personales, posición, marcaciones, dirección, ingreso/egreso, operaciones y relaciones.
* **Información complementaria**: Grupo familiar, educación, propiedades, vehículos, referencias, historia laboral, historia clínica e historia salarial.

### Legajo de Empleado

A continuación, se detallan las indicaciones para el mantenimiento de los datos del legajo de un empleado:

* **Datos Personales**:
    * **Apellidos**: Apellidos del empleado.
    * **Nombres**: Nombres del empleado.
    * **Nombre Completo**: Concatenación de apellidos y nombres, generado automáticamente.
    * **No. Empleado**: Número de legajo asignado al momento de su incorporación, único en el sistema.
    * **Activo**: Interruptor que habilita el legajo para eventos en la aplicación.
    * **Estado**: Mantenido de forma autónoma por el sistema. Puede ser: A-DESPEDIR, DESPEDIDO, EN-PRUEBA, FALLECIDO, JUBILADO, REGULAR, RENUNCIANTE, RETIRADO, SUSPENDIDO.
    * **No. Identidad**: Número de documento de identidad.
    * **Sucursal**: Sucursal de la compañía a la que pertenece el empleado.
    * **Genero**: Masculino o femenino.
    * **Titulo**: Señor, señora, doctor, técnico, etc.
    * **Estado Civil**: Estado civil del empleado.
    * **Fecha de Nacimiento**: Fecha de nacimiento del empleado.
    * **Tipo de Sangre**: Grupo sanguíneo del empleado.
    * **E-mail**: Dirección de correo electrónico personal del empleado.

* **Posición**:
    * **Profesion**: Profesión principal del empleado.
    * **Departamento**: Departamento de la compañía donde desempeña sus funciones.
    * **Seccion**: Sección de la compañía donde desempeña sus funciones.
    * **Horario**: Turno de trabajo regular.
    * **Categoria**: Criterio de agrupación de empleados para determinar su ubicación en la jerarquía.
    * **Posicion**: Puesto de trabajo en la organización.
    * **Tipo Horario**: Continuado o cortado.
    * **Clasificacion Legal**: Altamente especializado, Calificado, No calificado, Aprendiz, Personal Doméstico.
    * **Vacaciones Pagas**: Interruptor para determinar si el empleado tiene el beneficio de percibir su salario regular durante las vacaciones.
    * **Dias Libres**: Conjunto de siete interruptores para determinar los días libres semanales.

* **Marcaciones Obligatorias**:
    * **Entrada**: Obligación de marcar el inicio de la jornada.
    * **Salida Receso 1**: Obligación de marcar la salida al primer receso.
    * **Vuelta Receso 1**: Obligación de marcar el regreso del primer receso.
    * **Salida Cortado**: Obligación de marcar la salida de horario cortado.
    * **Vuelta Cortado**: Obligación de marcar el regreso de horario cortado.
    * **Salida Almuerzo**: Obligación de marcar la salida para almuerzo.
    * **Vuelta Almuerzo**: Obligación de marcar el regreso del almuerzo.
    * **Salida Receso 2**: Obligación de marcar la salida al segundo receso.
    * **Vuelta Receso 2**: Obligación de marcar el regreso del segundo receso.
    * **Salida**: Obligación de marcar el fin de la jornada.

* **Direccion**:
    * **Direccion**: Domicilio particular del empleado.
    * **Codigo Area**: Código de área telefónica.
    * **Situacion Residencia**: Vivienda propia, Alquiler, Usufructo informal.
    * **Telefono**: Número de teléfono principal.
    * **Fecha Llegada al Pais**: Fecha de arribo al país si es extranjero.
    * **Pais**: País de origen.
    * **Ciudad**: Ciudad de residencia actual.
    * **Barrio**: Barrio de residencia actual.
    * **Pais Residencia**: País de residencia actual.

* **Ingreso/Egreso**:
    * **Fecha de Admision**: Fecha de incorporación oficial a la nómina.
    * **Fecha de Cese de Actividades**: Fecha en que se produjo el cese de actividades.
    * **Fecha de Desvinculacion**: Fecha oficial de desvinculación.
    * **Tipo Desvinculacion**: Tipo o clase de desvinculación.
    * **Fecha Notif. Renuncia**: Fecha oficial de presentación de renuncia.
    * **Fec. Notif. Desvinculacion**: Fecha oficial de comunicación de desvinculación por parte de la compañía.

* **Operaciones**:
    * **Periodo de Pago**: Hora, Día, Semana, Quincena, Mes.
    * **Salario Base**: Importe del salario para los cálculos de haberes.
    * **Salario por Dia**: Salario base dividido por 30.
    * **Salario por Hora**: Salario por día dividido por 8.
    * **Metodo de Pago**: EFECTIVO, CHEQUE, CREDITO-BANCARIO.
    * **Salario Plus**: Importe de salario adicional.
    * **Tipo Salario Plus**: IMPORTE o PORC-SALARIO-BASE.
    * **No. Seguro Social**: Número de seguro social.
    * **No. Cuenta Bancaria**: Número de cuenta bancaria del empleado.
    * **Sucursal Banco**: Sucursal bancaria de la cuenta del empleado.
    * **Linea Credito Mensual**: Importe máximo mensual de compras permitido.
    * **Cant. Max. Operac. X Mes**: Cantidad máxima de operaciones de compra por mes.
    * **Monto Max. Credito x Dia**: Importe máximo diario de crédito.
    * **Cant. Max. Operac. X Dia**: Cantidad máxima de operaciones de compra por día.

* **Relaciones**:
    * **Cliente**: Identificador que vincula a un empleado con un cliente.
    * **Proveedor**: Identificador que vincula a un empleado con un proveedor.

---

### Información Complementaria

Detalle sobre el mantenimiento de la información complementaria de un empleado:

* **Grupo Familiar**:
    * **Nombres**: Nombres del familiar o pariente.
    * **Apellidos**: Apellidos del familiar o pariente.
    * **Grado Familiar**: Relación de parentesco.
    * **Direccion**: Dirección del familiar o pariente.
    * **Telefonos**: Números de teléfono del familiar o pariente.
    * **Estado Civil**: Estado civil del familiar o pariente.
    * **Sexo**: Sexo del familiar o pariente.
    * **Fecha Nacimiento**: Fecha de nacimiento del familiar o pariente.
    * **Dependiente**: Indicador (verdadero/falso) que determina si la persona depende económicamente del empleado.
    * **Persona Capac. Difrnts.**: Indicador (verdadero/falso) para personas con capacidades diferentes.

* **Educacion**:
    * **Institucion**: Institución educativa donde el empleado se formó.
    * **Nivel**: Nivel de formación académica.
    * **Año Desde**: Año de inicio de estudios.
    * **Año Hasta**: Año de finalización de estudios.

* **Bienes**:
    * **Tipo de Bien**: Tipo de bien inmueble declarado.
    * **Descripcion**: Descripción del bien inmueble.
    * **Activo**: Interruptor que habilita el bien inmueble.
    * **Fecha Declaracion**: Fecha de declaración del bien.
    * **Valor Original**: Valor de adquisición del bien.
    * **Valor Actual**: Valor actual del bien.
    * **Direccion**: Dirección donde se encuentra el bien.
    * **Tipo Vivienda**: Clasificación del bien inmueble.
    * **Barrio**: Barrio donde se encuentra el bien.
    * **Ciudad**: Ciudad donde se encuentra el bien.
    * **Pais**: País donde se encuentra el bien.
    * **Cta. Catastral No.**: Número de cuenta en el registro de propiedades.
    * **Manzana No.**: Número de manzana o bloque.
    * **Lote No.**: Número de lote.

* **Vehiculo**:
    * **Tipo de Vehiculo**: Tipo de vehículo declarado.
    * **Marca**: Marca del vehículo.
    * **Modelo**: Modelo del vehículo.
    * **Año**: Año de fabricación.
    * **Activo**: Interruptor que habilita el vehículo.
    * **Color**: Color predominante de la carrocería.
    * **Matricula No.**: Número de matrícula.
    * **Tipo Vehiculo**: Clase general del vehículo.
    * **Fecha Declaracion**: Fecha de declaración del vehículo.
    * **Chasis No.**: Número de chasis.
    * **No. Serie Motor**: Número de serie del motor.
    * **Valor Original**: Valor de adquisición del vehículo.
    * **Valor Actual**: Valor actual del vehículo.
    * **Cilindradas**: Cantidad de cilindradas (para motocicletas).
    * **Descripcion**: Descripción explicativa del vehículo.

* **Referencias Personales**:
    * **Apellidos**: Apellidos de la persona de referencia.
    * **Nombres**: Nombres de la persona de referencia.
    * **Titulo**: Título de la persona.
    * **Direccion**: Dirección de la persona.
    * **Telefonos**: Números de teléfono de la persona.

* **Historial de Empleos**:
    * **Empresa**: Empresa u organización anterior.
    * **Desde**: Fecha de inicio de servicios en la empresa.
    * **Hasta**: Fecha de finalización de servicios.
    * **Cargo Ocupado**: Cargo ocupado.
    * **Actividades Principales**: Lista de actividades principales desempeñadas.
    * **Motivo Salida**: Motivo de finalización de la relación laboral.
    * **Nombre Jefe**: Nombre del superior directo.
    * **Monto Salario**: Salario percibido.

* **Historial Clinico**:
    * **Evento**: Evento de salud (enfermedad, accidente, adicción, etc.).
    * **Año Desde**: Año de inicio del evento.
    * **Mes Desde**: Mes de inicio del evento.
    * **Año Hasta**: Año de finalización del evento.
    * **Mes Hasta**: Mes de finalización del evento.

* **Historial de Salarios**:
    * **Tipo de Valor**: Tipo de valor registrado en el historial.
    * **Valor**: Valor o importe del registro historial de salario.
    * **Fecha Desde**: Fecha de inicio de vigencia del valor.
    * **Fecha Hasta**: Fecha de fin de vigencia del valor.

---

## Transición de Estados de Empleados

Al crear el legajo de un empleado, el sistema asigna el estado **EN-PRUEBA** si la diferencia entre la fecha actual y la fecha de ingreso es menor a los días del período de prueba. De lo contrario, se asigna el estado **REGULAR**.

Una vez finalizado el período de prueba, un proceso agendado diariamente cambia automáticamente el estado de **EN-PRUEBA** a **REGULAR** para aquellos legajos cuya fecha de ingreso ya excede el período de prueba.

---

## Asistencia

Esta sección de la aplicación gestiona la información de la asistencia de todo el personal. Es fundamental para la liquidación de haberes. La administración de la asistencia incluye:

* Asistencia diaria.
* Días libres.
* Licencias.
* Suspensiones.
* Vacaciones.

### Proceso de Generación del Resumen de Asistencia

Los actores involucrados son el **Empleado** (que marca sus horarios), el **Puesto de Entrada** (donde el personal de seguridad registra las entradas/salidas) y la **Administración** (que puede ingresar los datos de forma manual).

Las actividades del proceso son:

* **Generar Detalles de Marcación**: Crea el detalle de marcación de cada empleado, que sirve para construir el resumen de asistencia. Los datos se pueden obtener de los dispositivos de marcación de Avanza o de productos de terceros.
* **Generar Resumen de Marcación**: Construye el resumen de marcación a partir del detalle. Determina el turno, las horas de entrada/salida y las anomalías (llegadas tardías, salidas anticipadas, etc.).

---

## Pagos de Salario

Este grupo de actividades procesa los pagos de haberes. La actividad central es el procesamiento de la **Planilla de Salarios**.

### Requisitos previos para la Planilla de Salarios:

* **Generación de resumen de asistencia**: Se realiza automáticamente a diario y obtiene la información de asistencia y novedades de marcación.
* **Generación de resumen de horas nocturnas**: Obtiene la cantidad y el importe total de horas trabajadas en horario nocturno.
* **Generación de resumen de horas extras**: Crea el registro de horas extras por empleado y fecha.
* **Generación de resumen de movimientos**: Tiene como objetivo obtener los movimientos de haberes y descuentos.
* **Generación de planillas de adelantos**: Obtiene el importe de los anticipos de salario otorgados.

### Procesamiento de Horas Extraordinarias

Obtiene la información de tiempo extraordinario trabajado. Se procesan los registros de horas extras que no hayan sido rechazados, que estén en estado APROBADO o INGRESADO, y que tengan la fecha dentro del rango de la planilla.

Se agrega la siguiente información al ítem de planilla:

* **Cantidad Horas 50%**: Horas extras con 50% de recargo.
* **Importe Horas 50%**: Importe total correspondiente.
* **Cantidad Horas 100%**: Horas extras con 100% de recargo.
* **Importe Horas 100%**: Importe total correspondiente.
* **Cantidad Horas 130%**: Horas extras con 130% de recargo.
* **Importe Horas 130%**: Importe total correspondiente.
* **Importe Total**: Suma de los importes con recargo.

---

### Procesamiento de Movimientos de Nómina

Obtiene el importe de movimientos de haberes y descuentos clasificado por clase de movimiento.

* **Movimientos de ingreso manual**: Introducidos directamente en el sistema.
* **Movimientos generados automáticamente**: Corresponden a compromisos, deudas, multas, etc..

---

### Planillas de Adelanto de Salarios

Esta herramienta permite gestionar los anticipos de salario concedidos a los empleados.

El ciclo de vida de una planilla de adelantos comprende las siguientes actividades:

1.  **Crear la planilla**: Se genera la información del encabezado, que incluye el número, la sucursal, la fecha, el método de pago y el código de pago.
2.  **Generar los ítems de la planilla**: Se crean los registros de anticipo para cada empleado y se asocian a la planilla.
3.  **Confirmar la planilla**: Tarea de control para revisar la planilla y dejar los registros y la planilla en estado **CONFIRMADO**.
4.  **Desembolsar la planilla**: Genera automáticamente las órdenes de desembolso.
5.  **Imprimir los recibos de pago**: Imprime los recibos a ser firmados por los empleados.

---

## Mantenimiento de Ítems de Planilla de Adelantos

Ofrece funciones para modificar los ítems de la planilla:

* **Modificar**: Permite cambiar el importe de un registro de adelanto específico.
* **Actualizar**: Actualiza los datos de desembolso de los registros de adelanto.

---

## Otros Conceptos de la Nómina

* **Importe de Anticipos de Salario**: Importe total de anticipos percibidos por el empleado.
* **Minutas (Compra de Alimentos)**: Suma de los valores de las transacciones de descuento de clase **COMPRA-ALIMENTOS** y concepto **MINUTAS**.
* **Embargo Salarial**: Suma de los valores de las transacciones de descuento de clase **EMBARGO-SALARIO**.
* **Marcaciones No Realizadas**: Cantidad total de minutos de penalización por la no realización de marcaciones.
* **Horas de Ausencia**: Suma de minutos de llegadas tardías, retrasos en vueltas de recesos y penalización por no marcaciones.
* **Importe Llegadas Tardías**: Importe calculado en base a los minutos de llegadas tardías al inicio de la jornada.

---