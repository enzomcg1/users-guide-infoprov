# Contabilidad - Guía de Usuario Avanza ERP General Ledger

## Proceso de Contabilización de Operaciones

[cite_start]Avanza ERP cuenta con un **Motor de Generación de Sub-diario de Asientos Contables** cuya función es generar los sub-diarios de asientos de las operaciones de los distintos módulos sujetas a contabilización[cite: 1].

[cite_start]Un sub-diario de asiento es una copia contable de una transacción realizada por la organización[cite: 1]. [cite_start]A cada transacción le corresponde un sub-diario contable, aunque algunas operaciones pueden generar más de un registro sub-diario[cite: 1].

### Mecanismo de registración contable

[cite_start]Los sub-diarios de asiento se generan automáticamente cuando se confirma la transacción[cite: 1]. [cite_start]Para ello, el motor de sub-diario verifica la transacción y aplica la plantilla de asientos correspondiente, obteniendo las cuentas contables y los valores de la operación para completar el asiento[cite: 1]. [cite_start]Las cuentas contables pueden obtenerse directamente de la transacción o de sus relaciones, como familia o categoría[cite: 1]. [cite_start]Si el proceso es exitoso, se genera un registro sub-diario completo y la transacción es marcada con un identificador único[cite: 1].

[cite_start]Si el motor no encuentra las cuentas contables o los valores necesarios, generará un registro de errores[cite: 1].

### Problemas en la generación de sub-diarios de asientos

[cite_start]En caso de que el sub-diario no se haya podido generar, Avanza ERP ofrece mecanismos auxiliares para la creación de los mismos[cite: 1]. El procedimiento para solucionar estos inconvenientes es el siguiente:
1.  [cite_start]Completar las cuentas contables según la plantilla de asientos[cite: 1].
2.  [cite_start]Verificar la consistencia de la transacción[cite: 1].
3.  [cite_start]Ejecutar la generación del sub-diario para la transacción[cite: 1].

La generación del sub-diario puede ser de dos maneras:
* [cite_start]**Procesamiento por lote**: Genera registros de sub-diario para varias transacciones de un tipo determinado dentro de un rango de fechas[cite: 1]. [cite_start]Es útil cuando varias transacciones quedaron sin asiento por la falta de una cuenta contable[cite: 1]. [cite_start]Los grupos de asientos se organizan por aplicación y por grupo dentro de cada una[cite: 1].
* [cite_start]**Procesamiento individual**: Genera un registro de sub-diario para una transacción específica[cite: 1]. [cite_start]Se recomienda cuando se han modificado datos de una transacción y es necesario re-generar su sub-diario, o cuando no se generó el sub-diario en el momento de la confirmación[cite: 1].

---

## Creación de Cuentas Contables

[cite_start]Avanza ERP dispone de un asistente para la creación de cuentas contables utilizando una plantilla que define los segmentos del número de cuenta[cite: 2]. [cite_start]Esta plantilla se define una única vez y no puede ser modificada después de crear la primera cuenta[cite: 2].

### Atributos de los segmentos:
* **Tipo de Cuenta**: El tipo de elemento al que corresponde el segmento. [cite_start]Para cuentas contables naturales, el valor es siempre "CUENTA-CONTABLE"[cite: 2].
* [cite_start]**Nombre de Segmento**: Una etiqueta que identifica el tipo de elemento y su jerarquía[cite: 2].
* [cite_start]**Número de Segmento**: El número de orden que ocupa el segmento en el número de cuenta[cite: 2].
* **Longitud Segmento**: La cantidad de caracteres que debe tener el segmento. [cite_start]Si no se cumple la regla, se deben agregar ceros a la izquierda[cite: 2].

### Asistente de Creación de Cuentas
[cite_start]El asistente utiliza la configuración de los segmentos para construir la estructura jerárquica de las cuentas[cite: 2]. Permite crear cuentas de dos maneras:
* [cite_start]Como hermana de una cuenta[cite: 2].
* [cite_start]Como hija de una cuenta[cite: 2].

[cite_start]La creación de cuentas por derivación de atributos de una cuenta hermana permite copiar los atributos y crear una nueva cuenta con el mismo nivel y propiedades comunes[cite: 2]. [cite_start]El asistente toma la base del número de cuenta y el mayor valor del último segmento de las cuentas hermanas, le agrega la unidad y completa con ceros para obtener el siguiente número secuencial[cite: 2].

### Administración de Periodos Contables

[cite_start]Avanza ERP permite determinar el marco de tiempo para la gestión contable y administrativa, organizándolo en ejercicios y periodos contables[cite: 1].

* [cite_start]**Ejercicios contables**: Son conjuntos de periodos contables que corresponden a un ciclo de gestión (ej. año fiscal)[cite: 1].
* [cite_start]**Periodos contables**: Son las fracciones en las que se divide un ejercicio contable, como cada mes[cite: 1].

[cite_start]Tanto los registros contables como las operaciones solo pueden ser ingresados, modificados o anulados en periodos contables que estén abiertos[cite: 1].

[cite_start]El ciclo de vida de un ejercicio o periodo contable es: **NUNCA ABIERTO** → **ABIERTO** → **CERRADO**[cite: 1]. [cite_start]Ambos pueden ser re-abiertos por usuarios con la autorización pertinente[cite: 1].

---

## Tablas de Contabilidad

### [cite_start]Plantilla de Asientos [cite: 1]

| Grupo | Id. | Código | Descripción |
|---|---|---|---|
| ANTICIPOS-CLIENTES | 6 | ANTICIPO-VENTAS | Anticipos de clientes |
| ANTICIPOS-PROVEEDORES | 10 | ANTICIPO-PROVEEDOR | Anticipos a proveedores |
| APERTURA | 21 | APERTURA-EJERCICIO | Apertura de ejercicio contable |
| COBRANZAS | 7 | COBRANZA-CONTADO | Cobranza de facturas contado |
| | 8 | COBRANZA-CREDITO | Cobranza de facturas crédito |
| | 9 | COBRANZA-ANTICIPO | Cobranza de anticipos de clientes |
| COMPRAS | 12 | COMPRAS | Compras |
| COSTOS | 2 | COSTO-POS | Costo de ventas POS |
| | 4 | COSTO | Costo de ventas mayoristas |
| CREDITOS-BANCO | 20 | CREDITO-CTA-BANCO | Créditos en cuentas bancarias |
| DEBITOS-BANCO | 19 | DEBITO-CTA-BANCO | Débitos en cuentas bancarias |
| DEPOSITOS | 18 | DEPOSITO-BANCO | Depósitos en cuentas bancarias |
| DEVOLUCIONES-CLIENTES | 5 | NC-VENTAS | Notas de crédito de ventas |
| DEVOLUCIONES-PROVEEDORES| 11 | NC-COMPRAS | Notas de crédito de compras |
| IMPORTACIONES | 13 | IMPORTACIONES | Importaciones |
| PAGOS | 14 | DESEMBOLSO-CHEQUE | Desembolsos por cheque |
| | 15 | DESEMBOLSO-EFECTIVO | Desembolsos en efectivo |
| | 16 | DESEMBOLSO-CTA-CONTABLE| Desembolsos cargo cuenta contable |
| | 17 | DESEMBOLSO-TRANSFERENCIA| Desembolsos por transferencias bancarias |
| | 22 | PAGO-CHEQUE-DIFERIDO | Pagos de cheques diferidos |
| VENTAS | 1 | VENTAS-POS | Ventas POS |
| | 3 | VENTAS | Ventas mayoristas |

### [cite_start]Cuentas a Pagar [cite: 1]

| Tipo de Asiento | Transacciones | Condiciones a cumplir |
|---|---|---|
| Facturas | Auto-facturas, facturas y notas de débito de proveedores | Tipo de transacción: autofactura, factura o nota de débito. Estado: "CONFIRMADO". Fecha Anulación: nulo. |
| Notas de Crédito | Notas de crédito de proveedores | Tipo de transacción: nota de crédito. Estado: "CONFIRMADO". Fecha anulación: nulo. |
| Anulación de Transacciones | Auto-facturas, facturas crédito, notas de débito y notas de crédito anuladas | Tipo de transacción: autofactura, factura, nota de débito o nota de crédito. Estado: "ANULADO". Id. de sub-diario de compras: no nulo. |

### [cite_start]Cuentas por Cobrar [cite: 1]

| Tipo de Asiento | Transacciones | Condiciones a cumplir |
|---|---|---|
| Facturas | Facturas | Tipo de transacción: factura crédito o nota de débito. Estado: "CONFIRMADO". Fecha anulación: nulo. |
| Notas de Crédito | Notas de crédito | Tipo de transacción: nota de crédito. Estado: "CONFIRMADO". Fecha anulación: nulo. |
| Anulación de Transacciones | Facturas crédito, notas de débito y notas de crédito anuladas | Tipo de transacción: factura crédito, nota de débito o nota de crédito. Estado: "ANULADO". Id. de sub-diario de ventas: no nulo. Fecha anulación: nulo. |
| Costo Ventas Mayoristas | Transacciones de venta a mayoristas. Los importes provienen de los costos de cada uno de los ítems de las facturas. | (Ninguna condición listada) |
| Cobranzas Contado | Cobranzas de facturas contado | Tipo de cobranza: "CONTADO". Estado: "CONFIRMADO". Fecha anulación: nulo. |
| Cobranzas Crédito | Cobranzas de facturas crédito | Tipo de cobranza: "CREDITO". Estado: "CONFIRMADO". Fecha anulación: nulo. |
| Cobranzas Anticipo | Cobranzas de anticipos de clientes | Tipo de cobranza: "ANTICIPO". Estado cobranza: "CONFIRMADO". Fecha anulación: nulo. |
| Anulación Cobranzas | Cobranzas de anticipos, facturas contado y facturas crédito | Tipo de transacción: "ANTICIPO" o "CONTADO" o "CREDITO". Estado: "ANULADO". Id. de sub-diario de cobranza: no nulo. |

### [cite_start]Pagos [cite: 1]

| Tipo de Asiento | Transacciones | Condiciones a cumplir |
|---|---|---|
| Pagos con Cheques | Cheques | Estado: "EMITIDO" o "PREPARADO" o "ENTREGADO". |
| Pago Cheques Diferidos | Cheques diferidos, en la fecha en que está programado el pago en el banco | Estado: "EMITIDO" o "PREPARADO" o "ENTREGADO". Fecha diferido: no nulo. |
| Pagos Efectivo y Cta. Contable | Órdenes de pago | Tipo de orden de pago: "STANDARD". Estado: "DESEMBOLSADO". Método de pago: "CUENTA-CONTABLE" o "EFECTIVO". |
| Anticipo Efectivo | Órdenes de pago | Tipo de orden de pago: "ANTICIPO". Estado: "DESEMBOLSADO". Método de pago: "CUENTA-CONTABLE" o "EFECTIVO". |
| Anticipo Cheque | Cheques confeccionados a partir de una orden de pago de anticipo | Tipo de orden de pago: "ANTICIPO". Estado del cheque: "EMITIDO" o "PREPARADO" o "ENTREGADO". |

### [cite_start]Bancos [cite: 1]

| Tipo de Asiento | Transacciones | Condiciones a cumplir |
|---|---|---|
| Depósitos | Depósitos realizados directamente en el banco | Estado: "CONFIRMADO". |
| Movim. y Transferencias | Movimientos de débito y crédito y transferencias entre cuentas bancarias de la organización. | Ninguna. |

### [cite_start]POS [cite: 1]

| Tipo de Asiento | Transacciones | Condiciones a cumplir |
|---|---|---|
| Ventas POS | Transacciones de venta POS. Los importes provienen de la distribución de la factura y las formas de pago de la cobranza correspondiente a la factura. | Fecha anulación: nulo. |
| Costos POS | Transacciones de venta POS. Los importes provienen de los costos de cada uno de los ítems de las facturas. | Fecha anulación: nulo. |