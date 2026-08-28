import { SiteHeader } from "../components/layout/site-header";
import { Hero } from "../components/hero/hero";
import { ProjectCatalog } from "../components/portfolio/project-catalog";
import { BluefinApproach } from "../components/conversion/bluefin-approach";
import { ContactCta } from "../components/conversion/contact-cta";
import { SiteFooter } from "../components/layout/site-footer";

export default function Home() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-bf-blue focus:text-white focus:font-semibold"
      >
        Saltar al contenido principal
      </a>
      
      <SiteHeader />
      
      <main id="main-content" className="flex-1">
        <Hero />
        <ProjectCatalog />
        <BluefinApproach />
        <ContactCta />
      </main>

      <SiteFooter />
    </>
  );
}