"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const chapters = [
  {
    num: "01",
    year: "2021",
    title: "The setup",
    body: "Joined the Integrated B.Tech + M.Tech program in Computer Science at IIIT-Delhi. Five years, two degrees, one transcript. The deal with myself was simple: leave with things that actually run, not just grades. (The grades held up too: 9.29/10.)",
    facts: ["IIIT-Delhi", "Integrated B.Tech + M.Tech", "CGPA 9.29/10"],
  },
  {
    num: "02",
    year: "2022",
    title: "Foundations, the unglamorous way",
    body: "First repositories were C programs for operating systems and computer organization: process scheduling, memory, assembly. Nothing looked like much at the time. It turns out that year decided how I debug everything since: read the source, trace the syscall, check the actual state.",
    facts: ["First C repositories", "OS internals", "Computer organization"],
  },
  {
    num: "03",
    year: "2023",
    title: "Data that has to be trusted",
    body: "Grad-Guru merged ten scraped datasets with conflicting schemas into one 100,000+ record PostgreSQL warehouse, and cut manual college-research effort by about 90% for the people who used it. Same year, the opposite end of the stack: a two-pass assembler for a custom 16-bit ISA, where a missing HLT instruction is a hard error, not a style opinion.",
    facts: ["100k+ records integrated", "10 datasets unified", "16-bit ISA assembler"],
  },
  {
    num: "04",
    year: "2024",
    title: "Down to the metal",
    body: "Built a UNIX shell from scratch: fork and exec dispatch, readline history, reaping children, threading. Four of us, one semester, and the discovery that everything a shell does looks trivial until it is your fork() call hanging. Around then the institutional work started finding me, and I learned that tools people rely on weekly need tests, not just features.",
    facts: ["fork/exec, pthreads", "Team of 4", "First institutional tools"],
  },
  {
    num: "05",
    year: "2025",
    title: "The year everything shipped",
    body: "NeuroSync: a PyTorch network fusing facial and vocal emotion signals for real-time stress detection, hitting MSE 0.0032 with chat and VR front-ends. The Graduation Checklist Portal that replaced an academic team's Excel macros. A Django portal unifying 17+ record APIs. A RAG chatbot that answers only from your documents. Different problems, one lesson: the fallback path is the product.",
    facts: ["NeuroSync (team of 4)", "Graduation portal in production use", "RAG systems started here"],
  },
  {
    num: "06",
    year: "2026",
    title: "Agents that prove their work",
    body: "The IneqMath Proof Agent: an LLM that generates inequality proofs and gets them type-checked in Lean 4, with GEPA prompt optimization raising the verified pass rate from 28.6% to 100%. Then Paper2Beamer, an agent that turns papers into presentation decks. Graduation is next; the job search is on, and the receipts are public.",
    facts: ["28.6% → 100% verified pass rate", "Lean 4 in the loop", "Searching for AI/ML roles"],
  },
];

const principles = [
  {
    line: "If a claim can't be checked, I don't make it.",
    note: "Every number on this site traces to a public repository: the metrics, the traces, the results directories.",
  },
  {
    line: "The fallback path is the product.",
    note: "APIs fail, quotas run out, repos get deleted. NURO answers without its LLM; the RAG service runs on a free model; the crawler respects rate limits by construction.",
  },
  {
    line: "Ship the boring parts.",
    note: "LICENSE files, CI pipelines, test suites, .gitignore hygiene. That unglamorous layer is the difference between a demo and production-grade work.",
  },
];

export default function AboutContent() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 75%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });

  return (
    <div className="relative mx-auto max-w-5xl px-6">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-4">
          About
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-zinc-50">
          The journey so far
        </h1>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-zinc-400">
          I'm Aditi Singla, finishing an Integrated B.Tech + M.Tech in Computer Science at
          IIIT-Delhi. This page is the honest version of the last five years: what I built,
          what broke, and what each thing taught me that the next thing depended on.
        </p>
      </motion.div>

      {/* Journey timeline */}
      <div ref={lineRef} className="relative mt-20">
        {/* progress line */}
        <div className="absolute left-[11px] md:left-[27px] top-2 bottom-24 w-px bg-white/[0.07]" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-[11px] md:left-[27px] top-2 bottom-24 w-px origin-top bg-gradient-to-b from-accent via-accent2 to-transparent"
        />

        {chapters.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-12 md:pl-20 pb-16 last:pb-2"
          >
            {/* node */}
            <motion.span
              initial={{ scale: 0.4, opacity: 0.3 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute left-0 md:left-[13px] top-1.5 w-[23px] h-[23px] rounded-full border border-white/10 bg-panel grid place-items-center"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-accent to-accent2" />
            </motion.span>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-[11px] text-zinc-600 tracking-widest">{c.num}</span>
              <span className="font-mono text-[12px] text-accent">{c.year}</span>
            </div>

            <h2 className="font-display text-[22px] md:text-[26px] font-semibold tracking-tight text-zinc-100">
              {c.title}
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-[1.8] text-zinc-400">{c.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.facts.map((f) => (
                <span
                  key={f}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-500 font-mono"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Principles */}
      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-mono text-accent tracking-widest uppercase mb-8"
        >
          How I work
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.line}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-7 hover:border-white/[0.14] transition-colors duration-500"
            >
              <div className="font-display text-[17px] font-medium text-zinc-100 leading-snug">
                {p.line}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Now */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent/[0.12] via-panel to-accent2/[0.05] px-8 md:px-12 py-12"
      >
        <div className="absolute -top-20 left-1/3 w-[380px] h-[200px] bg-accent/20 blur-[90px] rounded-full pointer-events-none" />
        <div className="relative">
          <div className="text-[12px] font-mono text-accent tracking-widest uppercase mb-3">
            Now
          </div>
          <p className="text-[16px] leading-relaxed text-zinc-300 max-w-2xl">
            Final year of the integrated degree, CGPA 9.29/10 in hand, looking for AI/ML and
            software engineering roles where the work gets reviewed and shipped. If you have
            such a problem, the fastest way to reach me is
            <a
              href="https://www.linkedin.com/in/aditi-singla11/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:text-white transition-colors ml-1.5"
            >
              LinkedIn
            </a>
            , and the fastest way to evaluate me is the
            <Link href="/projects/" className="text-accent hover:text-white transition-colors ml-1.5">
              projects
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
