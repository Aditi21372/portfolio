export default function Footer() {
  return (
    <footer className="relative border-t border-line mt-28">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase mb-4">
              Contact
            </div>
            <a
              href="mailto:aditisingla.as11@gmail.com"
              className="link-underline font-display text-2xl md:text-4xl font-semibold tracking-tight text-zinc-100"
            >
              aditisingla.as11@gmail.com
            </a>
            <p className="mt-4 text-[13.5px] text-zinc-500 max-w-sm leading-relaxed">
              Open to AI/ML and software engineering roles. Fastest reply is email; I read
              everything.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            {[
              { label: "GitHub", href: "https://github.com/Aditi21372" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/aditi-singla11/" },
              { label: "Resume", href: "/portfolio/Aditi_Singla_Resume.pdf" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group flex items-center justify-between gap-12 text-zinc-400 hover:text-white transition-colors border-b border-line pb-2 min-w-[220px]"
              >
                <span>{l.label}</span>
                <span className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-zinc-600">
          <span>© {new Date().getFullYear()} Aditi Singla</span>
          <span className="font-mono">Next.js · GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
