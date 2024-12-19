import { Section } from "../section"

const developmentPoints = [
  "Programas estructurados de crecimiento",
  "Mentorías personalizadas",
  "Talleres de liderazgo y comunicación",
  "Acceso a conocimiento exclusivo"
]

export default function DevelopmentSection() {
  return (
    <Section className=" bg-[rgba(255,255,255,0.98)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          DESARROLLO PERSONAL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {developmentPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p className="text-lg text-slate-800">{point}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Imagina tener acceso a un sistema de desarrollo personal que ha sido perfeccionado durante siglos, adaptado a la era moderna. Cada encuentro, cada conversación, cada experiencia está diseñada para expandir tu comprensión del mundo y de ti mismo.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
} 