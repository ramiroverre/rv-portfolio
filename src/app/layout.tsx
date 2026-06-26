import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { SITE_URL, SITE_NAME } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "RV Studio — Diseño & Desarrollo Web Front-End",
  description:
    "RV Studio: diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas. Landing pages modernas, rápidas y con animaciones.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RV Studio — Diseño & Desarrollo Web Front-End",
    description:
      "Diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Studio — Diseño & Desarrollo Web Front-End",
    description:
      "Diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/brand/logo-emerald.png`,
      description:
        "Diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas.",
      areaServed: "AR",
      founder: { "@id": `${SITE_URL}/#person` },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+54-9-261-250-5160",
        contactType: "customer service",
        availableLanguage: ["es"],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ramiro Verrecchia",
      jobTitle: "Diseñador & Desarrollador Front-End",
      url: SITE_URL,
      image: `${SITE_URL}/brand/ramiro.jpeg`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-base text-ink antialiased font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
