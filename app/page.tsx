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
    <div className="relative noise">
      {/* Hero */}
      <section className="relative min-h-[94vh] flex items-center pt-16">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[380px] rounded-full bg-accent/[0.09] blur-[130px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 font-mono text-[12px] tracking-[0.16em] text-zinc-500 uppercase mb-8"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mint" />
            </span>
            Open to AI/ML and software engineering roles · 2026 grad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[42px] md:text-[76px] leading-[1.02] font-semibold tracking-[-0.035em] max-w-4xl"
          >
            I build AI systems that
            <span className="text-shimmer"> hold up under verification.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-[15.5px] leading-[1.8] text-zinc-400"
          >
            Aditi Singla. AI/ML engineer at IIIT-Delhi, Integrated B.Tech + M.Tech, CGPA
            9.29/10. I build RAG pipelines, LLM agents with formal verification, and
            full-stack products, and I put the receipts in public repositories you can run.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-11 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="/projects/"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.99]"
            >
              Explore the work
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="/portfolio/Aditi_Singla_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-sm font-medium text-zinc-100 hover:bg-white/[0.06] transition-all"
            >
              Resume ↓
            </a>
            <a
              href="mailto:aditisingla.as11@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white transition-all link-underline"
            >
              aditisingla.as11@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative mx-auto max-w-6xl px-6 -mt-10">
        <MetricsStrip />
      </section>

      {/* Selected work: editorial index */}
      <section className="relative mx-auto max-w-6xl px-6 mt-32">
        <Reveal>
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 tracking-[0.16em] uppercase mb-3">
                Selected work
              </div>
              <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-zinc-100">
                Six things worth your time
              </h2>
            </div>
            <Link
              href="/projects/"
              className="hidden sm:inline-flex text-sm text-zinc-500 hover:text-white transition-colors group"
            >
              All {allProjects.length} projects
              <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {allProjects.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} y={18}>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[64px_1fr_auto_auto] items-center gap-x-6 py-6 border-b border-line hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg"
              >
                <span className="font-mono text-[12px] text-zinc-600 group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="font-display text-[17px] md:text-[19px] font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors truncate">
                    {p.name}
                    <span className="text-zinc-600 font-normal hidden md:inline text-[14px] ml-3">
                      {p.tagline}
                    </span>
                  </div>
                </div>
                <span className="hidden md:block font-mono text-[11px] text-zinc-600 tracking-wider">
                  {p.stack.slice(0, 2).join(" · ")}
                </span>
                <span className="text-zinc-600 group-hover:text-zinc-200 group-hover:translate-x-1.5 transition-all duration-300 text-lg">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured cards */}
      <section className="relative mx-auto max-w-6xl px-6 mt-24">
        <Reveal>
          <div className="text-[11px] font-mono text-zinc-500 tracking-[0.16em] uppercase mb-8">
            Deep dives
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="relative mx-auto max-w-6xl px-6 mt-32">
        <Reveal>
          <div className="text-[11px] font-mono text-zinc-500 tracking-[0.16em] uppercase mb-10">
            Stack
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="border-t border-line pt-5">
                <div className="text-[12.5px] font-mono tracking-[0.14em] uppercase text-zinc-400 mb-4">
                  {g.title}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2.5">
                  {g.items.map((s) => (
                    <span key={s} className="text-[13.5px] text-zinc-500 hover:text-zinc-200 transition-colors cursor-default">
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
      <section className="relative mx-auto max-w-6xl px-6 mt-32 mb-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto py-10">
            <div className="text-[11px] font-mono text-zinc-500 tracking-[0.16em] uppercase mb-5">
              Next
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-zinc-50">
              Have something worth building?
            </h2>
            <p className="mt-5 text-zinc-400 text-[15px] leading-relaxed">
              I am looking for teams where the work is real, the code gets reviewed, and the
              systems get used. Tell me about yours.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:aditisingla.as11@gmail.com"
                className="px-7 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02]"
              >
                aditisingla.as11@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/aditi-singla11/"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-xl border border-white/15 text-sm font-medium text-zinc-100 hover:bg-white/[0.06] transition-all"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
