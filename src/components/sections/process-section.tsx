import { Section } from "../section"

const processSteps = [
  {
    title: "PRIMER CONTACTO",
    steps: [
      "Completas el formulario de información",
      "Recibes una llamada personal",
      "Resolvemos todas tus dudas"
    ]
  },
  {
    title: "CONOCIMIENTO MUTUO",
    steps: [
      "Participas en una sesión informativa",
      "Conoces a otros miembros",
      "Exploras las oportunidades disponibles"
    ]
  },
  {
    title: "PRIMEROS PASOS",
    steps: [
      "Defines tus objetivos personales",
      "Te integras gradualmente",
      "Comienzas tu desarrollo"
    ]
  }
]

export default function ProcessSection() {
  return (
    <Section title="¿CÓMO SER MASÓN?">
      <div className="container mx-auto max-w-6xl">
        
        <p className="text-lg text-center text-blue-12 mb-12">
          El proceso es simple, 3 pasos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-blue-1 relative"
            >
              <div className="absolute -top-8 left-6 text-[64px] font-bold text-blue-4 opacity-90">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-blue-12 mb-6 mt-6">{step.title}</h3>
              <ul className="space-y-4">
                {step.steps.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-blue-12 mt-1">•</span>
                    <span className="text-blue-12">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
} 