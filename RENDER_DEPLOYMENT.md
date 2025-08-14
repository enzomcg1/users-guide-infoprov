# Render Deployment Guide

## Configuración para Render

### 1. Configuración del Servicio

En Render, configura tu servicio con estos parámetros:

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`
- **Environment**: Static Site

### 2. Variables de Entorno

Agrega estas variables de entorno en Render:

```
NODE_VERSION=18.0.0
GENERATE_SOURCEMAP=false
```

### 3. Configuración de Rutas

El archivo `static.json` ya está configurado para manejar las rutas de React correctamente.

### 4. Pasos de Despliegue

1. Conecta tu repositorio de GitHub a Render
2. Selecciona el repositorio `erg-landing-page`
3. Configura como "Static Site"
4. Usa los comandos de build especificados arriba
5. Deploy

### 5. Solución de Problemas

Si sigues viendo "Not Found":

1. Verifica que el `Build Command` sea correcto
2. Asegúrate de que el `Publish Directory` sea `build`
3. Revisa los logs de build en Render
4. Verifica que el archivo `static.json` esté en la raíz del proyecto

### 6. Verificación

Después del despliegue, tu sitio debería estar disponible en:
`https://tu-app-name.onrender.com`

## Archivos de Configuración Incluidos

- `static.json` - Configuración para Render
- `public/_redirects` - Redirecciones para Netlify (backup)
- `serve.json` - Configuración para servidor estático
- `render.yaml` - Configuración automática para Render 