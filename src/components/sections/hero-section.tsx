'use client'
import Image from 'next/image'
import Mason from '/public/assets/Logo-CLIE.png'

export default function HeroSection() {
  return (
    <section className="relative py-6 px-4 ">
      <div className="container mx-auto max-w-6xl flex  items-center">
        <div className="w-1/3 p-2">
                <Image src={Mason} alt="Mason" width={150} height={150} />
        </div>
        <div className="space-y-4 w-2/3 p-2">
            <h1 className="text-lg md:text-6xl text-blue-1 leading-tight">
              SER MASÓN
          </h1>
          
        
        </div>
      </div>
    </section>
  )
} 