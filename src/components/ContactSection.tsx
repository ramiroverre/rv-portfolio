"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzjoqgl";
const WHATSAPP_NUMBER = "5492612505160";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 rounded-3xl border border-line bg-elevated/60 p-8 md:grid-cols-2 md:gap-16 md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Contacto
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="mt-5 text-muted">
            Contame qué necesitás y te respondo con una propuesta. Si
            preferís algo más directo, escribime por WhatsApp.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola! Vi tu portfolio y quiero cotizar un sitio web."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Escribime por WhatsApp →
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-muted">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-line bg-base px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-line bg-base px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-muted">
              Contame sobre tu proyecto
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-xl border border-line bg-base px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              placeholder="Quiero un sitio para..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-base transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="text-sm text-accent">
              ¡Gracias! Tu mensaje fue enviado, te voy a responder a la brevedad.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-coral">
              Algo salió mal. Probá de nuevo o escribime por WhatsApp.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
