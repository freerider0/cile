const privacyPoints = [
  "Datos protegidos según normativas vigentes",
  "Comunicación respetuosa y profesional",
  "Sin compromisos automáticos",
  "Transparencia total en el proceso"
]

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">GARANTÍA DE PRIVACIDAD</h3>
            <ul className="space-y-3">
              {privacyPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-primary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg mb-6">
              Todo cambio comienza con un primer paso. Hoy puedes dar ese primer paso.
            </p>
            <p className="text-sm text-slate-400 mt-8">
              P.D.: La CILE es una organización legalmente constituida, comprometida con la transparencia y el desarrollo humano. Todas nuestras actividades cumplen con las normativas locales e internacionales.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
} 