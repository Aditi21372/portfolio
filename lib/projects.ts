export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  featured?: boolean;
  demo?: { label: string; href: string };
  repo: string;
  year: string;
  team?: string;
  role?: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  problem: string;
  approach: string[];
  outcome: string;
  color: string;
  icon: string;
};

export const projects: Project[] = [
  {
    slug: "ineqmath-proof-agent",
    name: "IneqMath Proof Agent",
    tagline: "LLM proofs, formally verified",
    summary:
      "LLM agent that generates mathematical inequality proofs and verifies them with Lean 4, optimized with GEPA prompt evolution.",
    featured: true,
    repo: "https://github.com/Aditi21372/ineqmath-proof-agent",
    year: "2026",
    team: "Research project",
    role: "Solo",
    metrics: [
      { value: "28.6% → 100%", label: "verified pass rate after GEPA" },
      { value: "5", label: "independent judges, incl. Lean 4" },
      { value: "7", label: "inequality benchmarks" },
    ],
    stack: ["Python", "DSPy", "GEPA (MIPROv2)", "Lean 4", "Mathlib", "NVIDIA API"],
    problem:
      "LLMs score 40 to 70% on math answer accuracy, but only 5 to 20% once their proofs are formally verified. A model that says the right answer with broken logic is worse than useless in research settings.",
    approach: [
      "Built a DSPy ChainOfThought proof generator over 7 inequality benchmarks, with 6 tools exposed to the agent.",
      "Designed a five-judge panel: Final Answer, Toy Case, Numerical Approximation, Numerical Computation, and a Logical Gap judge that compiles every candidate proof into a Lean 4 + Mathlib project and type-checks it.",
      "Wired judge feedback into real GEPA (MIPROv2) prompt optimization, with per-judge metrics instead of a single blended score.",
      "Logged every LLM call, tool call, and verdict to JSON so experiments are exactly reproducible; sessions ship in the repo.",
    ],
    outcome:
      "GEPA optimization lifted the rigorously verified pass rate from 28.6% to 100% on the tested set, with the Logical Gap and Final Answer judges both reaching 100%. The gap between looking right and type-checking is now measured, not guessed.",
    color: "from-violet-500/20 to-indigo-500/10",
    icon: "∑",
  },
  {
    slug: "paper2beamer-agent",
    name: "Paper2Beamer Agent",
    tagline: "LaTeX papers → themed Beamer decks",
    summary:
      "Autonomous agent that turns LaTeX research papers into polished Beamer presentations, controlled by natural language.",
    featured: true,
    demo: { label: "See the generated deck", href: "https://github.com/Aditi21372/paper2beamer-agent/blob/main/docs/demo_output.pdf" },
    repo: "https://github.com/Aditi21372/paper2beamer-agent",
    year: "2026",
    team: "Course project",
    role: "Solo",
    metrics: [
      { value: "End-to-end", label: "LaTeX in, PDF deck out" },
      { value: "Auto-repair", label: "compilation error loop" },
      { value: "NL control", label: "\"green theme, 14 slides\"" },
    ],
    stack: ["Python", "LLM Agents", "OpenAI API", "LaTeX / Beamer", "pdflatex"],
    problem:
      "Turning a paper into slides is hours of mechanical work: pick sections, budget slides, place figures, fight Beamer styling, then debug LaTeX compilation errors by hand.",
    approach: [
      "Planner first: the agent allocates a slide budget across sections before writing anything, so decks stay balanced instead of over-fitting the introduction.",
      "Slide writer uses parsed section structure and sentence-level layout, not raw text dumps, producing Slide objects with titles, bullets, and figure slots.",
      "Renderer + auto-repair loop: missing Beamer themes and logos are detected and patched automatically; compilation failures trigger fixes and retries before anything reaches the user.",
      "Interactive refinement mode: iterate on the deck conversationally without rebuilding from scratch.",
    ],
    outcome:
      "A real research paper becomes a themed, compiled Beamer PDF in one command, and the demo deck generated from a paper ships in the repository.",
    color: "from-sky-500/20 to-cyan-500/10",
    icon: "▤",
  },
  {
    slug: "neurosync",
    name: "NeuroSync",
    tagline: "Empathic AI for inclusive co-design",
    summary:
      "Facial + vocal emotion-fusion network detecting stress and engagement in real time, with chat and VR interaction modalities.",
    featured: true,
    repo: "https://github.com/Aditi21372/Neurosync",
    year: "2025",
    team: "Team of 4",
    role: "ML + full-stack",
    metrics: [
      { value: "0.0032", label: "MSE, fused prediction" },
      { value: "0.9877", label: "cosine similarity" },
      { value: "2", label: "modalities fused: face + voice" },
    ],
    stack: ["PyTorch", "React 19", "TypeScript", "Hume EVI", "Flask", "OpenCV"],
    problem:
      "Co-design sessions with neurodivergent users fail silently: facilitators cannot see rising stress or falling engagement until the user has already disengaged.",
    approach: [
      "Designed a MultiModalFusionNetwork in PyTorch: emotion-label embeddings weighted by intensity for 5 facial and 5 vocal channels, a context signal, and an adapter bottleneck feeding three output heads (stress, engagement, fatigue).",
      "Captured facial emotion in-browser via camera and vocal emotion through Hume's Empathic Voice Interface for real-time voice analysis.",
      "Served predictions through a Flask inference API with session management, feeding a React 19 client: live emotion trends, expression levels, task breakdowns, and personalization flows.",
      "Added VR and chatbot interaction modalities so the same empathy signals adapt immersive and conversational experiences alike.",
    ],
    outcome:
      "Real-time stress/engagement detection hitting MSE 0.0032 and cosine similarity 0.9877, with the full pipeline (camera → fusion → adaptive UI) running end to end. Built with a team of 4; full history preserved.",
    color: "from-fuchsia-500/20 to-purple-500/10",
    icon: "◈",
  },
  {
    slug: "chatbot",
    name: "NeuroChat",
    tagline: "RAG chatbot that answers only from your docs",
    summary:
      "FastAPI retrieval-augmented generation service: document chunking, FAISS indexing, grounded generation with OpenAI or a free TinyLlama fallback.",
    featured: true,
    repo: "https://github.com/Aditi21372/chatbot",
    year: "2025",
    team: "Solo",
    role: "Solo",
    metrics: [
      { value: "FAISS", label: "vector retrieval, MiniLM embeddings" },
      { value: "Dual LLM", label: "GPT or free TinyLlama fallback" },
      { value: "FastAPI", label: "production-style service" },
    ],
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "Transformers", "sentence-transformers"],
    problem:
      "Chatbots hallucinate when they answer from weights instead of context. For assistive use-cases, a confident wrong answer is worse than 'I don't know.'",
    approach: [
      "Document pipeline: text loading, 1000-char chunking with 200-char overlap, MiniLM (all-MiniLM-L6-v2) embeddings into a FAISS index.",
      "RetrievalQA chain with a grounded prompt: answer only from retrieved context, and say 'I don't know' when it is absent.",
      "Custom LangChain LLM wrapper integrating a Hugging Face transformers pipeline (TinyLlama-1.1B) with Pydantic v2 compatibility, so the service runs with zero API cost.",
      "OpenAI GPT is used automatically when a key is configured; otherwise the free model takes over, no code changes.",
    ],
    outcome:
      "A clean, honest RAG service: grounded answers, a health endpoint, API-driven chat, and a zero-cost fallback path.",
    color: "from-emerald-500/20 to-teal-500/10",
    icon: "⌘",
  },
  {
    slug: "cgal-crawler",
    name: "CGAL GitHub Crawler",
    tagline: "Measuring how a C++ library is really used",
    summary:
      "Rate-limited GitHub crawler + Flask dashboard that discovers and analyzes real-world CGAL (computational geometry) usage patterns at scale.",
    featured: true,
    repo: "https://github.com/Aditi21372/CGAL-CRAWLER",
    year: "2025",
    team: "Research project",
    role: "Solo",
    metrics: [
      { value: "Rate-limited", label: "token bucket, bounded concurrency" },
      { value: "SQLite", label: "repository + pattern analytics" },
      { value: "Flask", label: "live crawl dashboard" },
    ],
    stack: ["Python", "Flask", "PyGithub", "SQLite", "BeautifulSoup", "regex"],
    problem:
      "CGAL is a widely used computational geometry library with almost no instrumentation: nobody can answer basic questions like which CGAL headers real projects rely on most.",
    approach: [
      "Crawler engine with configurable rate limiting (requests per minute, request spacing, bounded concurrency) and graceful RateLimitExceededException handling.",
      "Pattern analyzer matching every candidate file against a configurable ruleset of known CGAL headers and namespace patterns.",
      "DatabaseManager persisting repository, file, and pattern stats into SQLite with CSV/JSON export.",
      "Flask dashboard for crawl control, live stats, and per-repository drill-down.",
    ],
    outcome:
      "A reproducible evidence pipeline for library-usage research, polite to the GitHub API by construction.",
    color: "from-amber-500/20 to-orange-500/10",
    icon: "⌗",
  },
  {
    slug: "graduation-checklist-portal",
    name: "Graduation Checklist Portal",
    tagline: "Replaced a manual Excel workflow with software",
    summary:
      "Academic portal that automates graduation eligibility: CGPA recalculation, degree/honors/minors rules, unit-tested, used by the academic team.",
    featured: true,
    repo: "https://github.com/Aditi21372/Graduation-Checklist-Portal",
    year: "2025",
    team: "Institutional project",
    role: "Full-stack",
    metrics: [
      { value: "May–June", label: "crunch window automated" },
      { value: "Jest", label: "CGPA + rules unit tested" },
      { value: "Admin + student", label: "two views" },
    ],
    stack: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "Jest"],
    problem:
      "Provisional degrees must be declared by early July. Course replacements and ERP limitations make CGPA verification error-prone, so the academic team recalculated everything by hand, repeatedly, in Excel with macros.",
    approach: [
      "TypeScript rule engine: degree requirements, honors criteria, and minor requirements as explicit, testable rules (cgpa.ts, rule.ts, degree.ts, honors.ts).",
      "Automated CGPA recomputation from ERP-derived course data, with course-replacement handling.",
      "Admin login for the academic team and a self-service student view, with minors drill-down.",
      "Jest test suites covering CGPA math, graduation rules, and the server, plus fail-safe course-database loading.",
    ],
    outcome:
      "A recurring manual, multi-person Excel workflow became an automated, tested check inside a hard two-month deadline.",
    color: "from-indigo-500/20 to-blue-500/10",
    icon: "◉",
  },
  {
    slug: "grad-guru",
    name: "Grad-Guru",
    tagline: "College decision support, data-driven",
    summary:
      "Decision-support system integrating 10 scraped datasets into a 100,000+ record PostgreSQL warehouse with automated ETL and comparative analysis.",
    repo: "https://github.com/Aditi21372/Grad-Guru",
    year: "2023",
    team: "Team of 4",
    role: "Data engineering",
    metrics: [
      { value: "100k+", label: "records integrated" },
      { value: "10", label: "scraped datasets unified" },
      { value: "90%", label: "manual research effort cut" },
    ],
    stack: ["Python", "PostgreSQL", "Web scraping", "ETL", "Flask"],
    problem:
      "Students compare colleges across dozens of inconsistent sources: rankings, fees, placements, and cutoffs live in different schemas on different sites.",
    approach: [
      "Scraped and consolidated 10 heterogeneous datasets into one PostgreSQL schema with schema matching and mapping.",
      "Automated ETL pipelines for ingestion, deduplication, and propagation instead of one-off scripts.",
      "Comparative analysis workflows: side-by-side institution comparison on the criteria that actually differ.",
    ],
    outcome:
      "Cut manual research effort by ~90% for the core use case, with the integrated dataset as the single source of truth.",
    color: "from-rose-500/20 to-pink-500/10",
    icon: "⌘",
  },
  {
    slug: "nuro",
    name: "NURO",
    tagline: "AI task-breakdown assistant",
    summary:
      "Django + Google Gemini web app that turns a task name into structured, actionable steps, with an offline fallback when the LLM fails.",
    demo: { label: "Try the repo", href: "https://github.com/Aditi21372/NURO" },
    repo: "https://github.com/Aditi21372/NURO",
    year: "2025",
    team: "Personal",
    role: "Solo",
    metrics: [
      { value: "Gemini 2.0", label: "Flash breakdown generation" },
      { value: "Fallback", label: "deterministic when LLM fails" },
      { value: "Priority 1–5", label: "validated task model" },
    ],
    stack: ["Python", "Django", "Google Gemini", "LLM"],
    problem:
      "The hard part of a task is starting it. A bare task list does not help you decompose 'prepare for my ML midterm' into something doable tonight.",
    approach: [
      "Task model with priority (1 to 5, validated), deadlines, and completion state in Django.",
      "Gemini integration prompted for JSON-shaped, logically ordered breakdowns with tool and technique suggestions.",
      "Resilience first: any LLM failure (network, quota, malformed output) falls back to a deterministic local breakdown so the flow never dead-ends.",
      "Structured logging across every LLM interaction for debugging.",
    ],
    outcome:
      "A task manager that plans with you, and still works when the API does not.",
    color: "from-lime-500/20 to-green-500/10",
    icon: "✦",
  },
  {
    slug: "student-portal",
    name: "Student Portal",
    tagline: "One API for 17+ academic endpoints",
    summary:
      "Django service wrapping 17+ academic-record APIs: graduation checks, grades, credit audits, honors and minors tracking.",
    repo: "https://github.com/Aditi21372/Student_portal",
    year: "2025",
    team: "Institutional project",
    role: "Backend",
    metrics: [
      { value: "17+", label: "upstream APIs unified" },
      { value: "Django", label: "single clean service" },
      { value: "Self-service", label: "degree progress checks" },
    ],
    stack: ["Python", "Django", "REST", "dotenv config"],
    problem:
      "Academic data lives behind scattered endpoints. Students and staff query ERP systems directly, repeating the same fragile lookups.",
    approach: [
      "Unified Django service exposing graduation checks, mandatory requirements, 32-credit audits, course work, grades, incomplete grades, honors, minors, and economics-major rules behind one interface.",
      "Environment-driven configuration (API base URL, debug, allowed hosts) with setup scripts for one-command bootstrapping.",
    ],
    outcome:
      "Students query degree progress without touching the ERP, and the academic team gets a stable integration surface.",
    color: "from-cyan-500/20 to-sky-500/10",
    icon: "◎",
  },
  {
    slug: "linux-shell",
    name: "Custom Linux Shell",
    tagline: "fork, exec, and the little details",
    summary:
      "A UNIX shell from scratch in C: internal and external commands via process forking and the exec system-call family, with readline history and threading.",
    repo: "https://github.com/Aditi21372/linux-shell",
    year: "2024",
    team: "Team of 4",
    role: "Systems programming",
    metrics: [
      { value: "fork/exec", label: "external command dispatch" },
      { value: "readline", label: "history + interactive input" },
      { value: "POSIX", label: "pthreads + system calls" },
    ],
    stack: ["C", "Linux", "POSIX", "Make"],
    problem:
      "Shells look trivial until you implement one: signal handling, reaping children, history, argument parsing, and the difference between built-ins and external commands all bite at once.",
    approach: [
      "Core REPL with readline input and persistent history, dispatching internal commands in-process and external commands via fork() plus the exec family with proper wait reaping.",
      "Standalone utilities (ls via dirent + stat, cat, mkdir, rm, date) compiled independently and invoked as external commands.",
      "Threaded shell driver with simulated OS-level scheduling and memory behaviors.",
      "Edge cases covered and documented: invalid paths, bad options, root navigation, empty commands.",
    ],
    outcome:
      "A buildable, testable shell that behaves the way real shells do, team of 4, Jan to May 2024.",
    color: "from-slate-500/20 to-zinc-500/10",
    icon: "$_",
  },
  {
    slug: "custom-isa-assembler",
    name: "Custom ISA Assembler",
    tagline: "assembly in, machine code out",
    summary:
      "Two-pass assembler for a custom 16-bit ISA with full syntax and semantic error reporting, down to the line number.",
    repo: "https://github.com/Aditi21372/Custom-ISA-Assembler",
    year: "2023",
    team: "Course project",
    role: "Solo",
    metrics: [
      { value: "16-bit", label: "custom ISA encoding" },
      { value: "A, B, C, D, E, F", label: "instruction formats" },
      { value: "Line-level", label: "error diagnostics" },
    ],
    stack: ["Python", "Computer Architecture"],
    problem:
      "Assemblers must not just translate, they must reject everything invalid precisely: typos, undefined labels, misuse of FLAGS, illegal immediates, missing HLT.",
    approach: [
      "Full custom-ISA opcode map across formats A to F with register and immediate encoding to 16-bit binary.",
      "Label and variable resolution with strict rules (variables only at program start, HLT last).",
      "Comprehensive error detection: typos in instructions or registers, undefined labels or variables, illegal FLAGS use, misuse of labels as variables, each reported with the line number.",
      "Clean two-stage output: binary machine code on success, first-error diagnostics on failure.",
    ],
    outcome:
      "A tiny but complete toolchain stage, exactly as strict as the hardware requires.",
    color: "from-purple-500/20 to-violet-500/10",
    icon: "01",
  },
  {
    slug: "task-manager-app",
    name: "Task Manager App",
    tagline: "React Native, production setup",
    summary:
      "Cross-platform task manager on Expo SDK 53 and React Native 0.79 with Docker-based development setup and a demo video.",
    demo: { label: "Repo with demo video", href: "https://github.com/Aditi21372/task-manager-app" },
    repo: "https://github.com/Aditi21372/task-manager-app",
    year: "2025",
    team: "Personal",
    role: "Solo",
    metrics: [
      { value: "SDK 53", label: "New Architecture ready" },
      { value: "Docker", label: "containerized dev setup" },
      { value: "iOS · Android · Web", label: "one codebase" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Docker"],
    problem:
      "Simple CRUD apps are easy; the differentiators are the unglamorous parts: SDK compliance, reproducible environments, and real deployment paths.",
    approach: [
      "Expo SDK 53 with React 19 and RN 0.79 on the New Architecture.",
      "Dockerfile for reproducible dev environments; documented quick start for both paths.",
      "Core flows: add/complete/delete tasks with real-time progress counters and animated states.",
    ],
    outcome:
      "A mobile-first task manager that runs on three platforms from one codebase, with the dev environment reduced to one docker command.",
    color: "from-orange-500/20 to-amber-500/10",
    icon: "▣",
  },
  {
    slug: "lumos-wickery",
    name: "Lumos Wickery",
    tagline: "storefront experience in React + TS",
    summary:
      "Multi-page storefront web app with product catalog, content pages, and a typed component system on Vite + Tailwind.",
    repo: "https://github.com/Aditi21372/lumos-wickery-glow",
    year: "2025",
    team: "Personal",
    role: "Solo",
    metrics: [
      { value: "Vite", label: "fast dev, clean production build" },
      { value: "shadcn/ui", label: "component system" },
      { value: "6 pages", label: "shop, about, blog, contact, 404" },
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    problem:
      "A storefront is deceptively simple: consistent theming, responsive product cards, routing, and a build that stays clean under strict TypeScript.",
    approach: [
      "React 18 + TypeScript on Vite with ESLint and strict TS configuration.",
      "Tailwind + shadcn/ui primitives for a consistent component system (Header, Footer, ProductCard).",
      "Six routed pages with 404 handling and a cohesive visual theme.",
    ],
    outcome:
      "A clean, fast storefront codebase that builds to optimized static assets.",
    color: "from-teal-500/20 to-emerald-500/10",
    icon: "❖",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const allProjects = projects;
