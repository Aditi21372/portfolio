"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "9.29", suffix: "/10", label: "CGPA · Integrated B.Tech + M.Tech, IIIT-Delhi" },
  { value: "11", suffix: "+", label: "production-grade repositories" },
  { value: "8", suffix: "", label: "AI/ML systems built and documented" },
  { value: "100", suffix: "%", label: "verified pass rate on IneqMath after GEPA" },
];

export default function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
      {metrics.map((m, i) => (
        <div key={m.label} className="bg-panel/90 px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display text-3xl md:text-[34px] font-semibold text-gradient tracking-tight">
              {m.value}
              {m.suffix}
            </div>
            <div className="mt-2.5 text-[12px] text-zinc-500 leading-snug">{m.label}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
