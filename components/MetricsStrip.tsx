"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value * 100) / 100);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

const metrics = [
  { value: 9.29, suffix: "/10", label: "CGPA, Integrated B.Tech + M.Tech @ IIIT-Delhi", decimals: 2 },
  { value: 11, suffix: "+", label: "production-grade repositories", decimals: 0 },
  { value: 8, suffix: "", label: "AI/ML systems built and documented", decimals: 0 },
  { value: 100, suffix: "%", label: "verified pass rate on IneqMath after GEPA", decimals: 0 },
];

export default function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
      {metrics.map((m, i) => (
        <div key={m.label} className="bg-panel/80 px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display text-3xl md:text-[34px] font-semibold text-gradient tracking-tight">
              {m.decimals ? (
                <span>
                  {(m.value as number).toFixed(2)}
                  {m.suffix}
                </span>
              ) : (
                <>
                  {m.value}
                  {m.suffix}
                </>
              )}
            </div>
            <div className="mt-2 text-[12.5px] text-zinc-500 leading-snug">{m.label}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
