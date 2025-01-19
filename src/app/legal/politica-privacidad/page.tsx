import { Metadata } from "next"
import Link from "next/link"
import legalInfo from "../legal-info.json"

export const metadata: Metadata = {
  title: "Política de Privacidad | Llum i Verdad",
  description: "Política de privacidad y protección de datos de Llum i Verdad",
}

export default function PoliticaPrivacidad() {
  const { entity } = legalInfo

  return (
    <article className="container mx-auto px-4 py-8 prose prose-invert max-w-3xl bg-blue-1 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <p className="text-sm mb-8">
        Última actualización: Marzo 2024
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Responsable del Tratamiento</h2>
        <p>
          De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 
          de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), 
          le informamos que sus datos serán tratados por:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Denominación social: {entity.legalName}</li>
          <li>CIF: {entity.cif}</li>
          <li>Domicilio: {entity.address}, {entity.postalCode}, {entity.city}</li>
          <li>Correo electrónico: {entity.email}</li>
          <li>Delegado de Protección de Datos (DPD): {entity.email}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Finalidades y Legitimación del Tratamiento</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="text-left p-2">Finalidad</th>
                <th className="text-left p-2">Base Legal</th>
                <th className="text-left p-2">Conservación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Gestión de newsletter</td>
                <td className="p-2">Consentimiento explícito (Art. 6.1.a RGPD)</td>
                <td className="p-2">Hasta retirada del consentimiento</td>
              </tr>
              <tr>
                <td className="p-2">Atención de consultas</td>
                <td className="p-2">Interés legítimo (Art. 6.1.f RGPD)</td>
                <td className="p-2">Hasta resolución más 1 año</td>
              </tr>
              <tr>
                <td className="p-2">Gestión de actividades</td>
                <td className="p-2">Ejecución de relación contractual (Art. 6.1.b RGPD)</td>
                <td className="p-2">Durante la relación más 5 años</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Categorías de Datos Tratados</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Datos identificativos: nombre, apellidos, DNI/NIE</li>
          <li>Datos de contacto: email, teléfono, dirección postal</li>
          <li>Datos de navegación: IP, cookies técnicas necesarias</li>
          <li>Datos recopilados mediante tecnologías de seguimiento</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Destinatarios de los Datos</h2>
        <p>
          Sus datos podrán ser comunicados a:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Prestadores de servicios tecnológicos (encargados del tratamiento)</li>
          <li>Proveedores de servicios de publicidad y análisis (por ejemplo, Meta, Google)</li>
          <li>Autoridades competentes en caso de obligación legal</li>
        </ul>
        <p className="mt-4">
          No se realizan transferencias internacionales de datos fuera del Espacio 
          Económico Europeo (EEE), salvo que los destinatarios cumplan con las garantías 
          adecuadas según lo establecido en el RGPD.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Derechos y Cómo Ejercerlos</h2>
        <p>
          Puede ejercer sus derechos ARSLOP (Acceso, Rectificación, Supresión, Limitación, 
          Oposición y Portabilidad) y retirar su consentimiento en cualquier momento:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Por email: {entity.email}</li>
          <li>Por correo postal: {entity.address}, {entity.postalCode}, {entity.city}</li>
        </ul>
        <p className="mt-4">
          Es necesario aportar copia del DNI o documento identificativo. Plazo de respuesta: 1 mes.
        </p>
        <p className="mt-4">
          Puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es) si 
          considera que sus derechos han sido vulnerados.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Newsletter y Comunicaciones</h2>
        <p>
          Para el envío de newsletter y comunicaciones electrónicas:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Solo se realizará si ha dado su consentimiento explícito</li>
          <li>Cada comunicación incluirá un mecanismo sencillo y gratuito para darse de baja</li>
          <li>Puede retirar su consentimiento en cualquier momento</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Tecnologías de Seguimiento</h2>
        <p>
          Este sitio web utiliza tecnologías de seguimiento proporcionadas por terceros, 
          como los píxeles de Meta y Google, para analizar el tráfico y mejorar nuestros servicios. 
          Estas tecnologías pueden recopilar información sobre su navegación y comportamiento 
          para generar estadísticas y personalizar contenidos y anuncios.
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>
            <strong>Píxel de Meta:</strong> Utilizado para realizar seguimiento de conversiones 
            y optimizar campañas publicitarias. Más información en la 
            <Link 
              href="https://www.facebook.com/policy.php"
              className="text-primary hover:underline"
            >
              Política de Privacidad de Meta
            </Link>.
          </li>
          <li>
            <strong>Píxel de Google:</strong> Utilizado para medir la eficacia de las campañas 
            publicitarias y realizar análisis de tráfico. Más información en la 
            <Link 
              href="https://policies.google.com/privacy"
              className="text-primary hover:underline"
            >
              Política de Privacidad de Google
            </Link>.
          </li>
        </ul>
        <p className="mt-4">
          Puede gestionar sus preferencias de seguimiento a través de la configuración de 
          cookies en su navegador o utilizando herramientas de gestión de consentimiento.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Medidas de Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas apropiadas según el art. 32 RGPD, incluyendo:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Cifrado de datos</li>
          <li>Garantía de confidencialidad, integridad y disponibilidad</li>
          <li>Capacidad de restaurar el acceso a los datos</li>
          <li>Proceso de verificación y evaluación regular</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
        <p>
          Este sitio web utiliza únicamente cookies técnicas esenciales. Para más información, 
          consulte nuestra{" "}
          <Link 
            href="/legal/politica-cookies"
            className="text-primary hover:underline"
          >
            Política de Cookies
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad. La última 
          actualización fue realizada en Marzo 2024. Los cambios significativos serán 
          notificados mediante un aviso visible en el sitio web.
        </p>
      </section>
    </article>
  )
} 