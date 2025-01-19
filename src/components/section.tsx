import { LogoModern } from "./assets/logo-modern";

interface SectionProps {
    className?: string;
    children: React.ReactNode;
    title?: string;
    isDark?: boolean;
}
  
  export function Section({ className = "", children, title, isDark = false }: SectionProps) {
    return (
      <section className={`${isDark ? "bg-blue-12" : "bg-blue-1"} p-16 w-full mx-auto rounded ${className}`}> 
      <h2 className={`text-${isDark ? "white" : "blue-12"} text-3xl md:text-4xl font-bold text-center mb-12`}>
          {title}
        </h2>
        
          {children}
        
      </section>
    );
  }