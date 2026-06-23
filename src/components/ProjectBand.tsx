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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-elevated"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.name} — captura del sitio`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent" />
      </div>

      <div className="p-6 md:p-7">
        <span className="font-display text-xs font-bold tracking-widest text-accent">
          0{index + 1} — {project.industry}
        </span>

        <h3 className="font-display mt-3 text-2xl font-bold leading-tight md:text-3xl">
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/proyectos/${project.slug}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-base transition-transform hover:scale-105"
          >
            Ver case study
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Visitar sitio →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
