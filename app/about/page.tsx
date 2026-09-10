import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Aditi Singla",
  description:
    "Aditi Singla: AI/ML engineer at IIIT-Delhi (Integrated B.Tech + M.Tech CSE, CGPA 9.29/10). RAG systems, LLM agents, data pipelines.",
};

export default function About() {
  return (
    <div className="relative pt-36 pb-10 min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[420px] grid-bg pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-accent/[0.12] blur-[110px] rounded-full pointer-events-none" />
      <AboutContent />
    </div>
  );
}
