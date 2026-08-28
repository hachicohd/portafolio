import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  const whatsappUrl = "https://wa.me/584147496774?text=Busco%20m%C3%A1s%20informaci%C3%B3n";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-bf-border-dark bg-bf-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] md:h-[84px] max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-16">
        
        {/* LOGO OFICIAL BLUEFIN (Sin desborde de cuadro azul al tocar) */}
        <Link 
          href="/" 
          className="flex items-center rounded-lg outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-bf-blue focus-visible:ring-inset select-none"
        >
          <Image
            src="/Logo.png"
            alt="BlueFIn"
            width={280}
            height={120}
            priority
            unoptimized
            className="h-30 md:h-30 w-auto object-contain"
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#proyectos" className="text-[13px] font-medium text-bf-muted-dark hover:text-bf-text-on-dark transition-colors focus:outline-none focus-visible:underline">
            Proyectos
          </Link>
          <Link href="#enfoque" className="text-[13px] font-medium text-bf-muted-dark hover:text-bf-text-on-dark transition-colors focus:outline-none focus-visible:underline">
            Enfoque
          </Link>
        </nav>

        {/* ACCIONES (CTA) */}
        <div className="flex items-center">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-bf-blue px-6 text-[13px] font-semibold text-white transition-colors hover:bg-bf-blue-light focus:outline-none focus:ring-2 focus:ring-bf-blue-light focus:ring-offset-2 focus:ring-offset-bf-bg"
          >
            Hablemos de tu proyecto
          </a>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex md:hidden h-9 items-center justify-center rounded-md bg-bf-blue px-4 text-xs font-semibold text-white transition-colors hover:bg-bf-blue-light focus:outline-none focus:ring-2 focus:ring-bf-blue-light focus:ring-offset-2 focus:ring-offset-bf-bg"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </header>
  );
}