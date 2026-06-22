"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectBand({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative isolate w-full overflow-hidden border-b border-line bg-base md:flex md:min-h-[640px] md:items-center"
    >
      {/* Mobile: image shown in full above the text, no overlay needed for legibility */}
      <div className="relative aspect-[4/3] w-full md:hidden">
        <Image
          src={project.cover}
          alt={`${project.name} — captura del sitio`}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={index === 0}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 65%, var(--color-base) 100%)",
          }}
        />
      </div>

      {/* Desktop: full-bleed background with left-to-right gradient behind the text */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={project.cover}
          alt={`${project.name} — captura del sitio`}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,9,11,0.96) 0%, rgba(9,9,11,0.88) 32%, rgba(9,9,11,0.35) 60%, rgba(9,9,11,0.25) 100%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-md py-10 md:py-20">
          <span
            className="font-display text-sm font-bold tracking-widest"
            style={{ color: project.accent }}
          >
            0{index + 1} — {project.industry}
          </span>

          <h3 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            {project.name}
          </h3>

          <p className="mt-3 text-base text-muted">{project.tagline}</p>

          <p className="mt-5 text-sm leading-relaxed text-ink/80">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/proyectos/${project.slug}`}
              className="rounded-full px-6 py-3 text-sm font-semibold text-base transition-transform hover:scale-105"
              style={{ backgroundColor: project.accent }}
            >
              Ver case study
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Visitar sitio ↗
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
