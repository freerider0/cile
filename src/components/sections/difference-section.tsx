import { Section } from "../section"

const differences = [
  "Somos una comunidad global y diversa",
  "Promovemos el pensamiento crítico y el diálogo constructivo",
  "Ofrecemos un sistema probado de desarrollo personal",
  "Trabajamos activamente en proyectos sociales",
  "Construimos puentes entre culturas y personas"
]

export default function DifferenceSection() {
  return (
    <Section className="bg-[rgba(255,255,255,0.98)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿QUÉ NOS HACE DIFERENTES?
        </h2>
        <div className=" max-w-4xl mx-auto">
          {differences.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-slate-50"
            >
              <div className="text-primary text-2xl">•</div>
              <p className="text-lg text-slate-800">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-lg text-slate-600">
          <p>
            La CILE (Confederación Internacional de Logias Escocesas) representa la evolución natural de una tradición centenaria. Aquí, profesionales, empresarios, académicos y personas comprometidas con su crecimiento encuentran un espacio para desarrollar su máximo potencial.
          </p>
        </div>
      </div>
    </Section>
  )
} 