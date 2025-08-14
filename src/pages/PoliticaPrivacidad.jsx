import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="legal-page">
      <div className="container-custom section-padding">
        <div className="legal-header">
          <h1>Política de Privacidad</h1>
          <p className="legal-subtitle">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Información que Recopilamos</h2>
            <p>
              En Infoprov, recopilamos información para proporcionar y mejorar nuestros servicios. 
              La información que recopilamos incluye:
            </p>
            <ul>
              <li><strong>Información de la Empresa:</strong> Nombre, dirección, información fiscal</li>
              <li><strong>Datos de Empleados:</strong> Información personal, laboral y salarial</li>
              <li><strong>Información Contable:</strong> Datos financieros y transaccionales</li>
              <li><strong>Datos de Usuario:</strong> Credenciales de acceso y actividad del sistema</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Cómo Utilizamos la Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Proporcionar y mantener el servicio ERP Avanza</li>
              <li>Procesar nóminas y gestionar recursos humanos</li>
              <li>Generar reportes contables y financieros</li>
              <li>Mejorar la funcionalidad del sistema</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Compartir de Información</h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con terceros, 
              excepto en las siguientes circunstancias:
            </p>
            <ul>
              <li>Con su consentimiento explícito</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar el sistema</li>
              <li>Para proteger nuestros derechos y seguridad</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Seguridad de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
            </p>
            <ul>
              <li><strong>Encriptación:</strong> Datos en tránsito y en reposo</li>
              <li><strong>Control de Acceso:</strong> Autenticación y autorización robustas</li>
              <li><strong>Monitoreo:</strong> Supervisión continua de la seguridad</li>
              <li><strong>Backup:</strong> Respaldo seguro y recuperación de datos</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Retención de Datos</h2>
            <p>
              Conservamos su información personal solo durante el tiempo necesario para:
            </p>
            <ul>
              <li>Proporcionar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Resolver disputas y hacer cumplir acuerdos</li>
              <li>Mantener la integridad del sistema</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Sus Derechos</h2>
            <p>Usted tiene derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> Solicitar información sobre sus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, 
              analizar el uso del sistema y personalizar el contenido.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Transferencias Internacionales</h2>
            <p>
              Su información puede ser transferida y procesada en países fuera de su residencia. 
              Garantizamos que estas transferencias cumplan con las leyes de protección de datos aplicables.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Menores de Edad</h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
              intencionalmente información personal de menores de edad.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Cambios en esta Política</h2>
            <p>
              Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos 
              cualquier cambio significativo a través del sistema o por correo electrónico.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos, 
              puede contactarnos a través de:
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

export default PoliticaPrivacidad;

