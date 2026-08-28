"use client";

import { ArrowUpRight, Info } from "lucide-react";
import { projects } from "../../data/projects";
import { ProjectShowcase } from "./project-showcase";

export function ProjectCatalog() {
  return (
    <div id="proyectos" className="w-full flex flex-col pb-32">
      {projects.map((project, index) => (
        <ProjectChapter 
          key={project.slug} 
          project={project} 
          index={index + 1} 
        />
      ))}
    </div>
  );
}

function ProjectChapter({ project, index }: { project: typeof projects[0], index: number }) {
  const numero = index < 10 ? `0${index}` : index;

  return (
    <section 
      id={`proyecto-${project.slug}`}
      className="w-full min-h-[90svh] flex items-center border-t border-bf-border-dark py-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN (3 Columnas) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-4">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-4xl font-light text-bf-muted-dark">{numero}</span>
                <div className="h-[1px] flex-1 bg-bf-border-dark"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-bf-cyan">
                  {project.client}
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-bf-text-on-dark mb-4 leading-tight">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[11px] font-semibold text-bf-muted-dark uppercase tracking-wide">
                <span>{project.industry}</span>
                <span>•</span>
                <span>{project.year || "2026"}</span>
              </div>

              <p className="text-[14px] leading-relaxed text-bf-muted-dark mb-10">
                {project.summary}
              </p>
            </div>

            {/* ACCIONES DEL PROYECTO */}
            <div className="flex flex-col gap-3 mt-auto">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex h-12 items-center justify-between rounded-xl bg-bf-text-on-dark px-6 text-[13px] font-semibold text-bf-bg transition-transform hover:scale-[1.02]"
                >
                  <span>Ver sitio en vivo</span>
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}
              
            </div>
          </div>

          {/* COLUMNA DERECHA: SHOWCASE (9 Columnas) */}
          <div className="lg:col-span-9 lg:pl-10 overflow-hidden">
             {/* 🟢 Aquí mandamos a llamar al carrusel real */}
             <ProjectShowcase project={project} />
          </div>

        </div>
      </div>
    </section>
  );
}