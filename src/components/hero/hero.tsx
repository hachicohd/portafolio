"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { projects } from "../../data/projects";

const transition = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const serCaptures = [
  {
    id: "inicio",
    label: "Inicio",
    src: "/Captura Inicio SER.png",
    alt: "Página de inicio de SER Consultores",
    liveUrl: "https://www.serconsultoresgroup.com/",
    width: 1920,
    height: 880,
  },
  {
    id: "servicios",
    label: "Servicios",
    src: "/Captura servicios SER.png",
    alt: "Página de servicios de SER Consultores",
    liveUrl: "https://www.serconsultoresgroup.com/servicios",
    width: 1920,
    height: 861,
  },
  {
    id: "quienes-somos",
    label: "Quiénes Somos",
    src: "/Captura quienes somos SER.png",
    alt: "Página Quiénes Somos de SER Consultores",
    liveUrl: "https://www.serconsultoresgroup.com/quienes-somos",
    width: 1920,
    height: 864,
  },
  {
    id: "contacto",
    label: "Contacto",
    src: "/Captura contacto SER.png",
    alt: "Página de contacto de SER Consultores",
    liveUrl: "https://www.serconsultoresgroup.com/contacto",
    width: 1920,
    height: 855,
  },
] as const;

function CatalogAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 78% 12%, rgba(37,132,255,.15), transparent 30%), radial-gradient(circle at 12% 92%, rgba(112,214,255,.07), transparent 28%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,214,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(112,214,255,.16) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.055] mix-blend-soft-light">
        <filter id="bluefin-catalog-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#bluefin-catalog-grain)"
        />
      </svg>

      <m.div
        className="absolute left-[-10%] top-[18%] h-px w-[58%] bg-gradient-to-r from-transparent via-[#70d6ff]/30 to-transparent"
        animate={{ x: ["-2%", "4%", "-2%"] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
      <m.div
        className="absolute bottom-[15%] right-[-12%] h-px w-[48%] bg-gradient-to-r from-transparent via-[#2584ff]/25 to-transparent"
        animate={{ x: ["3%", "-4%", "3%"] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}

function SerCatalogShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // NUEVO: Bloqueo absoluto de scroll hasta que el usuario interactúe
  const userInteracted = useRef(false);

  const updateState = useCallback(() => {
    if (!emblaApi) return;

    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());

    // NUEVO: Si no hay interacción (es carga automática), detenemos el scroll
    if (!userInteracted.current) return;

    thumbnailRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateState();

    // NUEVO: Escuchamos si arrastran la foto con ratón o dedo
    const markInteracted = () => { userInteracted.current = true; };
    emblaApi.on("pointerDown", markInteracted);

    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);

    return () => {
      emblaApi.off("pointerDown", markInteracted);
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      userInteracted.current = true; // Interacción por teclado
      emblaApi?.scrollPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      userInteracted.current = true; // Interacción por teclado
      emblaApi?.scrollNext();
    }
  };

  const activeCapture = serCaptures[selectedIndex];

  return (
    <div className="min-w-0" onKeyDown={handleKeys}>
      <div className="overflow-hidden rounded-[12px] border border-[#081a2f]/[0.15] bg-[#dfe8f2] shadow-[0_22px_55px_rgba(8,26,47,0.16)] sm:rounded-[16px]">
        <div className="grid h-9 grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-[#081a2f]/[0.12] bg-[#f8fbfe] px-3 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#081a2f]/50 sm:h-11 sm:px-4 sm:text-[9px]">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="size-1.5 rounded-full bg-[#081a2f]/25" />
            <i className="size-1.5 rounded-full bg-[#081a2f]/25" />
            <i className="size-1.5 rounded-full bg-[#081a2f]/25" />
          </span>
          <span className="max-w-[22ch] truncate">SER Consultores</span>
          <span className="justify-self-end tabular-nums">
            {String(selectedIndex + 1).padStart(2, "0")} / 04
          </span>
        </div>

        <div
          ref={emblaRef}
          className="overflow-hidden bg-[#071323]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Vistas del proyecto SER Consultores"
          tabIndex={0}
        >
          <div className="flex touch-pan-y">
            {serCaptures.map((capture, index) => (
              <figure
                key={capture.id}
                className="relative m-0 aspect-[1920/880] min-w-0 flex-[0_0_100%] overflow-hidden bg-[#071323]"
                aria-label={`${capture.label}, vista ${index + 1} de 4`}
              >
                <Image
                  src={capture.src}
                  alt={capture.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 54vw, 94vw"
                  className="object-contain object-top"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="flex min-h-11 items-center justify-between gap-4 border-t border-[#081a2f]/[0.12] bg-[#f8fbfe] px-3 sm:min-h-[52px] sm:px-4">
          <div className="min-w-0">
            <span className="block truncate text-[10px] font-bold uppercase tracking-[0.1em] text-[#081a2f] sm:text-[11px]">
              {activeCapture.label}
            </span>
            <a
              href={activeCapture.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 hidden text-[9px] font-semibold text-[#0c4a8a] underline-offset-4 hover:underline sm:inline-block"
            >
              Ver sitio en vivo ↗
            </a>
          </div>

          <div className="flex shrink-0 gap-1.5">
            <button
              type="button"
              onClick={() => {
                userInteracted.current = true; // Interacción por clic
                emblaApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              aria-label="Vista anterior"
              className="grid size-9 place-items-center rounded-md bg-[#081a2f] text-white transition-opacity disabled:cursor-default disabled:opacity-20 sm:size-10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => {
                userInteracted.current = true; // Interacción por clic
                emblaApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              aria-label="Vista siguiente"
              className="grid size-9 place-items-center rounded-md bg-[#081a2f] text-white transition-opacity disabled:cursor-default disabled:opacity-20 sm:size-10"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-2.5 flex snap-x snap-proximity gap-2 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-color:rgba(8,26,47,.25)_transparent] [scrollbar-width:thin] sm:mt-3 sm:gap-2.5"
        aria-label="Seleccionar página de SER Consultores"
      >
        {serCaptures.map((capture, index) => {
          const active = selectedIndex === index;

          return (
            <button
              key={capture.id}
              ref={(node) => {
                thumbnailRefs.current[index] = node;
              }}
              type="button"
              onClick={() => {
                userInteracted.current = true; // Interacción por clic
                emblaApi?.scrollTo(index);
              }}
              aria-label={`Mostrar ${capture.label}`}
              aria-current={active ? "true" : undefined}
              className={`group min-w-0 flex-[0_0_42%] snap-start rounded-lg border p-1.5 text-left transition-[opacity,border-color,transform] sm:basis-[31%] lg:basis-[23%] ${
                active
                  ? "border-[#2584ff] bg-[#2584ff]/[0.06] opacity-100"
                  : "border-[#081a2f]/[0.12] bg-white/[0.45] opacity-60 hover:opacity-90"
              }`}
            >
              <span className="relative block aspect-[1920/880] overflow-hidden rounded-[5px] bg-[#071323]">
                <Image
                  src={capture.src}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-contain object-top"
                />
              </span>
              <span className="mt-1.5 grid grid-cols-[auto_1fr] items-baseline gap-2 px-0.5 pb-0.5">
                <b className="text-[8px] tabular-nums text-[#2584ff] sm:text-[9px]">
                  {String(index + 1).padStart(2, "0")}
                </b>
                <span className="truncate text-[8px] font-bold uppercase tracking-[0.08em] text-[#081a2f] sm:text-[9px]">
                  {capture.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Mostrando {activeCapture.label}, vista {selectedIndex + 1} de 4.
      </p>
    </div>
  );
}

export function Hero() {
  const primerProyecto = projects[0];
  const projectCount = projects.length + 1; // +1 porque SER está hardcodeado aquí
  const importedViews = projects.reduce(
    (total, project) => total + (project.views?.length ?? 0),
    0
  );
  const viewCount = serCaptures.length + importedViews;
  const currentYear = new Date().getFullYear();
  const totalLabel = String(projectCount).padStart(2, "0");
  
  // 🟢 Enlace de WhatsApp actualizado con número y mensaje predeterminado
  const whatsappUrl = "https://wa.me/584147496774?text=Busco%20m%C3%A1s%20informaci%C3%B3n";

  if (!primerProyecto) return null;

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <section
          className="relative isolate w-full overflow-hidden bg-[#030b14] px-2.5 py-3 sm:px-5 sm:py-6 lg:px-8 lg:py-10"
          aria-labelledby="catalog-title"
        >
          <CatalogAtmosphere />

          <m.div
            initial={{ opacity: 0, y: 16, scale: 0.992 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
            className="relative z-10 mx-auto w-full max-w-[1540px] overflow-hidden rounded-[16px] border border-white/10 bg-[#f3f7fc] shadow-[0_32px_100px_rgba(0,0,0,0.42)] sm:rounded-[22px]"
          >
            {/* 2. Barra editorial de la portada */}
            <div className="grid h-11 grid-cols-[1fr_auto] items-center gap-4 border-b border-[#081a2f]/[0.12] bg-[#edf3f9] px-4 sm:h-[52px] sm:grid-cols-[1fr_auto_1fr] sm:px-6">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <i className="size-1.5 rounded-full bg-[#081a2f]/25 sm:size-2" />
                <i className="size-1.5 rounded-full bg-[#081a2f]/25 sm:size-2" />
                <i className="size-1.5 rounded-full bg-[#081a2f]/25 sm:size-2" />
              </div>

              <p className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-[#081a2f]/[0.55] sm:block sm:text-[10px]">
                BlueFIn · Proyectos digitales seleccionados · {currentYear}
              </p>

              <p className="justify-self-end text-[10px] font-bold tabular-nums tracking-[0.12em] text-[#081a2f]/70">
                01 / {totalLabel}
              </p>
            </div>

            {/* 3. Portada principal */}
            <div className="grid min-w-0 gap-8 px-5 py-6 sm:px-8 sm:py-9 lg:grid-cols-[minmax(350px,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-10 lg:px-12 lg:py-12 xl:grid-cols-[minmax(410px,0.76fr)_minmax(0,1.24fr)] xl:gap-14 xl:px-16 xl:py-14">
              <header className="relative z-10 min-w-0 overflow-hidden lg:border-r lg:border-[#081a2f]/[0.12] lg:pr-10 xl:pr-14">
                <div className="mb-5 flex items-center gap-3 sm:mb-6">
                  <span
                    className="h-px w-8 bg-[#2584ff] sm:w-10"
                    aria-hidden="true"
                  />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0c4a8a] sm:text-[11px]">
                    Diseño y desarrollo web
                  </p>
                </div>

                <h1
                  id="catalog-title"
                  className="max-w-[12ch] text-balance font-display text-[clamp(2.35rem,9.5vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#081a2f] lg:text-[clamp(2.8rem,3.8vw,4.15rem)]"
                >
                  Creamos páginas web que convierten el valor de una empresa en confianza.
                </h1>

                <p className="mt-5 max-w-[42ch] text-[14px] leading-6 text-[#081a2f]/[0.65] sm:text-[15px] lg:mt-7 lg:text-[16px] lg:leading-7">
                  Diseñamos experiencias digitales claras y sólidas para que cada negocio comunique mejor, se diferencie y facilite el siguiente paso de sus clientes.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-8">
                  <a
                    href="#proyectos"
                    className="inline-flex min-h-11 items-center gap-4 rounded-lg bg-[#081a2f] px-5 text-[12px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2584ff] sm:min-h-12 sm:px-6 sm:text-[13px]"
                  >
                    Explorar proyectos
                    <span aria-hidden="true">↓</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center border-b border-[#081a2f]/30 text-[12px] font-semibold text-[#081a2f] transition-colors hover:border-[#2584ff] hover:text-[#0c4a8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2584ff] sm:text-[13px]"
                  >
                    Hablemos de tu proyecto ↗
                  </a>
                </div>

                <div className="mt-7 hidden grid-cols-2 gap-5 border-t border-[#081a2f]/[0.12] pt-5 text-[#081a2f] sm:grid lg:mt-10">
                  <div>
                    <strong className="block font-display text-[22px] font-semibold leading-none tabular-nums">
                      {String(projectCount).padStart(2, "0")}
                    </strong>
                    <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#081a2f]/[0.48]">
                      Proyectos
                    </span>
                  </div>
                  <div>
                    <strong className="block font-display text-[22px] font-semibold leading-none tabular-nums">
                      {String(viewCount).padStart(2, "0")}
                    </strong>
                    <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#081a2f]/[0.48]">
                      Vistas
                    </span>
                  </div>
                </div>
              </header>

              <m.div
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.1 }}
                className="relative min-w-0 overflow-hidden"
              >
                <span
                  className="pointer-events-none absolute -right-1 -top-10 z-0 hidden font-display text-[clamp(7rem,12vw,12rem)] font-semibold leading-none tracking-[-0.09em] text-[#2584ff]/[0.07] lg:block"
                  aria-hidden="true"
                >
                  01
                </span>

                <div className="relative z-10 min-w-0">
                  <SerCatalogShowcase />
                </div>
              </m.div>
            </div>

            {/* 5. Cierre inferior de la portada */}
            <div className="grid min-h-12 grid-cols-[1fr_auto] items-center gap-4 border-t border-[#081a2f]/[0.12] px-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#081a2f]/[0.55] sm:min-h-14 sm:grid-cols-[auto_auto_1fr_auto] sm:px-8 lg:px-12 xl:px-16">
              <span>Continúa explorando</span>
              <strong className="hidden text-[#081a2f] sm:block">
                Vértice · Zoho · Nácar
              </strong>
              <span
                className="hidden h-px bg-[#081a2f]/[0.14] sm:block"
                aria-hidden="true"
              >
                <i className="block h-px w-1/3 bg-[#2584ff]" />
              </span>
              <a 
                href="#proyectos" 
                className="justify-self-end text-[9px] font-semibold text-[#0c4a8a] hover:underline"
              >
                Ver los otros 3 proyectos ↓
              </a>
            </div>
          </m.div>
        </section>
      </LazyMotion>
    </MotionConfig>
  );
}