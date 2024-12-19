import { Section } from "../section"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

const excellencePoints = [
  "Programas cuidadosamente estructurados",
  "Formadores altamente cualificados",
  "Contenido actualizado y relevante",
  "Estándares internacionales"
]

const values = [
  "El deseo constante de nuevo conocimiento",
  "Compromiso con el crecimiento personal",
  "Deseo de impactar positivamente en el mundo",
  "Apertura a nuevas perspectivas"
]

export default function ExcellenceSection() {
  return (
    <Section className="bg-[rgba(255,255,255,0.95)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          LA C.·.I.·.L.·.E.·. puede ser para los que...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <h3 className="text-lg font-semibold text-primary">Buscan:</h3>
              </CardHeader>
              <CardContent className="grid gap-4">
                {excellencePoints.map((point, index) => (
                  <Card 
                    key={index} 
                    className="p-4 transition-all hover:shadow-md hover:scale-[1.02]"
                  >
                    <p className="text-slate-700">{point}</p>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <h3 className="text-lg font-semibold text-primary">Se identifican con estos valores:</h3>
              </CardHeader>
              <CardContent className="grid gap-4">
                {values.map((value, index) => (
                  <Card 
                    key={index} 
                    className="p-4 transition-all hover:shadow-md hover:scale-[1.02]"
                  >
                    <p className="text-slate-700">{value}</p>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
} 