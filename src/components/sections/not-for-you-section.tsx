"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../section"

const reasons = [
  {
    title: "Personas con Intolerancia hacia la Diversidad",
    description: "Aquellos que no están dispuestos a aceptar y respetar diferentes opiniones, culturas o creencias."
  },
  {
    title: "Individuos con Motivaciones Exclusivamente Materiales",
    description: "Quienes buscan beneficios económicos o estatus social sin un compromiso genuino con los valores masónicos."
  },
  {
    title: "Personas Reticentes al Trabajo en Equipo",
    description: "Aquellos que prefieren trabajar de manera aislada y no valoran la colaboración y el apoyo mutuo."
  },
  {
    title: "Individuos con Conductas Contrarias a la Ética y la Moral",
    description: "Personas involucradas en actividades ilícitas o inmorales que contradicen los principios fundamentales de la masonería."
  },
  {
    title: "Quienes Buscan Proselitismo Religioso o Político",
    description: "La CILE promueve la libertad de pensamiento y no es un espacio para la promoción de agendas religiosas o políticas específicas."
  },
  {
    title: "Personas Impacientes con el Proceso de Crecimiento Personal",
    description: "Aquellos que no están dispuestos a invertir tiempo y esfuerzo en su desarrollo interno y en la comprensión de las enseñanzas masónicas."
  },
  {
    title: "Individuos con Falta de Compromiso hacia la Comunidad",
    description: "Personas que no muestran interés en contribuir al bienestar de la sociedad o en participar en actividades filantrópicas."
  }
]

export function NotForYouSection() {
  return (
    <Section title="No es para:">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-blue-1 border-none shadow-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-12 mb-2">
                  {reason.title}
                </h3>
                <p className="text-blue-12">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
} 