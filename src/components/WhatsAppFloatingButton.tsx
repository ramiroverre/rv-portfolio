"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_NUMBER = "5492612505160";
const MESSAGE = "Hola! Vi tu portfolio y quiero cotizar un sitio web.";

export default function WhatsAppFloatingButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setShowBubble(true), 800);
    return () => clearTimeout(showTimeout);
  }, []);

  useEffect(() => {
    if (!showBubble) return;
    const hideTimeout = setTimeout(() => setShowBubble(false), 3000);
    return () => clearTimeout(hideTimeout);
  }, [showBubble]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center gap-2 rounded-2xl border border-line bg-elevated px-4 py-2.5 text-sm font-medium text-ink shadow-lg"
          >
            Hablemos de tu proyecto
            <button
              onClick={() => setShowBubble(false)}
              aria-label="Cerrar mensaje"
              className="text-muted transition-colors hover:text-ink"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribime por WhatsApp"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.059 3.146 4.992 4.287 2.932 1.14 2.932.76 3.46.71.527-.05 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.027 2c-5.518 0-9.99 4.473-9.99 9.99 0 1.79.475 3.47 1.302 4.927l-1.342 4.9 5.03-1.317a9.973 9.973 0 0 0 4.999 1.34h.004c5.518 0 9.99-4.473 9.99-9.991 0-2.668-1.04-5.176-2.927-7.063A9.93 9.93 0 0 0 12.027 2zm0 18.27a8.247 8.247 0 0 1-4.213-1.16l-.302-.18-3.024.792.812-2.948-.197-.303a8.246 8.246 0 0 1-1.275-4.41c0-4.566 3.715-8.281 8.282-8.281a8.23 8.23 0 0 1 5.86 2.428 8.226 8.226 0 0 1 2.422 5.858c0 4.567-3.716 8.282-8.283 8.282z" />
        </svg>
      </motion.a>
    </div>
  );
}
