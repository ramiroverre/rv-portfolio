import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — RV Studio`,
    description: project.shortDescription,
    alternates: {
      canonical: `/proyectos/${slug}`,
    },
    openGraph: {
      title: `${project.name} — RV Studio`,
      description: project.shortDescription,
      url: `/proyectos/${slug}`,
      type: "article",
    },
  };
}

const META_GRID = (project: ReturnType<typeof getProjectBySlug>) =>
  project
    ? [
        { label: "Cliente", value: project.name },
        { label: "Industria", value: project.industry },
        { label: "Ubicación", value: project.location },
        { label: "Año", value: project.year },
      ]
    : [];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-base">
        <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden border-b border-line">
          <Image
            src={project.coverMobile}
            alt={`${project.name} — portada en mobile`}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center -z-10 md:hidden"
          />
          <Image
            src={project.cover}
            alt={`${project.name} — portada`}
            fill
            sizes="100vw"
            priority
            className="hidden object-cover object-center -z-10 md:block"
          />
          <div
            className="absolute inset-0 -z-10 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,11,0.35) 0%, rgba(9,9,11,0.55) 30%, rgba(9,9,11,0.97) 62%, rgba(9,9,11,0.99) 100%), linear-gradient(90deg, rgba(9,9,11,0.55) 0%, rgba(9,9,11,0.25) 55%, rgba(9,9,11,0) 80%)",
            }}
          />
          <div
            className="absolute inset-0 -z-10 hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,11,0.5) 0%, rgba(9,9,11,0.55) 40%, rgba(9,9,11,0.97) 100%)",
            }}
          />

          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-40">
            <Link
              href="/#proyectos"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              ← Volver a proyectos
            </Link>
            <div className="max-w-[78%] md:max-w-none">
              <p
                className="font-display mt-6 text-sm font-bold tracking-widest"
                style={{ color: project.accent }}
              >
                {project.industry}
              </p>
              <h1 className="font-display mt-3 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted">{project.tagline}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <FadeIn className="grid grid-cols-2 gap-8 border-b border-line pb-12 sm:grid-cols-4">
            {META_GRID(project).map((row) => (
              <div key={row.label}>
                <p className="text-xs uppercase tracking-widest text-muted">
                  {row.label}
                </p>
                <p className="mt-2 font-medium">{row.value}</p>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-muted"
              >
                {service}
              </span>
            ))}
          </FadeIn>

          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">La idea</h2>
              <p className="mt-3 text-muted">{project.story.idea}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="font-display text-2xl font-bold">El contexto</h2>
              <p className="mt-3 text-muted">{project.story.insight}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl font-bold">El enfoque</h2>
              <p className="mt-3 text-muted">{project.story.approach}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="font-display text-2xl font-bold">El resultado</h2>
              <p className="mt-3 text-muted">{project.story.result}</p>
            </FadeIn>
          </div>

          <div className="mt-20 hidden items-center gap-12 md:grid md:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">Versión mobile</h2>
              <p className="mt-3 max-w-sm text-muted">
                Cada sitio se piensa mobile-first desde el diseño: así se ve{" "}
                {project.name} en un celular real.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="relative mx-auto aspect-[3/2] w-full max-w-sm overflow-hidden rounded-2xl border border-line">
              <Image
                src={project.coverMobile}
                alt={`${project.name} — vista mobile`}
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover object-center"
              />
            </FadeIn>
          </div>

          <div className="mt-16">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-base transition-transform hover:scale-105"
            >
              Visitar sitio en vivo →
            </a>
          </div>
        </section>

        <Link
          href={`/proyectos/${nextProject.slug}`}
          className="group block border-t border-line"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Siguiente proyecto
              </p>
              <p className="font-display mt-2 text-3xl font-bold transition-colors group-hover:text-accent sm:text-4xl">
                {nextProject.name}
              </p>
            </div>
            <span className="font-display text-3xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
