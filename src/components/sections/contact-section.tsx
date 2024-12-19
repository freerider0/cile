"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Section } from "../section"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
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
          >
            QUIERO SABER MÁS
          </Button>
        </form>
        <div className="mt-8 text-center text-sm text-slate-600">
          <p>Tu información será tratada con absoluta confidencialidad. Solo utilizaremos tus datos para contactarte y compartir información relevante sobre nuestros programas.</p>
        </div>
      </div>
    </Section>
  )
} 