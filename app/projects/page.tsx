import type { Metadata } from "next";
import ProjectsIndex from "./ProjectsIndex";
import { allProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Aditi Singla",
  description:
    "AI/ML agents, RAG systems, data pipelines, and full-stack products: case studies with real metrics.",
};

export default function Projects() {
  return (
    <div className="relative pt-36 pb-10 min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[420px] grid-bg pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/[0.12] blur-[110px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-zinc-50">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-zinc-400 leading-relaxed">
          {allProjects.length} builds across AI/ML agents, retrieval systems, data
          engineering, and systems programming. Every card opens a full case study with
          the problem, the design decisions, and the measured outcome.
        </p>
        <ProjectsIndex />
      </div>
    </div>
  );
}
