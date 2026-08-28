import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Inter para controles, navegación y cuerpo de texto
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// Sora para H1, grandes números y nombres de proyectos
const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portafolio de desarrollo web | BlueFIn",
  description: "Conoce los proyectos de páginas web desarrollados por BlueFIn para empresas que necesitan una presencia digital clara, profesional y funcional.",
  icons: {
    icon: "/favicon.ico", // 🟢 Corregido (tenía "/favicon")
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <body className="bg-bluefin-atmosphere min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}