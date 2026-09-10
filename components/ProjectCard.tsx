"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={`/projects/${project.slug}/`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b ${project.color} border border-line hover:border-white/[0.16] transition-all duration-500 glow-ring hover:shadow-2xl hover:shadow-accent/20`}
    >
      <div className="relative p-7 h-full flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-2xl text-zinc-500 group-hover:text-accent transition-colors duration-500">
            {project.icon}
          </span>
          <span className="text-[11px] tracking-wide text-zinc-500 font-mono">
            {project.year}
          </span>
        </div>

        <h3 className="font-display text-[19px] font-semibold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
          {project.name}
        </h3>
        <p className="text-[13px] text-accent mt-1 mb-3 font-medium">{project.tagline}</p>

        <p className="text-[13.5px] leading-relaxed text-zinc-400 line-clamp-3 mb-6">
          {project.summary}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                className="text-[10.5px] px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.06] text-zinc-400 font-mono"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="text-zinc-600 group-hover:text-zinc-200 group-hover:translate-x-1 transition-all duration-300 text-lg leading-none">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
