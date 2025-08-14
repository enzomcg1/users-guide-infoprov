# Manual de Usuario ERP Avanza

Este proyecto es un manual de usuario web interactivo para el sistema ERP Avanza, desarrollado en React. Proporciona documentación completa y navegable para todos los módulos del sistema.

## 🚀 Características

- **Manual Interactivo**: Navegación intuitiva entre módulos y secciones
- **Diseño Responsive**: Funciona perfectamente en dispositivos móviles y de escritorio
- **Navegación Lateral**: Menú de secciones para cada módulo
- **Contenido Estructurado**: Información organizada por temas y funcionalidades
- **Estilo Moderno**: Interfaz limpia y profesional con la identidad visual de Infoprov

## 📚 Módulos Disponibles

### 1. **Módulo de Nómina**
- Gestión de empleados
- Control de asistencia
- Cálculo de salarios
- Proceso de pagos
- Reportes y consultas

### 2. **Módulo de Contabilidad**
- Plan de cuentas
- Asientos contables
- Libros contables
- Balance general
- Estado de resultados
- Reportes contables

### 3. **Módulo de RRHH**
- Gestión de empleados
- Asignación de valores
- Perfiles y cargos
- Evaluaciones de desempeño
- Capacitación y desarrollo
- Reportes de RRHH

## 🛠️ Tecnologías Utilizadas

- **React 19**: Framework principal
- **React Router**: Navegación entre páginas
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconos modernos
- **CSS Modules**: Estilos modulares y organizados

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── manual/
│   │   ├── Layout.jsx          # Layout principal del manual
│   │   ├── Sidebar.jsx         # Navegación lateral
│   │   ├── Section.jsx         # Componente de sección
│   │   ├── ImageBlock.jsx      # Componente para imágenes
│   │   └── Table.jsx           # Componente para tablas
│   ├── Navigation.jsx          # Navegación principal
│   └── Footer.jsx              # Pie de página
├── pages/
│   ├── ManualHome.jsx          # Página principal del manual
│   ├── Nomina.jsx              # Módulo de nómina
│   ├── Contabilidad.jsx        # Módulo de contabilidad
│   └── RRHH.jsx                # Módulo de RRHH
└── App.js                      # Configuración de rutas
```

## 🎨 Personalización

### Colores
- **Color Principal**: #a4c442 (verde Infoprov)
- **Colores Secundarios**: Variaciones del verde principal
- **Texto**: Escala de grises para mejor legibilidad

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Jerarquía**: Títulos, subtítulos y texto con pesos apropiados

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
   git clone [URL_DEL_REPOSITORIO]
   cd ERG-LANDING-PAGE
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar el proyecto**
```bash
npm start
```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Uso del Manual

### Navegación Principal
- **Manual Principal**: Vista general de todos los módulos
- **Módulos Específicos**: Acceso directo a cada módulo del sistema

### Navegación Interna
- **Sidebar**: Menú lateral con todas las secciones del módulo
- **Enlaces Ancla**: Navegación rápida dentro de cada página
- **Breadcrumbs**: Indicador de ubicación actual

### Contenido
- **Secciones Organizadas**: Información agrupada por funcionalidad
- **Imágenes de Referencia**: Capturas de pantalla del sistema
- **Tablas Informativas**: Datos estructurados y fáciles de leer
- **Listas y Procedimientos**: Pasos claros para cada proceso

## 🔧 Configuración

### Agregar Nuevos Módulos
1. Crear nueva página en `src/pages/`
2. Agregar ruta en `App.js`
3. Actualizar navegación en `Navigation.jsx`
4. Agregar enlace en `Footer.jsx`

### Personalizar Estilos
- Modificar variables CSS en `src/index.css`
- Ajustar colores y tipografías según necesidades
- Personalizar componentes en `src/components/manual/`

## 📋 Contenido de los PDFs

El manual incluye contenido convertido de los siguientes documentos:
- **Avanza-Nomina-v2.pdf**: Gestión de nómina y personal
- **Contabilidad Version-R2.pdf**: Sistema contable completo
- **RRHH-ASIGNACION DE VALORES DE EMPLEADOS.pdf**: Gestión de recursos humanos

## 🌐 Despliegue

### Build de Producción
```bash
npm run build
```

### Despliegue en Servidor Web
- Copiar contenido de `build/` al directorio del servidor
- Configurar redirecciones para React Router
- Asegurar que todas las rutas apunten a `index.html`

## 📞 Soporte

Para soporte técnico o consultas sobre el manual:
- **Email**: soporte@infoprov.com
- **Teléfono**: +595 21 123 456
- **Ubicación**: Asunción, Paraguay

## 📄 Licencia

© 2025 Infoprov. Todos los derechos reservados.

---

**Desarrollado con ❤️ para optimizar la experiencia de usuario del ERP Avanza**
