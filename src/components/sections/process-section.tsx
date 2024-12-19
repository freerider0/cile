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
    <section className="py-20 px-4 bg-[rgba(255,255,255,0.98)] mx-auto rounded mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿CÓMO FUNCIONA?
        </h2>
        <p className="text-lg text-center text-slate-600 mb-12">
          El proceso es simple pero significativo:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-slate-50"
            >
              <h3 className="text-xl font-bold text-primary mb-6">{step.title}</h3>
              <ul className="space-y-4">
                {step.steps.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 