"use client"

import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    title: "Buscan beneficios económicos o intereses privados",
    description: "Nuestra misión no está diseñada para enriquecer a nadie personalmente ni para servir intereses particulares. Si tu enfoque principal es obtener ventajas financieras, este no es el espacio adecuado."
  },
  {
    title: "Buscan beneficios inmediatos sin aportar a cambio",
    description: "Si solo te interesa lo que puedes obtener, y no estás dispuesto a compartir, colaborar o contribuir, este no es tu espacio."
  },
  {
    title: "Tienen una mentalidad cerrada o intolerante",
    description: "Si no estás dispuesto a escuchar, aprender de perspectivas diferentes o respetar opiniones ajenas, nuestra diversidad podría no resonar contigo."
  },
  {
    title: "No están comprometidos con su propio crecimiento",
    description: "La mejora personal requiere esfuerzo y dedicación. Si no estás dispuesto a trabajar en ti mismo, esta comunidad no te ofrecerá lo que buscas."
  },
  {
    title: "Priorizan lo superficial sobre lo significativo",
    description: "No somos una red social para ganar contactos; somos una red de personas comprometidas con el propósito, el conocimiento y la acción."
  },
  {
    title: "Prefieren competir en lugar de colaborar",
    description: "Nuestra fuerza radica en la hermandad y la cooperación, no en las rivalidades ni en el ego."
  }
]

export function NotForYouSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          No es para los que..
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-300">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 