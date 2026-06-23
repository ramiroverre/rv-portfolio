import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const display = Roboto({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const body = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  twitter: {
    card: "summary_large_image",
    title: "RV Studio — Diseño & Desarrollo Web Front-End",
    description:
      "Diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas.",
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
