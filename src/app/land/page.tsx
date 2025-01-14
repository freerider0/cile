import { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import DifferenceSection from "@/components/sections/difference-section"
import DevelopmentSection from "@/components/sections/development-section"
import ConnectionsSection from "@/components/sections/connections-section"
import ImpactSection from "@/components/sections/impact-section"
import ProcessSection from "@/components/sections/process-section"
import BenefitsSection from "@/components/sections/benefits-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ExcellenceSection from "@/components/sections/excellence-section"
import ContactSection from "@/components/sections/contact-section"
import { BeAMason } from "@/components/sections/be-a-mason"
import { Videoslp } from "@/components/sections/videoslp"
import { HeroText } from "@/components/sections/hero-text"
import { NotForYouSection } from "@/components/sections/not-for-you-section"


export const metadata: Metadata = {
  title: "CILE - Francmasonería Moderna",
  description: "Una Comunidad Global para el Desarrollo Personal y la Acción Social Positiva",
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#002147] max-w-[890px] mx-auto">
      <HeroSection />
      <Videoslp />
      <HeroText />
      <BeAMason />
      <DifferenceSection />
      <DevelopmentSection />
      <ConnectionsSection />
      <ImpactSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ExcellenceSection />
      <NotForYouSection />
      <ContactSection />
     
    </main>
  )
}
