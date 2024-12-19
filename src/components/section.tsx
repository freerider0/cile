interface SectionProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export function Section({ className = "", children }: SectionProps) {
    return (
      <section className={`p-16 w-full mx-auto rounded mt-20 ${className}`}> 
        
          {children}
      </section>
    );
  }