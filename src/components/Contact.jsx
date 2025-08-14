import React from 'react';
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+595 994 351 389',
      link: 'https://wa.me/595994351389?text=Hola! Me gustaría contactarte para un proyecto.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@gregor_enzo',
      link: 'https://instagram.com/gregor_enzo',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'enzogregor2018@gmail.com',
      link: 'mailto:enzogregor2018@gmail.com?subject=Consulta%20sobre%20proyecto%20digital',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            ¿Listo para Empezar?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estoy aquí para ayudarte a transformar tu visión en realidad digital. 
            Contáctame y conversemos sobre tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Métodos de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:shadow-md">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <contact.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-slate-600 text-sm lg:text-base">
                        {contact.value}
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0">
                      <MessageCircle size={20} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card - Enhanced */}
          <div className="flex items-center order-1 lg:order-2">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 text-white w-full">
              <h3 className="text-3xl font-bold mb-6">
                ¿Tienes un Proyecto en Mente?
              </h3>
              <p className="text-slate-200 mb-8 leading-relaxed text-lg">
                Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad. 
                Ofrezco consultas gratuitas para entender mejor tus necesidades.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/595994351389?text=Hola! Me gustaría agendar una consulta gratuita para mi proyecto digital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-red-600 text-white hover:bg-red-700 inline-flex items-center gap-3 w-full justify-center py-4 text-lg font-semibold"
                >
                  <MessageCircle size={24} />
                  Agendar Consulta Gratuita
                </a>
                

              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-slate-200 text-sm">
                  💡 <strong>Consejo:</strong> Cuanto más detalles me proporciones sobre tu proyecto, 
                  mejor podré ayudarte a alcanzar tus objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500">
            Respuesta garantizada en menos de 24 horas • Trabajo remoto disponible
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 