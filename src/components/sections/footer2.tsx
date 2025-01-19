import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import legalInfo from '@/app/legal/legal-info.json'

const privacyPoints = [
  "Datos protegidos según normativas vigentes",
  "Comunicación respetuosa y profesional",
  "Sin compromisos automáticos",
  "Transparencia total en el proceso"
]

const footerLinks = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ],
  legal: [
    { name: 'Aviso Legal', href: '/legal/aviso-legal' },
    { name: 'Política de Privacidad', href: '/legal/politica-privacidad' },
    { name: 'Política de Cookies', href: '/legal/politica-cookies' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ],
}

export function Footer() {
  const { entity } = legalInfo
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mauve-12 text-white mt-12">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Privacy Guarantee Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-slate-700 pb-12">
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
              P.D.: LA C.·.I.·.L.·.E.·. es una organización legalmente constituida, comprometida con la transparencia y el desarrollo humano. Todas nuestras actividades cumplen con las normativas locales e internacionales.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">LA C.·.I.·.L.·.E.·.</h3>
            <p className="text-sm text-slate-300">
              {entity.address}<br />
              {entity.postalCode} {entity.city}
            </p>
            <p className="text-sm text-slate-300">
              Email: {entity.email}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Enlaces</h3>
            <nav className="space-y-2">
              {footerLinks.main.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${social.name}`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-300">
              © {currentYear} {entity.commercialName}. Todos los derechos reservados.
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
} 