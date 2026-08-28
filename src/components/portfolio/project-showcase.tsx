"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  type CSSProperties,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { PortfolioProject } from "../../data/projects";

type Props = {
  project: PortfolioProject;
  compact?: boolean;
};

const DEFAULT_SHOWCASE_PALETTE = {
  panelBg: "#F3F7FC",
  chromeBg: "#EAF1F8",
  chromeInk: "#081A2F",
  border: "rgba(8,26,47,.14)",
  muted: "rgba(8,26,47,.60)",
} as const;

export function ProjectShowcase({ project, compact = false }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  
  // NUEVO: Referencia para saber si es la carga inicial de la página
  const isFirstRender = useRef(true);

  const syncState = useCallback(() => {
    if (!emblaApi) return;

    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());

    // NUEVO: Si es la primera vez que carga, cancelamos el scroll automático de la página.
    if (isFirstRender.current) return;

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

    syncState();
    // NUEVO: Después de sincronizar por primera vez, desactivamos el bloqueo
    isFirstRender.current = false; 

    emblaApi.on("select", syncState);
    emblaApi.on("reInit", syncState);

    return () => {
      emblaApi.off("select", syncState);
      emblaApi.off("reInit", syncState);
    };
  }, [emblaApi, syncState]);

  useEffect(() => {
    if (!expanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expanded]);

  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi?.scrollPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi?.scrollNext();
    }
  };

  const activeView = project.views[selectedIndex];
  const palette = project.palette ?? DEFAULT_SHOWCASE_PALETTE;

  const vars = {
    "--project-accent": project.accent ?? "#2584FF",
    "--project-panel": palette.panelBg,
    "--project-chrome": palette.chromeBg,
    "--project-chrome-ink": palette.chromeInk,
    "--project-border": palette.border,
    "--project-muted": palette.muted,
  } as CSSProperties;

  return (
    <div
      className="min-w-0"
      style={vars}
      data-compact={compact || undefined}
      onKeyDown={handleKeys}
    >
      <div className="overflow-hidden rounded-[14px] border border-[var(--project-border)] bg-[var(--project-panel)] shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:rounded-[18px]">
        <div className="grid min-h-10 grid-cols-[1fr_auto] items-center gap-3 border-b border-[var(--project-border)] bg-[var(--project-chrome)] px-3 text-[8px] font-semibold uppercase tracking-[0.12em] text-[var(--project-muted)] sm:min-h-12 sm:grid-cols-[1fr_auto_1fr] sm:px-4 sm:text-[9px]">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <i className="size-1.5 rounded-full bg-current opacity-30" />
            <i className="size-1.5 rounded-full bg-current opacity-30" />
            <i className="size-1.5 rounded-full bg-current opacity-30" />
          </span>

          <span className="hidden max-w-[28ch] truncate text-center sm:block">
            {project.client}
          </span>

          <span className="justify-self-end tabular-nums">
            {String(selectedIndex + 1).padStart(2, "0")} / {String(project.views.length).padStart(2, "0")}
          </span>
        </div>

        <div
          ref={emblaRef}
          className="overflow-hidden bg-[var(--project-panel)] outline-none"
          role="region"
          aria-roledescription="carousel"
          aria-label={`Vistas del proyecto ${project.client}`}
          tabIndex={0}
        >
          <div className="flex touch-pan-y items-start">
            {project.views.map((view, index) => (
              <figure
                key={view.id}
                className="m-0 min-w-0 flex-[0_0_100%] bg-[var(--project-panel)]"
                aria-label={`${view.label}, vista ${index + 1} de ${project.views.length}`}
                aria-hidden={selectedIndex !== index}
              >
                <Image
                  src={view.desktopSrc}
                  alt={view.alt}
                  width={view.width ?? 1920}
                  height={view.height ?? 860}
                  priority={project.number === "01" && index === 0}
                  sizes={
                    compact
                      ? "(min-width: 1200px) 52vw, (min-width: 768px) 58vw, 94vw"
                      : "(min-width: 1200px) 68vw, (min-width: 768px) 92vw, 94vw"
                  }
                  draggable={false}
                  className="block h-auto w-full select-none object-contain object-top"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="flex min-h-12 items-center justify-between gap-3 border-t border-[var(--project-border)] bg-[var(--project-chrome)] px-3 sm:min-h-14 sm:px-4">
          <div className="min-w-0">
            <span className="block truncate text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--project-chrome-ink)] sm:text-[11px]">
              {activeView?.label}
            </span>
            <a
              href={activeView?.sourceUrl ?? project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 hidden text-[9px] font-semibold text-[var(--project-muted)] underline-offset-4 transition-opacity hover:opacity-100 sm:inline-block"
            >
              Abrir esta vista ↗
            </a>
          </div>

          <div className="flex shrink-0 gap-1.5">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-label={`Ampliar ${activeView?.label ?? "vista"} de ${project.client}`}
              className="hidden min-h-11 items-center justify-center rounded-lg border border-[var(--project-border)] bg-transparent px-3 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--project-chrome-ink)] transition-colors hover:bg-black/5 sm:inline-flex"
            >
              Ampliar
            </button>
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-label={`Ampliar ${activeView?.label ?? "vista"} de ${project.client}`}
              className="grid size-11 place-items-center rounded-lg border border-[var(--project-border)] bg-transparent text-[var(--project-chrome-ink)] sm:hidden"
            >
              ↗
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label={`Vista anterior de ${project.client}`}
              className="grid size-11 place-items-center rounded-lg border border-[var(--project-border)] bg-[var(--project-chrome-ink)] text-[var(--project-chrome)] transition-[opacity,transform] hover:-translate-y-px disabled:cursor-default disabled:opacity-20 disabled:hover:translate-y-0"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label={`Vista siguiente de ${project.client}`}
              className="grid size-11 place-items-center rounded-lg border border-[var(--project-border)] bg-[var(--project-chrome-ink)] text-[var(--project-chrome)] transition-[opacity,transform] hover:-translate-y-px disabled:cursor-default disabled:opacity-20 disabled:hover:translate-y-0"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-2.5 flex snap-x snap-proximity gap-2 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-color:rgba(255,255,255,.24)_transparent] [scrollbar-width:thin] sm:mt-3 sm:gap-2.5"
        aria-label={`Seleccionar vista de ${project.client}`}
      >
        {project.views.map((view, index) => {
          const active = selectedIndex === index;

          return (
            <button
              key={view.id}
              ref={(node) => {
                thumbnailRefs.current[index] = node;
              }}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Mostrar ${view.label}`}
              aria-current={active ? "true" : undefined}
              className={`group min-w-0 flex-[0_0_44%] snap-start rounded-[10px] border p-1.5 text-left transition-[opacity,border-color,transform,background-color] sm:basis-[31%] lg:basis-[23.5%] ${
                active
                  ? "border-[var(--project-accent)] bg-[var(--project-panel)] opacity-100 shadow-[inset_0_-2px_0_var(--project-accent)]"
                  : "border-[var(--project-border)] bg-[var(--project-panel)] opacity-[0.55] hover:-translate-y-px hover:opacity-[0.85]"
              }`}
            >
              <span className="block overflow-hidden rounded-[6px] bg-[var(--project-panel)]">
                <Image
                  src={view.desktopSrc}
                  alt=""
                  width={view.width ?? 1920}
                  height={view.height ?? 860}
                  sizes="220px"
                  draggable={false}
                  className="block h-auto w-full select-none object-contain object-top"
                />
              </span>

              <span className="mt-1.5 grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-2 px-0.5 pb-0.5">
                <b className="text-[8px] tabular-nums text-[var(--project-accent)] sm:text-[9px]">
                  {String(index + 1).padStart(2, "0")}
                </b>
                <span className="truncate text-[8px] font-bold uppercase tracking-[0.08em] text-[var(--project-chrome-ink)] sm:text-[9px]">
                  {view.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Mostrando {activeView?.label}, vista {selectedIndex + 1} de {project.views.length}.
      </p>

      {expanded && activeView ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[#030B14]/95 p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${project.client}: ${activeView.label}`}
        >
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 rounded-t-xl border border-white/10 bg-[#0A1727] px-3 py-2 text-white sm:px-4">
            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-white/[0.55]">
                {project.client}
              </p>
              <p className="truncate text-[13px] font-semibold">{activeView.label}</p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5 text-lg text-white transition-colors hover:bg-white/10"
              aria-label="Cerrar vista ampliada"
              autoFocus 
            >
              ×
            </button>
          </div>

          <div className="mx-auto min-h-0 w-full max-w-[1600px] flex-1 overflow-auto rounded-b-xl border-x border-b border-white/10 bg-[#07111D] [overscroll-behavior:contain]">
            <div className="flex min-h-full min-w-[900px] items-start justify-center p-3 sm:min-w-0 sm:p-5">
              <Image
                src={activeView.desktopSrc}
                alt={activeView.alt}
                width={activeView.width ?? 1920}
                height={activeView.height ?? 860}
                sizes="100vw"
                draggable={false}
                className="block h-auto w-[900px] max-w-none select-none object-contain object-top sm:w-full sm:max-w-[1500px]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}