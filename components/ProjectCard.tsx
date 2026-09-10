"use client";

import { motion } from "framer-motion";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b ${project.color} border border-line card-hover hover:border-white/[0.18] hover:-translate-y-1.5 flex flex-col`}
    >
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-10">
          <span className="font-mono text-[11px] text-zinc-600 group-hover:text-accent transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[11px] text-zinc-600">{project.year}</span>
        </div>

        <h3 className="font-display text-[18px] font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
          {project.name}
        </h3>
        <p className="text-[12.5px] text-zinc-400 mt-2 leading-relaxed line-clamp-2 mb-6">
          {project.summary}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-500 font-mono"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="text-zinc-600 group-hover:text-zinc-200 group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
