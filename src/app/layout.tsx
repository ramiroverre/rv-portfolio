import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RV Studio — Diseño & Desarrollo Web Front-End",
  description:
    "RV Studio: diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas que quieren convertir visitas en clientes. Landing pages modernas, rápidas y con animaciones.",
  openGraph: {
    title: "RV Studio — Diseño & Desarrollo Web Front-End",
    description:
      "Diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-base text-ink antialiased font-body">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
