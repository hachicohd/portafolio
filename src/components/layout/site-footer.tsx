import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../data/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-bf-border-dark bg-bf-bg pt-20 pb-10">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-b border-bf-border-dark pb-16">
          
          {/* Logo y descripción */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/Logo.png"
                alt="BlueFIn Logo"
                width={220}
                height={70}
                  className="h-30 md:h-30 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-[13px] text-bf-muted-dark font-sans max-w-sm leading-relaxed">
              BlueFIn diseña y desarrolla experiencias web para empresas que necesitan comunicar mejor, fortalecer su presencia y convertir interés en oportunidades.
            </p>
          </div>

          {/* Navegación interna */}
          <div className="md:col-span-3 flex flex-col font-sans">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-bf-text-on-dark mb-6">Navegación</h4>
            <nav className="flex flex-col gap-4">
              <Link href="#proyectos" className="text-[13px] text-bf-muted-dark hover:text-bf-text-on-dark transition-colors w-fit">
                Proyectos
              </Link>
              <Link href="#enfoque" className="text-[13px] text-bf-muted-dark hover:text-bf-text-on-dark transition-colors w-fit">
                Enfoque
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="md:col-span-4 flex flex-col font-sans">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-bf-text-on-dark mb-6">Contacto</h4>
            <nav className="flex flex-col gap-4">
              <a 
                href="https://wa.me/584147496774?text=Busco%20m%C3%A1s%20informaci%C3%B3n" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-[13px] text-bf-muted-dark hover:text-bf-text-on-dark transition-colors w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                WhatsApp
              </a>
              
              <a 
                href="https://www.instagram.com/bluefinestudios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-[13px] text-bf-muted-dark hover:text-bf-text-on-dark transition-colors w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Instagram
              </a>
            </nav>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-bf-muted-dark">
          <p>© {currentYear} BlueFIn. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Sistemas Operativos
          </div>
        </div>

      </div>
    </footer>
  ); 
}