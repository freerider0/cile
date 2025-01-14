
import React from 'react';
import { Metadata } from 'next';

interface Cookie {
  name: string;
  description: string;
  duration: string;
  provider: string;
}

const cookiesData: Cookie[] = [
  {
    name: '__gads',
    description: 'Utilizada por Google para gestionar la publicidad que ves en terceros.',
    duration: '13 meses',
    provider: 'Google',
  },
  {
    name: '_ga',
    description: 'Utilizada por Google Analytics para distinguir a los usuarios.',
    duration: '2 años',
    provider: 'Google',
  },
  {
    name: '_gid',
    description: 'Utilizada por Google Analytics para distinguir a los usuarios.',
    duration: '24 horas',
    provider: 'Google',
  },
  {
    name: 'fr',
    description: 'Utilizada por Meta para medir la eficacia de los anuncios y proporcionar servicios personalizados.',
    duration: '3 meses',
    provider: 'Meta (Facebook)',
  },
  {
    name: '_fbp',
    description: 'Utilizada por Meta para entregar una serie de productos publicitarios como pujas en tiempo real desde terceros.',
    duration: '3 meses',
    provider: 'Meta (Facebook)',
  },
  {
    name: 'cookieConsent',
    description: 'Almacena el consentimiento del usuario para el uso de cookies.',
    duration: 'Sesión',
    provider: '[Nombre de la Empresa]',
  },
];

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información detallada sobre el uso de cookies en nuestro sitio web.',
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
        <p>
          En [Nombre de la Empresa] utilizamos cookies propias y de terceros para mejorar la experiencia de navegación, analizar el uso de nuestra web y ofrecer publicidad personalizada. A continuación, te explicamos qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Permiten reconocer tu navegador y almacenar cierta información para hacer tu navegación más eficiente y mejorar tu experiencia en nuestro sitio.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Tipos de Cookies que Utilizamos</h2>

        <h3 className="text-xl font-semibold mt-4">3.1. Cookies Técnicas</h3>
        <p>
          Son esenciales para el funcionamiento de la web. Permiten la navegación a través de la página y la utilización de sus diferentes servicios, como el acceso a áreas seguras.
        </p>

        <h3 className="text-xl font-semibold mt-4">3.2. Cookies de Preferencias</h3>
        <p>
          Permiten recordar información para personalizar la web según tus preferencias, como el idioma o la región en la que te encuentras.
        </p>

        <h3 className="text-xl font-semibold mt-4">3.3. Cookies de Análisis</h3>
        <p>
          Recopilan información de manera anónima sobre cómo los usuarios utilizan la web, lo que nos ayuda a mejorar su funcionamiento y optimizar el contenido.
        </p>

        <h3 className="text-xl font-semibold mt-4">3.4. Cookies de Marketing</h3>
        <p>
          Se utilizan para rastrear a los visitantes a través de los sitios web con el fin de mostrar anuncios que sean relevantes y atractivos para el usuario individualmente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Tabla de Cookies Utilizadas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Nombre de la Cookie</th>
                <th className="py-2 px-4 border">Descripción</th>
                <th className="py-2 px-4 border">Duración</th>
                <th className="py-2 px-4 border">Proveedor</th>
              </tr>
            </thead>
            <tbody>
              {cookiesData.map((cookie) => (
                <tr key={cookie.name}>
                  <td className="py-2 px-4 border">
                    <code>{cookie.name}</code>
                  </td>
                  <td className="py-2 px-4 border">{cookie.description}</td>
                  <td className="py-2 px-4 border">{cookie.duration}</td>
                  <td className="py-2 px-4 border">{cookie.provider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Cookies de Terceros</h2>

        <h3 className="text-xl font-semibold mt-4">5.1. Meta Pixel</h3>
        <p>
          Utilizamos Meta Pixel de Facebook para medir la efectividad de la publicidad y comprender las acciones que realizan los usuarios en nuestro sitio después de ver o interactuar con nuestros anuncios.
        </p>

        <h3 className="text-xl font-semibold mt-4">5.2. Google Analytics</h3>
        <p>
          Empleamos Google Analytics para analizar el tráfico de nuestra web y entender mejor cómo los usuarios interactúan con ella, lo que nos permite ofrecer una mejor experiencia de usuario.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Gestión de Cookies</h2>
        <p>
          Puedes gestionar y configurar el uso de cookies en cualquier momento a través de la configuración de tu navegador. También puedes utilizar herramientas específicas para bloquear o eliminar cookies. Sin embargo, ten en cuenta que desactivar ciertas cookies podría afectar el funcionamiento de nuestra web y limitar algunas de sus funcionalidades.
        </p>
        <h3 className="text-xl font-semibold mt-4">Cómo eliminar cookies en los principales navegadores:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Google Chrome:</strong>
            <ol className="list-decimal list-inside ml-4 mt-1">
              <li>Haz clic en los tres puntos verticales en la esquina superior derecha.</li>
              <li>Selecciona <em>Configuración</em>.</li>
              <li>Ve a <em>Privacidad y seguridad</em> &gt; <em>Cookies y otros datos de sitios</em>.</li>
              <li>Desde aquí, puedes ver todas las cookies almacenadas y eliminarlas según tus preferencias.</li>
            </ol>
          </li>
          <li>
            <strong>Mozilla Firefox:</strong>
            <ol className="list-decimal list-inside ml-4 mt-1">
              <li>Haz clic en las tres líneas horizontales en la esquina superior derecha.</li>
              <li>Selecciona <em>Opciones</em>.</li>
              <li>Ve a <em>Privacidad & Seguridad</em>.</li>
              <li>En la sección de <em>Cookies y datos de sitios</em>, puedes gestionarlas según tus necesidades.</li>
            </ol>
          </li>
          <li>
            <strong>Safari:</strong>
            <ol className="list-decimal list-inside ml-4 mt-1">
              <li>Haz clic en <em>Safari</em> en la barra de menús.</li>
              <li>Selecciona <em>Preferencias</em>.</li>
              <li>Ve a la pestaña <em>Privacidad</em>.</li>
              <li>Aquí puedes gestionar las cookies y otros datos de sitios.</li>
            </ol>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Cambios en la Política de Cookies</h2>
        <p>
          Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento. Cualquier cambio será publicado en esta página, por lo que te sugerimos revisarla periódicamente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos a través de:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Correo electrónico:</strong> <a href="mailto:tu-email@ejemplo.com" className="text-blue-600 underline">tu-email@ejemplo.com</a></li>
          <li><strong>Dirección:</strong> [Tu Dirección Completa]</li>
          <li><strong>Teléfono:</strong> [Tu Número de Teléfono]</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-500 mt-8">
        ---
        <br />
        <strong>Última actualización:</strong> [Fecha]
      </footer>
    </main>
  );
}