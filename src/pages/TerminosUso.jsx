import React from 'react';

const TerminosUso = () => {
  return (
    <div className="legal-page">
      <div className="container-custom section-padding">
        <div className="legal-header">
          <h1>Términos de Uso</h1>
          <p className="legal-subtitle">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sistema ERP Avanza, usted acepta estar sujeto a estos términos y condiciones de uso. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Descripción del Servicio</h2>
            <p>
              ERP Avanza es un sistema de gestión empresarial integral que incluye módulos de nómina, contabilidad, 
              recursos humanos y documentación técnica. El servicio está diseñado para optimizar los procesos empresariales 
              de su organización.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Uso Aceptable</h2>
            <p>Usted se compromete a utilizar el sistema ERP Avanza únicamente para:</p>
            <ul>
              <li>Gestión de procesos empresariales legítimos</li>
              <li>Procesamiento de datos de empleados y contabilidad</li>
              <li>Generación de reportes y documentación</li>
              <li>Integración con sistemas empresariales autorizados</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Prohibiciones</h2>
            <p>Está estrictamente prohibido:</p>
            <ul>
              <li>Utilizar el sistema para actividades ilegales o fraudulentas</li>
              <li>Intentar acceder no autorizado a datos de otros usuarios</li>
              <li>Interferir con el funcionamiento del sistema</li>
              <li>Compartir credenciales de acceso con terceros</li>
              <li>Utilizar el sistema para enviar spam o contenido malicioso</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Cuentas de Usuario</h2>
            <p>
              Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. 
              Todas las actividades realizadas bajo su cuenta serán responsabilidad suya.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Privacidad y Datos</h2>
            <p>
              El uso del sistema ERP Avanza está sujeto a nuestra Política de Privacidad, 
              que describe cómo recopilamos, utilizamos y protegemos su información.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Propiedad Intelectual</h2>
            <p>
              El sistema ERP Avanza y todo su contenido, incluyendo software, diseño, texto, 
              gráficos y funcionalidades, son propiedad de Infoprov y están protegidos por 
              leyes de propiedad intelectual.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Limitación de Responsabilidad</h2>
            <p>
              Infoprov no será responsable por daños indirectos, incidentales, especiales o 
              consecuentes que puedan resultar del uso o la imposibilidad de usar el sistema.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sistema.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contacto</h2>
            <p>
              Si tiene preguntas sobre estos términos de uso, puede contactarnos a través de:
            </p>
            <ul>
              <li>Teléfono: +595 994 154 178</li>
              <li>Instagram: @infoprov_eas</li>
              <li>Ubicación: Asunción, Paraguay</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TerminosUso;

