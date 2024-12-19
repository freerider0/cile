import { Section } from "../section"

const benefits = [
  "Acceso a una red internacional de profesionales",
  "Programas estructurados de desarrollo",
  "Oportunidades de liderazgo",
  "Eventos exclusivos",
  "Recursos educativos premium"
]

export default function BenefitsSection() {
  return (
    <Section>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          BENEFICIOS TANGIBLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-lg text-slate-800">{benefit}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-center text-slate-600 mt-12">
          Más allá de los beneficios prácticos, encontrarás algo invaluable: un propósito y una comunidad que te apoya en alcanzarlo.
        </p>
      </div>
    </Section>
  )
} 