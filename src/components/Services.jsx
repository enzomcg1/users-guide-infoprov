import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  TrendingUp, 
  Globe, 
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Zap
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Palette,
      title: 'Diseño Web & Mobile',
      description: 'Creamos diseños modernos y atractivos que cautivan a tu audiencia y reflejan la identidad de tu marca.',
      features: ['Diseño Responsive', 'UI/UX Moderno', 'Branding', 'Prototipado'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Desarrollo Frontend & Backend',
      description: 'Desarrollamos aplicaciones web robustas y escalables con las últimas tecnologías del mercado.',
      features: ['React/Next.js', 'Node.js/Python', 'APIs RESTful', 'Bases de Datos'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Herramientas de Contenido',
      description: 'Creamos herramientas y aplicaciones para la generación y gestión de contenido digital.',
      features: ['Automatización', 'Gestión de Contenido', 'Herramientas Web', 'Integraciones'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: 'API REST',
      description: 'Desarrollo de APIs RESTful para conectar aplicaciones y servicios web.'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Tiendas online completas con pasarelas de pago y gestión de inventario.'
    },
    {
      icon: TrendingUp,
      title: 'Facebook Ads',
      description: 'Configuración y gestión de campañas publicitarias en Facebook e Instagram.'
    },
    {
      icon: ShoppingCart,
      title: 'Landing Pages',
      description: 'Páginas de aterrizaje optimizadas para conversiones y ventas.'
    },
    {
      icon: BarChart3,
      title: 'Herramientas Web',
      description: 'Desarrollo de herramientas personalizadas para automatizar procesos.'
    },
    {
      icon: MessageSquare,
      title: 'Integraciones',
      description: 'Conexión de diferentes plataformas y APIs para optimizar flujos de trabajo.'
    }
  ];

  return (
    <section id="services" className="section section-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-text max-w-3xl mx-auto">
            Ofrecemos soluciones digitales integrales que abarcan desde el diseño hasta la implementación 
            y optimización de tu presencia online.
          </p>
        </motion.div>

        {/* Servicios Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Servicios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Servicios Especializados
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Además de nuestros servicios principales, ofrecemos soluciones especializadas 
            para necesidades específicas de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-slate-600" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-8"
        >
          <Zap className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas algo específico?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Cada proyecto es único. Si tienes una necesidad específica que no ves aquí, 
            contáctanos y crearemos una solución personalizada para ti.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/595994351389?text=Hola! Me interesa conocer más sobre sus servicios.', '_blank')}
            className="btn-primary"
          >
            Consultar Servicios
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 