"use client";

import Reveal from "@/components/Reveal";

const timeline = [
  {
    period: "2021 to 2026",
    title: "Integrated B.Tech + M.Tech, CSE @ IIIT-Delhi",
    detail: "CGPA 9.29/10. Coursework: Large Deep Learning Systems, Information Integration and Application, Convex Optimization, Algorithm Design and Analysis, Database Management Systems, Network Science, Interactive Systems, Ethical Hacking Essentials.",
  },
  {
    period: "2026",
    title: "IneqMath Proof Agent",
    detail: "Research build: DSPy + GEPA prompt optimization with Lean 4 formal verification. Verified pass rate 28.6% to 100% across benchmark inequalities.",
  },
  {
    period: "2025",
    title: "NeuroSync: Empathic AI",
    detail: "Team of 4. Facial + vocal emotion fusion (PyTorch) with chat and VR modalities: MSE 0.0032, cosine similarity 0.9877.",
  },
  {
    period: "2025",
    title: "Institutional tooling",
    detail: "Graduation Checklist Portal (Angular + Node/TS + Jest) and Student Portal (Django): replaced manual Excel verification workflows used by the academic team.",
  },
  {
    period: "2024",
    title: "Systems fundamentals",
    detail: "Custom Linux shell (fork/exec, readline, threading) and a two-pass assembler for a custom 16-bit ISA.",
  },
  {
    period: "2023",
    title: "Grad-Guru",
    detail: "College decision-support system: 10 scraped datasets unified into a 100k+ record PostgreSQL warehouse, cutting manual research effort by ~90%.",
  },
];

export default function AboutContent() {
  return (
    <div className="relative mx-auto max-w-4xl px-6">
      <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-zinc-50">
        About
      </h1>
      <Reveal className="mt-6">
        <p className="text-[16px] leading-relaxed text-zinc-400 max-w-2xl">
          I am <span className="text-zinc-100 font-medium">Aditi Singla</span>, an AI/ML
          engineer finishing an Integrated B.Tech + M.Tech in Computer Science at
          IIIT-Delhi. I like systems that have to be correct: retrieval that refuses to
          hallucinate, proofs that type-check, pipelines that respect rate limits, and
          tests that catch the regression before the user does.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-zinc-400 max-w-2xl">
          Across research builds, institutional tools, and coursework, the pattern is the
          same: pick a real problem, measure honestly, and leave the code public so anyone
          can check the claims.
        </p>
      </Reveal>

      <div className="mt-16 space-y-0">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.05}>
            <div className="relative pl-8 pb-10 last:pb-4">
              {i < timeline.length - 1 && (
                <span className="absolute left-[5.5px] top-4 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" />
              )}
              <span className="absolute left-0 top-[7px] w-3 h-3 rounded-full border-2 border-accent bg-base" />
              <div className="text-[12px] font-mono text-accent mb-1.5">{t.period}</div>
              <div className="font-display text-lg font-semibold text-zinc-100">{t.title}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-400 max-w-xl">
                {t.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="glass rounded-2xl px-7 py-8">
          <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-3">
            Education
          </div>
          <p className="text-[15px] text-zinc-200 font-medium">
            Integrated B.Tech + M.Tech, Computer Science and Engineering, IIIT-Delhi
          </p>
          <p className="text-[13.5px] text-zinc-500 mt-1">CGPA 9.29/10 · 2021 to 2026</p>
        </div>
      </Reveal>
    </div>
  );
}
