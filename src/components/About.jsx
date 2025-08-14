import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Enfoque Personalizado',
      description: 'Cada proyecto se adapta a las necesidades específicas de tu negocio, garantizando resultados únicos y efectivos.'
    },
    {
      icon: Zap,
      title: 'Tecnología Moderna',
      description: 'Utilizamos las últimas tecnologías y frameworks para crear soluciones rápidas, escalables y de alta calidad.'
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Trabajamos de cerca contigo en cada etapa del proyecto, desde la concepción hasta la implementación.'
    },
    {
      icon: CheckCircle,
      title: 'Resultados Medibles',
      description: 'Nos enfocamos en generar valor real para tu negocio con métricas claras y objetivos alcanzables.'
    }
  ];

  return (
    <section id="about" className="section section-gray">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Acerca de ERG</h2>
          <p className="section-text max-w-3xl mx-auto">
            Somos un equipo apasionado por la tecnología y el diseño, especializado en crear 
            soluciones digitales que transforman ideas en realidades exitosas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transformamos tu visión en realidad digital
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En ERG, creemos que cada negocio merece una presencia digital excepcional. 
              Combinamos diseño creativo, desarrollo técnico sólido y herramientas de contenido 
              para crear soluciones que optimizan tu flujo de trabajo y presencia online.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro enfoque se basa en entender profundamente tus necesidades, 
              tu audiencia y tus objetivos para desarrollar herramientas y sitios web 
              que generen valor real para tu negocio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Diseño Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Herramientas Personalizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Facebook Ads</span>
              </div>
            </div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">ERG</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">
                  Soluciones Digitales
                </h4>
                <p className="text-slate-600">
                  Diseño • Desarrollo • Marketing
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Características */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 