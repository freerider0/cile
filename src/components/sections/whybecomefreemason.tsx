"use client"

import { Section } from "../section"
import { Card } from "@/components/ui/card"

const valoresMasonicos = [
  "Diferentes edades y generaciones",
  "Diversos orígenes culturales y étnicos",
  "Distintas creencias y religiones",
  "Variados trasfondos profesionales",
  "Diferentes niveles socioeconómicos"
]

const beneficios = [
  {
    titulo: "Conexiones Significativas",
    descripcion: "En la era de las redes sociales superficiales, ofrecemos vínculos auténticos y duraderos. Construye relaciones profundas basadas en valores compartidos y apoyo mutuo."
  },
  {
    titulo: "Desarrollo Personal",
    descripcion: (
      <>
        <p>
          Accede a un sistema de crecimiento personal perfeccionado durante siglos. 
          La CILE ofrece formación para la superación personal, fomentando la autorreflexión 
          y el crecimiento en diversos aspectos de la vida.
        </p>
        <p className="mt-4">
          Desarrolla tus habilidades de liderazgo, comunicación y resolución de problemas.
        </p>
        <p className="mt-4">
          Participa en programas estructurados, mentorías personalizadas y talleres de liderazgo.
        </p>
      </>
    )
  },
  {
    titulo: "Servicio Comunitario",
    descripcion: "Forma parte de una tradición global de servicio y filantropía. Contribuye a proyectos significativos que generan un impacto positivo en la sociedad."
  }
]

export function WhyBecomeFreemason() {
  return (
    <Section className="bg-[rgba(255,255,255,0.98)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-12">
          ¿POR QUÉ SER FRANCMASÓN?
        </h2>
        
        <div className="grid md:grid-cols-[2fr_3fr] gap-8">
          {/* Columna Izquierda */}
          <Card className="p-6 border-none">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Una Hermandad Universal
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              La Francmasonería une a hombres de:
            </p>
            <div className="space-y-4">
              {valoresMasonicos.map((valor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-lg text-slate-800">{valor}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Columna Derecha */}
          <div className="space-y-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="p-6 border-none shadow-none">
                <h3 className="text-xl font-semibold mb-4 text-blue-12">
                  {beneficio.titulo}
                </h3>
                <div className="text-lg text-slate-700">
                  {beneficio.descripcion}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
