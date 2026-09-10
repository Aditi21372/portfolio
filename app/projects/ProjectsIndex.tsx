"use client";

import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/projects";

export default function ProjectsIndex() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {allProjects.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
}
