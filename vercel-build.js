// Configuración de build para Vercel - Simplificada
module.exports = {
  // Configuración de enrutamiento
  async rewrites() {
    return [
      {
        source: '/(.*)',
        destination: '/index.html',
      },
    ];
  },
};
