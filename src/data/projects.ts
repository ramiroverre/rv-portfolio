export type Project = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  location: string;
  year: string;
  liveUrl: string;
  accent: string;
  accentSoft: string;
  cover: string;
  coverMobile: string;
  shortDescription: string;
  services: string[];
  story: {
    idea: string;
    insight: string;
    approach: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "23-rios",
    name: "23 Ríos",
    tagline: "Vivila en 23 Ríos",
    industry: "Cervecería artesanal & Brewpub",
    location: "Luján de Cuyo, Mendoza",
    year: "2025",
    liveUrl: "https://ramiroverre.github.io/23rios-demo/",
    accent: "#f4c42a",
    accentSoft: "rgba(244,196,42,0.15)",
    cover: "/projects/23-rios/bg.png",
    coverMobile: "/projects/23-rios/mobile.png",
    shortDescription:
      "Landing oscura y con onda para una cervecería artesanal con patio cervecero, beer truck y producción propia en Luján de Cuyo.",
    services: ["Diseño UI/UX", "Desarrollo Front-End", "Carta digital"],
    story: {
      idea:
        "23 Ríos no es solo una cervecería: es un patio, un beer truck y una banda sonora propia. El sitio tenía que transmitir esa misma energía desde el primer segundo.",
      insight:
        "El público es joven, busca el lugar en redes antes de ir y decide en segundos si 'tiene la vibra' que está buscando para un viernes. Un sitio prolijo y corporativo iba a jugar en contra de la marca.",
      approach:
        "Fondo oscuro, tipografía bien gruesa, colores ácidos en amarillo y rosa, y un marquee animado con las palabras clave de la marca: artesanal, brewpub, beer truck. Integré un acceso directo a WhatsApp para consultas y reservas, y un botón fijo para ver la carta sin fricción.",
      result:
        "Una landing que se siente más a flyer de evento que a sitio institucional, con toda la información clave —ubicación, carta, experiencias— a un clic de distancia.",
    },
  },
  {
    slug: "arq-alonso",
    name: "Arquitecto Ignacio Alonso",
    tagline: "Arquitectura y renders que cruzan fronteras",
    industry: "Arquitectura & Visualización 3D",
    location: "Internacional",
    year: "2024",
    liveUrl: "https://arq-alonso.vercel.app/",
    accent: "#ff7a3d",
    accentSoft: "rgba(255,122,61,0.15)",
    cover: "/projects/arq-alonso/bg.png",
    coverMobile: "/projects/arq-alonso/mobile.png",
    shortDescription:
      "Sitio corporativo para un estudio de arquitectura y renders fotorrealistas, pensado para transmitir escala y precisión a clientes de varios países.",
    services: ["Diseño UI/UX", "Desarrollo Front-End", "Optimización de performance"],
    story: {
      idea:
        "El arquitecto Ignacio Alonso necesitaba un sitio que hablara el mismo idioma visual que sus renders: preciso, oscuro y con mucho contraste.",
      insight:
        "El estudio ya entregaba proyectos a clientes en más de una docena de países, pero su presencia online no comunicaba ni ese alcance ni la calidad técnica de su trabajo. Necesitaban un portfolio que se sintiera tan cuidado como una render en 4K.",
      approach:
        "Diseñé una identidad oscura con acentos en naranja para que cada imagen respire sobre fondo negro, tipografía condensada para los títulos y una grilla de proyectos que prioriza la imagen por sobre el texto. Desarrollé el front-end priorizando tiempos de carga rápidos incluso con archivos de renders pesados.",
      result:
        "Hoy el estudio presenta sus proyectos internacionales en un sitio liviano, que se ve impecable en cualquier dispositivo y refuerza, desde el primer scroll, la percepción de un estudio de primer nivel.",
    },
  },
  {
    slug: "cache-bistro",
    name: "Caché Bistró",
    tagline: "Donde el vino encuentra su hogar",
    industry: "Gastronomía & Enoturismo",
    location: "Mendoza, Argentina",
    year: "2024",
    liveUrl: "https://ramiroverre.github.io/cachebistro-demo/",
    accent: "#ff5340",
    accentSoft: "rgba(255,83,64,0.15)",
    cover: "/projects/cache-bistro/bg.png",
    coverMobile: "/projects/cache-bistro/mobile.png",
    shortDescription:
      "Sitio para un bistró con una de las cavas de vino más grandes del país: tipografía bien presente y mucho contraste para una marca que no pasa desapercibida.",
    services: ["Branding digital", "Diseño UI/UX", "Desarrollo Front-End"],
    story: {
      idea:
        "Caché Bistró guarda más de 700 etiquetas en su cava. Necesitaban un sitio que se sintiera igual de contundente que esa propuesta.",
      insight:
        "El cliente no quería 'otro sitio de restaurante elegante con foto de plato'. Buscaba algo con personalidad propia, que se destacara entre la oferta gastronómica de Mendoza y comunicara de entrada la escala real de su carta de vinos.",
      approach:
        "Aposté por tipografía condensada en mayúsculas, negro y crema como base, y rojo como acento de impacto. Las cifras de la cava se muestran como datos gigantes, casi como un titular, antes incluso de mostrar el menú: una forma directa de transmitir autoridad en pocos segundos.",
      result:
        "Un sitio con una identidad muy reconocible, que comunica en los primeros segundos qué hace diferente a Caché Bistró de cualquier otro bistró de la zona.",
    },
  },
  {
    slug: "la-casona",
    name: "La Casona",
    tagline: "Café de especialidad en una bodega con historia",
    industry: "Gastronomía & Café de especialidad",
    location: "Mendoza, Argentina",
    year: "2024",
    liveUrl: "https://ramiroverre.github.io/lacasona-demo/",
    accent: "#f3a9c1",
    accentSoft: "rgba(243,169,193,0.15)",
    cover: "/projects/la-casona/bg.png",
    coverMobile: "/projects/la-casona/mobile.png",
    shortDescription:
      "Landing para un café boutique instalado en una bodega histórica de Mendoza, con foco en la experiencia sensorial y las reseñas de visitantes internacionales.",
    services: ["Diseño UI/UX", "Desarrollo Front-End", "Sistema de reservas"],
    story: {
      idea:
        "La Casona quería un sitio que se sintiera tan cálido y cuidado como su salón con vitrales, escondido dentro de una bodega centenaria.",
      insight:
        "Es un café íntimo que recibe tanto turistas internacionales como vecinos de Mendoza para el brunch de fin de semana. El desafío era transmitir esa doble identidad: un lugar chico y personal, pero con reconocimiento más allá de la ciudad.",
      approach:
        "Elegí una paleta rosa pastel y crema para evocar calidez, tipografía manuscrita para los acentos y fotografía a pantalla completa para que el visitante 'sienta' el lugar antes de reservar. Sumé una sección con reseñas reales de TripAdvisor de visitantes de distintos países para reforzar la confianza desde el primer scroll.",
      result:
        "Un sitio de una sola página, liviano y muy cómodo de navegar desde el celular, con el botón de reserva siempre visible y una galería que invita a conocer el lugar antes de llegar.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
