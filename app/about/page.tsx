import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Aditi Singla",
  description:
    "The journey: from first C programs at IIIT-Delhi to LLM agents that type-check their own proofs.",
};

export default function About() {
  return (
    <div className="relative pt-36 pb-10 min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[520px] grid-bg pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-accent/[0.12] blur-[110px] rounded-full pointer-events-none" />
      <AboutContent />
    </div>
  );
}
