"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Section } from "../section"
import { Loader2 } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Section className="bg-[rgba(255,255,255,0.98)]">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Gracias por tu interés!
          </h2>
          <p className="text-slate-600 mb-6">
            Hemos recibido tu información correctamente. Nos pondremos en contacto contigo lo antes posible.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)}
            variant="outline"
          >
            Enviar otro mensaje
          </Button>
        </div>
      </Section>
    )
  }

  return (
    <Section className="bg-[rgba(255,255,255,0.98)]">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          SOLICITA INFORMACIÓN SIN COMPROMISO
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Ciudad"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ENVIANDO...
              </>
            ) : (
              "QUIERO SABER MÁS"
            )}
          </Button>
        </form>
        <div className="mt-8 text-center text-sm text-slate-600">
          <p>
            Tu información será tratada con absoluta confidencialidad. Solo utilizaremos tus datos para contactarte y compartir información relevante sobre nuestros programas. Al enviar este formulario, aceptas nuestra{' '}
            <a 
              href="/politica-de-privacidad"
              className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver política de privacidad (se abre en una nueva ventana)"
            >
              política de privacidad
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
} 