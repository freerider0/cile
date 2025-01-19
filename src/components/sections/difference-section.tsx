import { Section } from "../section"

const differences = [
  {
    title: "Compromiso con la tradición escocesa auténtica",
    description: "Los miembros de la CILE practican un Rito Escocés Antiguo y Aceptado que respeta profundamente los rituales y valores tradicionales, manteniendo su pureza y simbolismo."
  },
  {
    title: "Carácter internacional y pluricultural",
    description: "La CILE reúne logias de diferentes países, fomentando un intercambio cultural y filosófico único que enriquece la experiencia masónica de cada miembro."
  },
  {
    title: "Orientación hacia la acción profana",
    description: "Además de trabajar en el perfeccionamiento personal, los miembros de la CILE tienen un enfoque claro hacia proyectos concretos de impacto en la sociedad, encarnando la fraternidad y solidaridad masónica en su máxima expresión."
  },
  {
    title: "Independencia y soberanía",
    description: "La CILE promueve una estructura en la que las logias y sus miembros disfrutan de autonomía, dentro de un marco común de principios compartidos, diferenciándose de estructuras más centralizadas o jerárquicas."
  },
  {
    title: "Énfasis en el pensamiento libre",
    description: "Los miembros de la CILE valoran y promueven la libertad de pensamiento y el debate enriquecedor, asegurando que cada hermano o hermana pueda explorar su propio camino hacia la luz sin dogmatismos."
  },
  {
    title: "Conexión profunda con los valores humanistas",
    description: "La CILE pone en primer plano principios universales como la fraternidad, la igualdad, y la solidaridad, adaptándolos a los desafíos contemporáneos, como las crisis humanitarias o la sostenibilidad."
  },
  {
    title: "Compromiso con la educación continua",
    description: "A través de talleres, conferencias y trabajos rituales, los miembros de la CILE se comprometen con una formación constante que va más allá del simbolismo masónico, abarcando áreas como la filosofía, la historia y las ciencias sociales."
  },
  {
    title: "Visión contemporánea e inclusiva",
    description: "La CILE trabaja para adaptar los valores masónicos a las necesidades del mundo actual, fomentando la diversidad, la igualdad de género y la inclusión de nuevas generaciones de masones."
  },
  {
    title: "Espacios de encuentro únicos",
    description: "Los eventos de la CILE, como sus Conventos internacionales y sus Encendidos de Luces, son momentos de gran simbolismo y cohesión, donde se celebran tanto los logros masónicos como el espíritu fraternal entre sus miembros."
  },
  {
    title: "Red de apoyo global",
    description: "Pertenecer a la CILE significa formar parte de una red internacional de apoyo mutuo, donde cada miembro encuentra respaldo y fraternidad, no importa dónde se encuentre en el mundo."
  }
];

export default function DifferenceSection() {
  return (
    <Section className="bg-[rgba(255,255,255,0.98)]" title="¿QUÉ NOS HACE DIFERENTES?">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto space-y-6">
          {differences.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-blue-12 mb-2">{item.title}</h3>
              <p className="text-blue-12">{item.description}</p>
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