#!/bin/bash

# Script de build optimizado para Vercel
echo "🚀 Iniciando build optimizado para Vercel..."

# Limpiar build anterior
rm -rf build

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci --only=production

# Build optimizado
echo "🔨 Construyendo aplicación..."
GENERATE_SOURCEMAP=false INLINE_RUNTIME_CHUNK=false npm run build

# Copiar archivos de configuración
echo "📋 Copiando archivos de configuración..."
cp public/_redirects build/_redirects
cp public/_headers build/_headers

# Verificar build
echo "✅ Build completado exitosamente!"
echo "📁 Contenido del directorio build:"
ls -la build/

echo "🎉 ¡Listo para deploy en Vercel!"
