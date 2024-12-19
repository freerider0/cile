const impactPoints = [
  "Proyectos comunitarios internacionales",
  "Iniciativas educativas",
  "Programas de desarrollo sostenible",
  "Actividades culturales y humanitarias"
]

export default function ImpactSection() {
  return (
    <section className="py-20 px-4 bg-[rgba(255,255,255,0.98)] mx-auto rounded mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          IMPACTO SOCIAL
        </h2>
        <p className="text-lg text-center text-slate-600 mb-12">
          Creemos que el verdadero crecimiento personal debe traducirse en acción social positiva:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-6 rounded-lg bg-white shadow-sm"
            >
              <div className="text-primary text-2xl">•</div>
              <p className="text-lg text-slate-800">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-center text-slate-600 mt-12">
          Tu participación puede marcar la diferencia. Cada miembro aporta sus habilidades únicas para crear un impacto positivo en el mundo.
        </p>
      </div>
    </section>
  )
} 