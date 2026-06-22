"use client";

import { motion } from "framer-motion";
import CountUpValue from "./CountUpValue";

const STATS = [
  { value: "72hs", label: "Primera propuesta de diseño" },
  { value: "100%", label: "Responsive & mobile-first" },
  { value: "1:1", label: "Trato directo conmigo, sin intermediarios" },
];

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const statsItem = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Sobre mí
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Diseño y construyo el sitio que tu negocio merece.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="text-lg text-muted">
            Soy Ramiro, diseñador front-end especializado en landing pages
            para restaurantes, estudios y emprendimientos. Me encargo de todo
            el proceso: diseño UI/UX, desarrollo, animaciones y la puesta en
            producción.
          </p>
          <p className="text-muted">
            Cada proyecto de este portfolio nació de un brief real, pensado
            como si fuera para ese cliente: su rubro, su público y la
            sensación que necesita transmitir antes de leer una sola palabra.
            Es el mismo proceso que voy a usar en tu sitio.
          </p>

          <motion.div
            variants={statsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-8 sm:gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statsItem}
                whileHover={{ y: -4, borderColor: "var(--color-accent)" }}
                className="rounded-2xl border border-line bg-elevated/50 p-4 transition-colors"
              >
                <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
                  <CountUpValue value={stat.value} />
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
