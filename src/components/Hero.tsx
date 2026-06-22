"use client";

import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const SKILLS = [
  "DISEÑO UI/UX",
  "REACT",
  "NEXT.JS",
  "TAILWIND CSS",
  "FRAMER MOTION",
  "FIGMA",
  "LANDING PAGES",
  "PERFORMANCE",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <WebGLShader />
        <div className="absolute inset-0 bg-base/78" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 0%, var(--color-base) 94%)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-6"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Diseño & desarrollo web front-end
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display max-w-4xl text-[13vw] leading-[0.95] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Sitios web que
          <br />
          tus clientes <span className="text-accent">no van</span>
          <br />a olvidar.
        </motion.h1>

        <motion.p variants={item} className="mt-8 max-w-xl text-lg text-muted">
          Soy Ramiro, diseñador front-end. Convierto ideas de negocio en
          landing pages rápidas, modernas y con animaciones que hacen que tu
          marca se vea tan bien online como en la vida real.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-base transition-transform hover:scale-105"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 border-t border-line py-6"
      >
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <span
                key={i}
                className="font-display shrink-0 whitespace-nowrap text-sm font-semibold tracking-widest text-muted"
              >
                {skill} <span className="text-accent">/</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
