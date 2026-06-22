import { projects } from "@/data/projects";
import ProjectBand from "./ProjectBand";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          Proyectos
        </span>
        <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Demos que muestran cómo pienso cada proyecto.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Cuatro sitios creados como piezas de portfolio para distintos
          rubros: gastronomía, enoturismo, cervecería artesanal y
          arquitectura. Cada uno con una identidad visual propia.
        </p>
      </div>

      {projects.map((project, index) => (
        <ProjectBand key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
