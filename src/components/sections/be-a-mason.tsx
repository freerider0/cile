'use client'

import { motion } from "framer-motion";
import { Section } from "../section";
interface MasonicPrinciple {
  id: number;
  text: string;
}

const principles: MasonicPrinciple[] = [
  { id: 1, text: "Creer en ti mismo." },
  { id: 2, text: "Reconocer que hay cosas más importantes que el dinero." },
  { id: 3, text: "Provenir de diferentes familias y tratarnos como hermanos." },
  { id: 4, text: "Vivir en el presente, respetar la historia y colaborar para un futuro mejor." },
  { id: 5, text: "No solo creer en un mundo mejor, sino trabajar para construirlo." },
  { id: 6, text: "Formar parte de una comunidad donde crecer es una elección y ayudar es un deber." },
  { id: 7, text: "Ser parte de algo más grande: un lugar donde los valores nos unen y el propósito nos guía." },
  { id: 8, text: "Tener principios, vivir con ellos y ayudar a otros a descubrir los suyos." },
  { id: 9, text: "No importa de dónde vienes, lo que importa es hacia dónde quieres ir." },
  { id: 10, text: "Encontrar en la diversidad la fortaleza para construir juntos." },
  { id: 11, text: "Comprometerse con la verdad, el respeto y la colaboración." },
  { id: 12, text: "Buscar siempre el conocimiento, no para uno mismo, sino para compartirlo con el mundo." },
  { id: 13, text: "Caminar con humildad, actuar con compasión y pensar con claridad." },
  { id: 14, text: "Forjar conexiones que duran toda la vida, basadas en confianza y hermandad." },
  { id: 15, text: "Ser una comunidad donde crecer es una elección y ayudar es un deber." },
  { id: 16, text: "Descubrir el potencial que llevas dentro." },
  { id: 17, text: "Formar parte de una tradición ancestral que construye un mundo mejor." },
  { id: 18, text: "Caminar por el sendero del conocimiento y la virtud." },
  { id: 19, text: "Trabajar por la paz, la igualdad y la fraternidad entre los seres humanos." },
  { id: 20, text: "Pertenecer a una hermandad que trasciende fronteras y diferencias." },
  { id: 21, text: "Aprender a construir templos en tu corazón y en la sociedad." },
  { id: 22, text: "Un compromiso con los valores más elevados de la humanidad." },
  { id: 23, text: "Encontrar respuestas profundas mientras haces preguntas esenciales." },
  { id: 24, text: "Unirte a una comunidad que busca la luz a través del estudio y la reflexión." },
  { id: 25, text: "Poner tus talentos al servicio del progreso colectivo." },
  { id: 26, text: "Ser parte de una red global de buscadores de la verdad." },
  { id: 27, text: "Un desafío personal para convertirte en tu mejor versión." },
];

const BackgroundSVG = () => (
  <div className="absolute inset-0 w-full h-full opacity-5 flex items-center justify-center">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      version="1.1" 
      id="Layer_1" 
      x="0px" 
      y="0px" 
      viewBox="0 0 432 432" 
      className="w-full h-auto"
    >
      <g>
        <defs>
          <rect id="SVGID_1_" width="432" height="432"/>
        </defs>
        <clipPath id="clip1">
          <use xlinkHref="#SVGID_1_"/>
        </clipPath>
        <g style={{ clipPath: 'url(#clip1)' }}>
          <path fill="#FFFFFF" d="M354.6,251.6c-2.5,2.5-4.9,5.2-7.8,7c-5.6-12.7-11.5-25.1-17.3-37.6c7.3-8.3,15.6-15.7,23.5-23.5h55.1c-0.5,0.9-31.1,31.4-45.9,46.2C359.6,246.4,357.2,249,354.6,251.6"/>
          <path fill="#FFFFFF" d="M403.5,391c-0.7-0.7-2.4-2.9-3.2-4.3c-59-96.1-119.4-191.6-178.6-288.5c-6.1-10-13.2-20.8-19.7-31.3c-2.3-3.7-4.8-7.4-5.9-10.8c-5.6-16.8,5.7-31.3,19.4-32.7c17.2-1.7,24.7,8.3,30.3,20c10.8,22.7,21.4,47.6,31.6,69.7c14.3,31.1,28.5,62.2,42.4,92.4C348.3,267.4,375.1,329.9,403.5,391"/>
          <path fill="#FFFFFF" d="M105,221.4c-6,11.6-11.8,23.5-17.6,35.4c-2.9-1.8-5.2-4.3-7.6-6.8c-17.1-17.1-34.7-35.1-52.1-52.1c17.4-0.6,35.9-0.1,53.8-0.3C89.2,205.6,97.8,212.7,105,221.4"/>
          <path fill="#FFFFFF" d="M414.6,197.6H427c-0.8,1.1-50.2,51.4-74,74.3c-1.3-2.9-2.6-5.9-4.1-8.6C370.6,241.2,392.6,219.4,414.6,197.6"/>
          <path fill="#FFFFFF" d="M331.4,281.3c1.6,2.8,3.7,5.1,4.9,8.4c-40.2,39.5-80.2,79.2-120,119.1c-40-39.2-79.3-79-118.9-118.6c1.9-3.1,4.3-7.2,6.5-9.2c28,28.1,55.8,56.9,84.3,85.4c6.7,6.7,13.7,14,21.1,21.3c1.9,1.9,5.4,6.5,7.3,6.8c1.7,0.2,5.3-4.5,7.3-6.5C259.1,352.4,296.4,316.2,331.4,281.3"/>
          <path fill="#FFFFFF" d="M204.7,74.4c4.8,7.9,9.9,15.5,14.6,23.8c-62.9,94.1-124.5,190-187.5,284.5c-1.7,2.6-5.5,7.9-5.9,8.1c55.4-113.9,110.8-227.8,165.9-342C193.9,58.9,199.8,66.5,204.7,74.4"/>
          <path fill="#FFFFFF" d="M328.4,276.5c-3.8,5.2-8.9,9.5-13.5,14c-32.4,32.4-65.3,65.5-97.8,98.1c-32.9-32.1-64.9-65.2-97.5-97.8c-4.6-4.6-9.4-9.1-13.5-14.3c7.2-10.6,14.4-21.2,21.3-32.2c2.1,1.7,3.9,3.3,5.7,5.1c27.7,27.7,56.6,55.9,84.6,83.7c29.9-30.1,59.7-60.4,89.7-90.5C314.5,253.8,321.3,265.3,328.4,276.5"/>
          <path fill="#FFFFFF" d="M84.7,261.6c-1.6,3.6-3.1,6.8-4.9,10c-1-0.7-51-49.9-74.8-73.8c4.5,0,12.8,0,16.5,0.1c2.2,2.2,5.3,5.2,7.6,7.5C47.5,223.9,67.5,243.6,84.7,261.6"/>
        </g>
      </g>
    </svg>
  </div>
)

export function BeAMason() {
  return (
    <Section className=" text-white" title="Ser Masón Es..." isDark={true}>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        <BackgroundSVG />
          {principles.map((principle) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: principle.id * 0.1 }}
              className="p-6 text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-yellow-8 font-semibold text-lg">
                  {principle.id.toString().padStart(2, "0")}
                </span>
                <p className="text-whiteleading-relaxed">
                  {principle.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
    </Section>
  );
}
