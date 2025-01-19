"use client"

import { Section } from "../section"

const valoresMasonicos = [
  "Diferentes edades y generaciones",
  "Diversos orígenes culturales y étnicos",
  "Distintas creencias y religiones",
  "Variados trasfondos profesionales",
  "Diferentes niveles socioeconómicos"
]

const beneficios = [
  {
    titulo: "Relaciones",
    descripcion: (
      <>
        <p>
          En la era de las redes sociales superficiales, ofrecemos vínculos auténticos y duraderos. 
          Construye relaciones profundas basadas en valores compartidos y apoyo mutuo.
        </p>
        <p className="mt-4">
          Como parte de una red global, tendrás acceso a una comunidad internacional 
          que facilita el intercambio cultural y filosófico, permitiéndote:
        </p>
        <ul className="mt-2 space-y-2 list-disc pl-6">
          <li>Participar en eventos y encuentros internacionales</li>
          <li>Colaborar en proyectos de alcance global</li>
          <li>Interactuar con hermanos de diversas regiones y culturas</li>
          <li>Fortalecer la solidaridad más allá de las fronteras</li>
        </ul>
      </>
    )
  },
  {
    titulo: "Desarrollo Personal",
    descripcion: (
      <>
        <p>
          Accede a un sistema de crecimiento personal perfeccionado durante siglos. 
          La CILE ofrece formación integral que incluye:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Crecimiento ético y moral a través de principios de honestidad e integridad</li>
          <li>Desarrollo de pensamiento crítico y habilidades de liderazgo</li>
          <li>Aprendizaje continuo mediante estudios filosóficos y discusiones educativas</li>
          <li>Programas estructurados y mentorías personalizadas</li>
        </ul>
        <p className="mt-4">
          Fomenta la autorreflexión y el crecimiento en todos los aspectos de la vida, 
          promoviendo la tolerancia y el respeto mutuo.
        </p>
      </>
    )
  },
  {
    titulo: "Servicio Comunitario",
    descripcion: (
      <>
        <p>
          Forma parte de una tradición global de servicio y filantropía, contribuyendo 
          activamente a la sociedad a través de:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Participación en proyectos comunitarios y obras de caridad</li>
          <li>Promoción de la educación y la cultura en la comunidad</li>
          <li>Impulso a iniciativas de justicia social y derechos humanos</li>
          <li>Preservación del patrimonio histórico y cultural</li>
        </ul>
        <p className="mt-4">
          Contribuye a crear un impacto positivo y duradero en la sociedad, trabajando 
          por el bienestar común y el progreso social.
        </p>
      </>
    )
  }
]

export function WhyBecomeFreemason() {
  return (
    <Section className="bg-blue-1">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-12">
          ¿POR QUÉ SER FRANCMASÓN?
        </h2>
        
        <div className="grid md:grid-cols-[2fr_3fr] gap-8">
          {/* Columna Izquierda */}
          <div className="p-6 border-r border-blue-12">
            <h3 className="text-2xl font-semibold text-blue-12 mb-6">
              Una Hermandad Universal
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              La Francmasonería une a personas de:
            </p>
            <div className="space-y-4">
              {valoresMasonicos.map((valor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-12"></div>
                  <p className="text-lg text-slate-800">{valor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-12">
                  {beneficio.titulo}
                </h3>
                <div className="text-lg text-slate-700">
                  {beneficio.descripcion}
                </div>
              </div>
            ))}
            {/* New membership button */}
        <div className="mt-12 text-center">
          <a 
            href="#contact-form" 
            className="inline-flex items-center w-full justify-center px-8 py-3 text-lg font-medium text-white bg-blue-12 hover:bg-blue-11 rounded-md transition-colors duration-200"
          >
            Consigue tu Membresía
          </a>
        </div>
          </div>
          
        </div>

      </div>
      
      
    </Section>
  )
}
