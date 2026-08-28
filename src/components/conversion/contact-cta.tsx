import { siteConfig } from "../../data/site-config";
import { ArrowUpRight } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/bluefinestudios";

export function ContactCta() {
  const whatsappUrl = `https://wa.me/${
    siteConfig.contact.whatsapp
  }?text=${encodeURIComponent(siteConfig.contact.message)}`;

  return (
    <section
      className="
        relative isolate
        flex w-full
        min-h-[620px] md:min-h-[720px]
        items-center justify-center
        overflow-hidden
        border-t border-bf-border-dark
        bg-[#030b14]
        px-6
        py-28 md:py-40
        text-center
      "
    >
      {/* ======================================================
          VIDEO DE FONDO
          Archivo:
          /public/videoblue.mp4
         ====================================================== */}
      <video
        className="
          pointer-events-none
          absolute inset-0
          -z-30
          h-full w-full
          object-cover object-center
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videoblue.mp4" type="video/mp4" />
      </video>

      {/* ======================================================
          CAPA GENERAL OSCURA
          Mantiene visible el video pero protege la lectura
         ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          -z-20
          bg-[#020814]/50
        "
      />

      {/* ======================================================
          OSCURECIMIENTO CENTRAL DETRÁS DEL COPY
         ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          -z-20
          bg-[radial-gradient(circle_at_center,rgba(2,8,20,0.72)_0%,rgba(2,8,20,0.46)_40%,rgba(2,8,20,0.18)_72%,rgba(2,8,20,0.40)_100%)]
        "
      />

      {/* ======================================================
          VIÑETA SUPERIOR E INFERIOR
          Hace que el video se integre con el resto del sitio
         ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          -z-10
          bg-[linear-gradient(to_bottom,rgba(3,11,20,0.76)_0%,transparent_28%,transparent_68%,rgba(3,11,20,0.88)_100%)]
        "
      />

      {/* ======================================================
          CONTENIDO
         ====================================================== */}
      <div
        className="
          relative z-10
          mx-auto
          flex w-full max-w-[900px]
          flex-col items-center
        "
      >
        {/* Detalle editorial */}
        <div
          className="
            mb-7
            flex items-center gap-3
            text-[10px]
            font-semibold uppercase
            tracking-[0.22em]
            text-white/65
            md:mb-8
            md:text-[11px]
          "
        >
          <span className="h-px w-8 bg-[#70d6ff]/70 md:w-10" />
          Hablemos
          <span className="h-px w-8 bg-[#70d6ff]/70 md:w-10" />
        </div>

        <h2
          className="
            max-w-[850px]
            text-balance
            font-display
            text-[clamp(2.6rem,10vw,4rem)]
            font-bold
            leading-[0.94]
            tracking-[-0.045em]
            text-white
            drop-shadow-[0_4px_25px_rgba(0,0,0,0.6)]
            md:text-[clamp(3.7rem,5.5vw,5.4rem)]
          "
        >
          Construyamos una presencia digital a la altura de tu empresa.
        </h2>

        <p
          className="
            mt-7
            max-w-[570px]
            text-balance
            font-sans
            text-[16px]
            leading-7
            text-white/75
            drop-shadow-[0_3px_15px_rgba(0,0,0,0.55)]
            md:mt-8
            md:text-[18px]
            md:leading-8
          "
        >
          Cuéntanos qué necesita tu negocio y conversemos sobre la solución
          adecuada.
        </p>

        {/* ====================================================
            BOTONES
           ==================================================== */}
        <div
          className="
            mt-10
            flex w-full max-w-[520px]
            flex-col gap-3
            font-sans
            sm:w-auto
            sm:max-w-none
            sm:flex-row
            sm:gap-4
            md:mt-12
          "
        >
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-h-14
              w-full
              items-center justify-center
              gap-3
              rounded-xl
              bg-bf-blue
              px-9
              text-[14px]
              font-semibold
              text-white
              shadow-[0_12px_36px_rgba(37,132,255,0.28)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-bf-blue-light
              hover:shadow-[0_16px_42px_rgba(37,132,255,0.38)]

              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white

              sm:w-auto
            "
          >
            Hablemos por WhatsApp

            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-h-14
              w-full
              items-center justify-center
              gap-3
              rounded-xl
              border border-white/25
              bg-black/15
              px-9
              text-[14px]
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-white/45
              hover:bg-white/10

              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white

              sm:w-auto
            "
          >
            Ver Instagram

            <ArrowUpRight
              size={16}
              className="
                text-white/65
                transition-all duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                group-hover:text-white
              "
            />
          </a>
        </div>

        <p
          className="
            mt-9
            text-[9px]
            font-medium uppercase
            tracking-[0.2em]
            text-white/35
            md:mt-11
            md:text-[10px]
          "
        >
          Estrategia · Diseño · Desarrollo
        </p>
      </div>
    </section>
  );
}