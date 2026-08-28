"use client"; // Necesario para usar estados (useState) en el App Router de Next.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/584147496774?text=Busco%20m%C3%A1s%20informaci%C3%B3n";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-bf-border-dark bg-bf-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] md:h-[84px] max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-16">
        
        {/* LOGO OFICIAL BLUEFIN */}
        <Link 
          href="/" 
          onClick={() => setIsMenuOpen(false)} // Cierra el menú al ir al home
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

        {/* NAVEGACIÓN DESKTOP (Oculta en móvil) */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#proyectos" className="text-[13px] font-medium text-bf-muted-dark hover:text-bf-text-on-dark transition-colors focus:outline-none focus-visible:underline">
            Proyectos
          </Link>
          <Link href="#enfoque" className="text-[13px] font-medium text-bf-muted-dark hover:text-bf-text-on-dark transition-colors focus:outline-none focus-visible:underline">
            Enfoque
          </Link>
        </nav>

        {/* ACCIONES (CTA) Y MENÚ HAMBURGUESA (MÓVIL) */}
        <div className="flex items-center gap-3">
          {/* Botón Desktop */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-bf-blue px-6 text-[13px] font-semibold text-white transition-colors hover:bg-bf-blue-light focus:outline-none focus:ring-2 focus:ring-bf-blue-light focus:ring-offset-2 focus:ring-offset-bf-bg"
          >
            Hablemos de tu proyecto
          </a>
          
          {/* Botón Móvil */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex md:hidden h-9 items-center justify-center rounded-md bg-bf-blue px-4 text-xs font-semibold text-white transition-colors hover:bg-bf-blue-light focus:outline-none focus:ring-2 focus:ring-bf-blue-light focus:ring-offset-2 focus:ring-offset-bf-bg"
          >
            Hablemos
          </a>

          {/* Icono de Menú Hamburguesa para Móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 ml-1"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-gray-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-400 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-400 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 w-full bg-[#111111] border-b border-bf-border-dark py-4 px-6 shadow-xl flex flex-col gap-4 origin-top animate-in slide-in-from-top-2">
          <Link 
            href="#proyectos" 
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
          >
            Proyectos
          </Link>
          <Link 
            href="#enfoque" 
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
          >
            Enfoque
          </Link>
        </div>
      )}
    </header>
  );
}