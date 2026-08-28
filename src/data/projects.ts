// src/data/projects.ts

export type ProjectView = {
  id: string;
  label: string;
  desktopSrc: string;
  alt: string;
  sourceUrl: string;
  width: number;
  height: number;
};

export type PortfolioProject = {
  slug: string;
  number: string;
  client: string;
  title: string;
  industry: string;
  projectType: string;
  year?: string;
  summary: string;
  liveUrl: string;
  accent: string;
  atmosphere: "structure" | "signal" | "contour";
  palette: {
    sectionBg: string;
    panelBg: string;
    ink: string;
    muted: string;
    chromeBg: string;
    chromeInk: string;
    border: string;
    glow: string;
    accentText: string;
  };
  views: ProjectView[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "vertice-advisory",
    number: "01",
    client: "Vértice Advisory",
    title: "Convertir complejidad en una dirección clara.",
    industry: "Consultoría estratégica B2B",
    projectType: "Landing estratégica",
    summary:
      "Organizamos una propuesta consultiva compleja, explicamos su método con claridad y guiamos a equipos B2B hacia una evaluación estratégica.",
    liveUrl: "https://vertice-lake-five.vercel.app/",
    accent: "#F22222",
    atmosphere: "structure",
    palette: {
      sectionBg: "#090909",
      panelBg: "#111111",
      ink: "#F7F5F0",
      muted: "rgba(247,245,240,.62)",
      chromeBg: "#F4F1EA",
      chromeInk: "#151515",
      border: "rgba(247,245,240,.14)",
      glow: "rgba(242,34,34,.16)",
      accentText: "#FFFFFF",
    },
    views: [
      {
        id: "inicio",
        label: "Inicio",
        desktopSrc: "/VerticeInicio.png",
        alt: "Página de inicio de Vértice Advisory",
        sourceUrl: "https://vertice-lake-five.vercel.app/",
        width: 1920,
        height: 860,
      },
      {
        id: "proceso",
        label: "Proceso",
        desktopSrc: "/VerticeProceso.png",
        alt: "Sección de proceso de Vértice Advisory",
        sourceUrl: "https://vertice-lake-five.vercel.app/#proceso",
        width: 1920,
        height: 860,
      },
      {
        id: "entregables",
        label: "Entregables",
        desktopSrc: "/VerticeEntregable.png",
        alt: "Sección de entregables de Vértice Advisory",
        sourceUrl: "https://vertice-lake-five.vercel.app/#entregables",
        width: 1920,
        height: 859,
      },
      {
        id: "aplicar",
        label: "Aplicar",
        desktopSrc: "/VerticeFormulario.png",
        alt: "Formulario para solicitar una evaluación en Vértice Advisory",
        sourceUrl: "https://vertice-lake-five.vercel.app/#aplicar",
        width: 1920,
        height: 857,
      },
    ],
  },
  {
    slug: "zoho-demo",
    number: "02",
    client: "Zoho Demo",
    title: "Conectar la venta con toda la operación.",
    industry: "Comercio digital",
    projectType: "Plataforma de venta y gestión",
    summary:
      "Integramos tienda, carrito, caja y control operativo para simplificar la compra y mostrar cómo distintos procesos pueden convivir dentro de un mismo sistema.",
    liveUrl: "https://zohodemo.gruponexa.app/",
    accent: "#4936FF",
    atmosphere: "signal",
    palette: {
      sectionBg: "#EEF3FF",
      panelBg: "#FFFFFF",
      ink: "#0B1630",
      muted: "rgba(11,22,48,.60)",
      chromeBg: "#F6F8FD",
      chromeInk: "#0B1630",
      border: "rgba(11,22,48,.12)",
      glow: "rgba(73,54,255,.13)",
      accentText: "#FFFFFF",
    },
    views: [
      {
        id: "inicio",
        label: "Inicio",
        desktopSrc: "/zohoinicio.png",
        alt: "Página de inicio de la tienda Zoho Demo",
        sourceUrl: "https://zohodemo.gruponexa.app/",
        width: 1920,
        height: 860,
      },
      {
        id: "panel",
        label: "Panel",
        desktopSrc: "/zohotermin.png",
        alt: "Panel principal operativo de Zoho Demo",
        sourceUrl: "https://zohodemo.gruponexa.app/",
        width: 1920,
        height: 875,
      },
      {
        id: "carrito",
        label: "Carrito",
        desktopSrc: "/zohocarrito.png",
        alt: "Carrito de compra de Zoho Demo",
        sourceUrl: "https://zohodemo.gruponexa.app/",
        width: 1920,
        height: 863,
      },
      {
        id: "terminales",
        label: "Terminales",
        desktopSrc: "/zohocaja.png",
        alt: "Control de terminales y cajas de Zoho Demo",
        sourceUrl: "https://zohodemo.gruponexa.app/",
        width: 1920,
        height: 857,
      },
    ],
  },
  {
    slug: "nacar",
    number: "03",
    client: "Nácar",
    title: "Convertir arquitectura en una experiencia que inspira confianza.",
    industry: "Arquitectura residencial",
    projectType: "Sitio editorial",
    summary:
      "Construimos un recorrido donde imágenes, planos y materialidad permiten comprender el enfoque del estudio y acercan al visitante a la presentación de su proyecto.",
    liveUrl: "https://nacar-phi.vercel.app/",
    accent: "#9B4A33",
    atmosphere: "contour",
    palette: {
      sectionBg: "#F2EEE6",
      panelBg: "#FAF7F1",
      ink: "#2B2521",
      muted: "rgba(43,37,33,.62)",
      chromeBg: "#F7F2EA",
      chromeInk: "#2B2521",
      border: "rgba(43,37,33,.14)",
      glow: "rgba(155,74,51,.12)",
      accentText: "#FFFFFF",
    },
    views: [
      {
        id: "inicio",
        label: "Inicio",
        desktopSrc: "/nacarinicio.png",
        alt: "Página de inicio del estudio Nácar",
        sourceUrl: "https://nacar-phi.vercel.app/",
        width: 1920,
        height: 866,
      },
      {
        id: "casas",
        label: "Casas",
        desktopSrc: "/nacarcasas.png",
        alt: "Selección de viviendas del estudio Nácar",
        sourceUrl: "https://nacar-phi.vercel.app/",
        width: 1920,
        height: 863,
      },
      {
        id: "plano",
        label: "Plano",
        desktopSrc: "/nacarplano.png",
        alt: "Plano arquitectónico interactivo del estudio Nácar",
        sourceUrl: "https://nacar-phi.vercel.app/",
        width: 1920,
        height: 864,
      },
      {
        id: "contacto",
        label: "Contacto",
        desktopSrc: "/nacarcontact.png",
        alt: "Formulario de contacto del estudio Nácar",
        sourceUrl: "https://nacar-phi.vercel.app/",
        width: 1920,
        height: 860,
      },
    ],
  },
];