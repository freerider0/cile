import { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import DifferenceSection from "@/components/sections/difference-section"
import ProcessSection from "@/components/sections/process-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import { BeAMason } from "@/components/sections/be-a-mason"
import { HeroText } from "@/components/sections/hero-text"
import { NotForYouSection } from "@/components/sections/not-for-you-section"
import { WhyBecomeFreemason } from "@/components/sections/whybecomefreemason"
import { LogoModern } from "@/components/assets/logo-modern"
import { ForYouSection } from "@/components/sections/for-you-section"

export const metadata: Metadata = {
  title: "CILE - Francmasonería Moderna",
  description: "Una Comunidad Global para el Desarrollo Personal y la Acción Social Positiva",
}

export default function LandingPage() {
  return (
    <main className="min-h-screen  mx-auto">
      <HeroSection />

      <HeroText />
      <LogoModern className="my-10 w-4 h-4 text-yellow-9" />

      <WhyBecomeFreemason />

      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />

      <BeAMason />
      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />

      <DifferenceSection />
      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />


      <ProcessSection />
      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />

      <TestimonialsSection />
      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />

      <ForYouSection />
      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />

      <NotForYouSection />
      <LogoModern className="my-10 w-5 h-5 text-yellow-9" />

      <ContactSection />
     
    </main>
  )
}
