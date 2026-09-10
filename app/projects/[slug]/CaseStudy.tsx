"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { allProjects } from "@/lib/projects";
import { withBasePath } from "@/lib/basePath";

export default function CaseStudy({ slug }: { slug: string }) {
  const project = allProjects.find((p) => p.slug === slug)!;
  const idx = allProjects.findIndex((p) => p.slug === slug);
  const next = allProjects[(idx + 1) % allProjects.length];

  return (
    <div className="relative pt-32 pb-10 min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[460px] grid-bg pointer-events-none" />
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[320px] bg-gradient-to-r ${project.color} blur-[110px] rounded-full pointer-events-none`}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.a
          href={withBasePath("/projects/")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-200 transition-colors mb-10"
        >
          <span className="mr-1.5">←</span> All projects
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 text-[12px] font-mono text-zinc-500 mb-5">
            <span>{project.year}</span>
            {project.team && <span>·</span>}
            {project.team && <span>{project.team}</span>}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-4xl text-zinc-600">{project.icon}</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-zinc-50">
              {project.name}
            </h1>
          </div>

          <p className="text-lg text-accent font-medium mb-4">{project.tagline}</p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed max-w-2xl">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo.href}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02]"
              >
                {project.demo.label} ↗
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl glass text-sm font-medium text-zinc-200 hover:bg-white/[0.09] transition-all"
            >
              View source ↗
            </a>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {project.metrics.map((m, i) => (
            <div key={m.label} className="bg-panel/90 px-6 py-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="font-display text-xl md:text-2xl font-semibold text-gradient">
                  {m.value}
                </div>
                <div className="mt-1.5 text-[12px] text-zinc-500">{m.label}</div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Problem */}
        <Reveal className="mt-16">
          <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-3">
            The problem
          </div>
          <p className="text-[16px] leading-relaxed text-zinc-300">{project.problem}</p>
        </Reveal>

        {/* Approach */}
        <Reveal className="mt-12">
          <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-5">
            How I built it
          </div>
          <div className="space-y-4">
            {project.approach.map((step, i) => (
              <Reveal key={i} delay={i * 0.06} y={16}>
                <div className="flex gap-4 glass rounded-xl px-5 py-4">
                  <span className="font-mono text-[12px] text-accent mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-zinc-300">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Stack */}
        <Reveal className="mt-12">
          <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-5">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[12.5px] px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-300 font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Outcome */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-accent/[0.1] to-transparent px-7 py-8">
            <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-3">
              Outcome
            </div>
            <p className="text-[15.5px] leading-relaxed text-zinc-200">{project.outcome}</p>
          </div>
        </Reveal>

        {/* Next project */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-line"
        >
          <a
            href={withBasePath(`/projects/${next.slug}/`)}
            className="group flex items-center justify-between glass rounded-2xl px-7 py-6 hover:bg-white/[0.05] transition-colors"
          >
            <div>
              <div className="text-[12px] font-mono text-zinc-500 mb-1">Next project</div>
              <div className="font-display text-lg font-semibold text-zinc-100 group-hover:text-white">
                {next.name}
              </div>
            </div>
            <span className="text-zinc-600 group-hover:text-zinc-200 group-hover:translate-x-1 transition-all text-xl">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
