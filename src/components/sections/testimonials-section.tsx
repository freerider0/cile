import { Section } from "../section"

const testimonials = [
  {
    quote: "Encontré mucho más que una organización; encontré un camino de crecimiento continuo.",
    author: "María S.",
    role: "Empresaria"
  },
  {
    quote: "La diversidad de perspectivas y el nivel de las conversaciones son incomparables.",
    author: "Carlos R.",
    role: "Profesor Universitario"
  },
  {
    quote: "Me ha permitido conectar con personas extraordinarias de todo el mundo.",
    author: "Ana L.",
    role: "Investigadora"
  }
]

export default function TestimonialsSection() {
  return (
    <Section>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          TESTIMONIOS DE TRANSFORMACIÓN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-slate-50"
            >
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
} 