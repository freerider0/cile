"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../section"

const profiles = [
  {
    title: "Personas Comprometidas con el Autodesarrollo",
    description: "Individuos interesados en el crecimiento personal, la reflexión y la búsqueda de la verdad."
  },
  {
    title: "Defensores de Valores Éticos y Morales",
    description: "Quienes valoran la integridad, la honestidad y la justicia, y desean promover estos principios en su vida diaria."
  },
  {
    title: "Promotores de la Fraternidad y la Solidaridad",
    description: "Personas que buscan construir lazos de hermandad y apoyo mutuo, tanto dentro de la organización como en la sociedad en general."
  },
  {
    title: "Interesados en la Filantropía y el Servicio Comunitario",
    description: "Aquellos que desean contribuir activamente al bienestar de su comunidad a través de acciones altruistas y proyectos sociales."
  },
  {
    title: "Amantes del Conocimiento y la Sabiduría",
    description: "Individuos con una inclinación hacia el aprendizaje continuo, la exploración de diversas disciplinas y el intercambio de ideas."
  },
  {
    title: "Respetuosos de la Diversidad y la Tolerancia",
    description: "Personas abiertas a diferentes perspectivas, culturas y creencias, y que promueven la convivencia pacífica y el respeto mutuo."
  },
  {
    title: "Ciudadanos Responsables y Activos",
    description: "Quienes desean participar en la construcción de una sociedad más justa y equitativa, asumiendo un rol activo en asuntos cívicos y sociales."
  }
]

export function ForYouSection() {
  return (
    <Section title="Es para:" >
     
        <div className="grid gap-6 md:grid-cols-2">
          {profiles.map((profile, index) => (
            <Card key={index} className="bg-blue-1 border-none shadow-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-12 mb-2">
                  {profile.title}
                </h3>
                <p className="text-blue-12">
                  {profile.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
  
    </Section>
  )
} 