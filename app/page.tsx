"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import MetricsStrip from "@/components/MetricsStrip";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, allProjects } from "@/lib/projects";

const skillGroups = [
  {
    title: "AI / ML",
    items: ["PyTorch", "LangChain", "DSPy + GEPA", "FAISS", "Transformers", "Hume EVI", "Gemini API", "NVIDIA API"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Django", "Flask", "PostgreSQL", "SQLite", "Node.js"],
  },
  {
    title: "Frontend & Tools",
    items: ["TypeScript", "React", "Angular", "Next.js", "Tailwind", "Docker", "Git", "Linux"],
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center pt-16">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-accent/[0.14] blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-[-10%] w-[380px] h-[380px] rounded-full bg-accent2/[0.08] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass text-[12.5px] text-zinc-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>
            Open to AI/ML and software engineering roles · 2026 grad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.04] max-w-3xl"
          >
            I build AI systems that
            <span className="text-shimmer"> hold up under verification.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-zinc-400"
          >
            AI/ML engineer at <span className="text-zinc-200">IIIT-Delhi</span> (Integrated
            B.Tech + M.Tech, CGPA 9.29/10). I build RAG pipelines, LLM agents with formal
            verification, and full-stack products: and I put the receipts in public
            repositories you can actually run.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects/"
              className="group px-6 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.99]"
            >
              Explore the work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="/portfolio/Aditi_Singla_Resume.pdf"
              className="px-6 py-3.5 rounded-xl glass text-sm font-medium text-zinc-200 hover:bg-white/[0.09] transition-all hover:scale-[1.02] active:scale-[0.99]"
            >
              Download resume ↓
            </a>
            <a
              href="https://github.com/Aditi21372"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl glass text-sm font-medium text-zinc-200 hover:bg-white/[0.09] transition-all hover:scale-[1.02] active:scale-[0.99]"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/aditi-singla11/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl glass text-sm font-medium text-zinc-300 hover:bg-white/[0.09] transition-all"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative mx-auto max-w-6xl px-6 -mt-8">
        <MetricsStrip />
      </section>

      {/* Featured projects */}
      <section className="relative mx-auto max-w-6xl px-6 mt-28">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-3">
                Selected work
              </div>
              <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-zinc-100">
                Featured projects
              </h2>
            </div>
            <Link
              href="/projects/"
              className="hidden sm:inline-flex text-sm text-zinc-400 hover:text-white transition-colors group"
            >
              All projects
              <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/projects/"
              className="hidden sm:inline-flex text-sm text-zinc-400 hover:text-white transition-colors group"
            >
              All projects
              <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="relative mx-auto max-w-6xl px-6 mt-28">
        <Reveal>
          <div className="text-[12px] font-mono text-accent tracking-widest mb-3">Stack</div>
          <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-zinc-100 mb-10">
            Tools I reach for
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="glass rounded-2xl p-7 h-full hover:border-white/[0.14] transition-colors duration-500">
                <div className="text-[13px] font-semibold text-zinc-200 mb-5 font-display tracking-wide">
                  {g.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="text-[12px] px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300 font-mono hover:border-accent/40 hover:text-white transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative mx-auto max-w-6xl px-6 mt-28 mb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent/[0.13] via-panel to-accent2/[0.06] px-8 md:px-14 py-14 md:py-20 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[240px] bg-accent/25 blur-[90px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-zinc-50">
                Let's build something that ships.
              </h2>
              <p className="mt-4 text-zinc-400 max-w-lg mx-auto text-[15px] leading-relaxed">
                I am looking for AI/ML and software engineering roles where the work is real,
                the systems get used, and the code gets reviewed.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="px-6 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02]"
                >
                  Say hello
                </a>
                <a
                  href="https://www.linkedin.com/in/aditi-singla11/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl glass text-sm font-medium text-zinc-200 hover:bg-white/[0.09] transition-all"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
