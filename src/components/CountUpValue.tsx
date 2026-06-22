"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUpValue({
  value,
  duration = 1.2,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const parts = useMemo(() => value.split(/(\d+)/), [value]);
  const targets = useMemo(
    () => parts.map((part) => (/^\d+$/.test(part) ? parseInt(part, 10) : null)),
    [parts]
  );

  const [display, setDisplay] = useState(() =>
    parts.map((part, i) => (targets[i] !== null ? "0" : part)).join("")
  );

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let raf: number;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = easeOutCubic(progress);

      setDisplay(
        parts
          .map((part, i) => {
            const target = targets[i];
            return target !== null ? String(Math.round(target * eased)) : part;
          })
          .join("")
      );

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, parts, targets, duration]);

  return <span ref={ref}>{display}</span>;
}
