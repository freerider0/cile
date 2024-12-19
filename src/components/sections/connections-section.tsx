import { Section } from "../section"

const connectionPoints = [
  "Networking internacional de alto nivel",
  "Relaciones basadas en valores compartidos",
  "Colaboraciones profesionales genuinas",
  "Amistades que duran toda la vida"
]

export default function ConnectionsSection() {
  return (
    <Section className="bg-[rgba(255,255,255,0.98)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          CONEXIONES SIGNIFICATIVAS
        </h2>
        <p className="text-lg text-center text-slate-600 mb-12">
          En la era de las redes sociales superficiales, ofrecemos algo diferente:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {connectionPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-slate-100 hover:bg-slate-100 transition-colors"
            >
              <p className="text-lg font-medium text-slate-800">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-center text-slate-600 mt-12">
          No se trata solo de conocer personas, sino de formar parte de una comunidad global donde cada miembro está comprometido con la excelencia y el crecimiento mutuo.
        </p>
      </div>
    </Section>
  )
} 