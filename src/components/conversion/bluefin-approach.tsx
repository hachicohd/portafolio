import { ArrowDownRight } from "lucide-react";

export function BluefinApproach() {
  const principles = [
    {
      number: "01",
      title: "Claridad",
      description: "Organizamos la información para que el visitante entienda la empresa y sepa qué hacer."
    },
    {
      number: "02",
      title: "Credibilidad",
      description: "Construimos una presencia coherente con el nivel, la experiencia y la propuesta del negocio."
    },
    {
      number: "03",
      title: "Funcionalidad",
      description: "Diseñamos para diferentes dispositivos, navegación real, rendimiento y objetivos comerciales."
    }
  ];

  return (
    <section id="enfoque" className="w-full border-t border-bf-border-dark bg-bf-bg py-24 md:py-32 scroll-mt-16">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Título a la izquierda */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-bf-text-on-dark max-w-[14ch]">
              No diseñamos solamente para que una web se vea bien.
            </h2>
            <ArrowDownRight className="text-bf-blue mt-8" size={48} strokeWidth={1} />
          </div>

          {/* Columnas editoriales a la derecha */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {principles.map((principle, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col md:px-8 border-t md:border-t-0 md:border-l border-bf-border-dark pt-8 md:pt-0 ${idx === 0 ? 'md:pl-0 md:border-l-0' : ''}`}
              >
                <span className="font-display text-5xl font-light text-bf-muted-dark opacity-30 mb-6">
                  {principle.number}
                </span>
                <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-bf-text-on-dark mb-4">
                  {principle.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-bf-muted-dark">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}