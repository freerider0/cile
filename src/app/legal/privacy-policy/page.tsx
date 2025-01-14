import { Metadata } from "next"
import { companyLegalInfo } from "@/config/legal-config"

// Types
interface PrivacyPolicySection {
  title: string
  content: string
  conditional?: boolean
}

interface PrivacyPolicy {
  title: string
  effectiveDate: string
  sections: PrivacyPolicySection[]
}

// Metadata
export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales",
}

// Privacy Policy Data
const privacyPolicyData: PrivacyPolicy = {
  title: "Política de Privacidad",
  effectiveDate: "1 de Marzo 2024",
  sections: [
    {
      title: "Introducción",
      content: `Esta política de privacidad describe cómo ${companyLegalInfo.name} recopila, usa, comparte y protege la información personal de nuestros usuarios. Nos comprometemos a garantizar la confidencialidad y seguridad de los datos personales de conformidad con las leyes aplicables.`
    },
    {
      title: "Definiciones",
      content: `En esta política, los términos 'nosotros', 'nuestro' y 'la empresa' se refieren a ${companyLegalInfo.name}. 'Usuario' se refiere a cualquier persona que acceda o utilice nuestros servicios. 'Datos personales' se refiere a cualquier información que identifique o pueda identificar a una persona física.`
    },
    {
      title: "Recopilación de datos personales",
      content: "Recopilamos información personal que los usuarios nos proporcionan voluntariamente, como nombre, dirección de correo electrónico, número de teléfono y otra información relevante. También podemos recopilar datos automáticamente, como direcciones IP, información del navegador y datos sobre cómo interactúa el usuario con nuestra plataforma.",
      conditional: true
    },
    {
      title: "Uso de los datos recopilados",
      content: "Los datos recopilados son utilizados para mejorar nuestros servicios, personalizar la experiencia del usuario y, si los usuarios lo autorizan, enviarles comunicaciones de marketing. También podemos emplear los datos para análisis internos y desarrollo de nuevos servicios.",
      conditional: true
    },
    {
      title: "Compartición de datos personales",
      content: "Podemos compartir los datos personales de los usuarios con socios de confianza, incluyendo proveedores de servicios, procesadores de pago y plataformas de análisis, siempre garantizando que cumplan con estrictos estándares de confidencialidad y seguridad.",
      conditional: true
    },
    {
      title: "Derechos de los usuarios",
      content: "Los usuarios tienen derecho a acceder, corregir, eliminar o restringir el uso de sus datos personales en cualquier momento. También pueden retirar su consentimiento para el uso de sus datos o presentar una queja ante una autoridad de protección de datos si consideran que sus derechos han sido vulnerados.",
      conditional: true
    },
    {
      title: "Uso de cookies",
      content: "Utilizamos cookies y tecnologías similares para mejorar la funcionalidad de nuestro sitio web, personalizar contenido, proporcionar características de redes sociales y analizar nuestro tráfico. Los usuarios pueden gestionar sus preferencias de cookies a través de su navegador o configuración específica de nuestra plataforma.",
      conditional: true
    },
    {
      title: "Medidas de seguridad",
      content: "Hemos implementado medidas de seguridad técnicas y organizativas para proteger los datos personales contra accesos no autorizados, alteraciones, divulgaciones o destrucciones. Estas medidas incluyen cifrado, firewalls y controles de acceso.",
      conditional: true
    },
    {
      title: "Conservación de los datos",
      content: "Conservamos los datos personales únicamente durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, incluidos los requisitos legales, contables o de informes."
    },
    {
      title: "Enlaces a terceros",
      content: "Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables por las prácticas de privacidad ni el contenido de estos sitios externos. Recomendamos a los usuarios revisar las políticas de privacidad de cualquier sitio web de terceros que visiten."
    },
    {
      title: "Actualizaciones de la política de privacidad",
      content: "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Notificaremos a los usuarios sobre cambios significativos a través de nuestro sitio web, correo electrónico o cualquier otro medio adecuado antes de que entren en vigor.",
      conditional: true
    },
    {
      title: "Responsable del tratamiento",
      content: `El responsable del tratamiento de sus datos personales es ${companyLegalInfo.name}, con NIF ${companyLegalInfo.registration.taxId}, inscrita en el ${companyLegalInfo.registration.registryName} en ${companyLegalInfo.registration.registryNumber}, con domicilio social en ${companyLegalInfo.contact.address}, ${companyLegalInfo.contact.postalCode} ${companyLegalInfo.contact.city}, ${companyLegalInfo.contact.country}.`
    },
    {
      title: "Delegado de Protección de Datos",
      content: `Hemos nombrado un Delegado de Protección de Datos (DPD) que puede ser contactado directamente para cualquier consulta relacionada con el tratamiento de sus datos personales o el ejercicio de sus derechos:\n
      - Nombre: ${companyLegalInfo.dpo.name}\n
      - Email: ${companyLegalInfo.dpo.email}\n
      - Teléfono: ${companyLegalInfo.dpo.phone}`
    },
    {
      title: "Información de contacto",
      content: `Para cualquier consulta relacionada con esta política de privacidad o el tratamiento de sus datos personales, puede contactar con nosotros a través de:\n
      - Email: ${companyLegalInfo.contact.email}\n
      - Teléfono: ${companyLegalInfo.contact.phone}\n
      - Dirección postal: ${companyLegalInfo.contact.address}, ${companyLegalInfo.contact.postalCode} ${companyLegalInfo.contact.city}, ${companyLegalInfo.contact.country}\n
      - Sitio web: ${companyLegalInfo.website}`
    }
  ]
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            {privacyPolicyData.title}
          </h1>
          <p className="text-muted-foreground">
            Fecha efectiva: {privacyPolicyData.effectiveDate}
          </p>
        </header>

        <div className="space-y-12">
          {privacyPolicyData.sections.map((section, index) => (
            <section 
              key={index}
              className="prose prose-gray max-w-none"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
  