import { Metadata } from "next"
import Link from "next/link"
import legalInfo from "../legal-info.json"

export const metadata: Metadata = {
  title: "Aviso Legal | Llum i Verdad",
  description: "Aviso legal y términos de uso de Llum i Verdad",
}


export default function AvisoLegal() {
  const { entity } = legalInfo

  return (
    <article className="container mx-auto px-4 py-8 prose prose-invert max-w-3xl bg-blue-1">
      <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Información Legal</h2>
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico, le informamos que
          el titular de este sitio web es:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Denominación social: {entity.legalName}</li>
          <li>Nombre comercial: {entity.commercialName}</li>
          <li>CIF: {entity.cif}</li>
          <li>
            Domicilio: {entity.address}, {entity.postalCode}, {entity.city}
          </li>
          <li>Correo electrónico: {entity.email}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Finalidad</h2>
        <p>
          Este sitio web ha sido creado con el propósito de difundir información
          sobre nuestra logia masónica y sus actividades, así como proporcionar un
          medio de comunicación con personas interesadas en nuestras actividades y
          newsletter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Condiciones de Uso</h2>
        <p>
          La utilización de este sitio web implica la aceptación plena de las
          condiciones establecidas en el presente Aviso Legal. El usuario se
          compromete a hacer un uso adecuado de los contenidos y servicios que se
          ofrecen a través de este sitio web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Newsletter</h2>
        <p>
          Al suscribirse a nuestra newsletter, el usuario acepta recibir
          comunicaciones periódicas sobre nuestras actividades y eventos. El
          usuario podrá darse de baja en cualquier momento utilizando el enlace
          proporcionado en cada comunicación o contactando directamente con
          nosotros. Para más información sobre el tratamiento de sus datos
          personales, consulte nuestra{" "}
          <Link 
            href="/legal/politica-privacidad"
            className="text-primary hover:underline"
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Protección de Datos</h2>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
          3/2018 de Protección de Datos Personales y garantía de los derechos
          digitales, le informamos que puede consultar toda la información relativa
          al tratamiento de sus datos personales en nuestra{" "}
          <Link 
            href="/legal/politica-privacidad"
            className="text-primary hover:underline"
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Propiedad Intelectual e Industrial
        </h2>
        <p>
          Todos los contenidos del sitio web (incluyendo, sin limitación, textos,
          gráficos, logotipos, iconos, imágenes, archivos de audio, descargas
          digitales y cualquier software) son propiedad de {entity.commercialName}{" "}
          o de sus proveedores de contenidos y están protegidos por las leyes de
          propiedad intelectual e industrial nacionales e internacionales.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Legislación Aplicable</h2>
        <p>
          El presente Aviso Legal se rige por la legislación española. Cualquier
          controversia que pudiera derivarse del acceso o uso de este sitio web
          estará sometida a la jurisdicción de los Juzgados y Tribunales de{" "}
          {entity.city}.
        </p>
      </section>
    </article>
  )
}
