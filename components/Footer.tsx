export default function Footer() {
  return (
    <footer className="relative border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent2 grid place-items-center text-[13px] font-bold text-white">
            A
          </span>
          <div className="text-sm text-zinc-500">
            <span className="text-zinc-300 font-medium">Aditi Singla</span>
            <span className="mx-2 text-zinc-700">·</span>
            AI/ML Engineer
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm text-zinc-500">
          <a
            href="https://github.com/Aditi21372"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditi-singla11/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-zinc-200 transition-colors">
            Email
          </a>
        </div>
      </div>
      <div className="text-center pb-10 text-xs text-zinc-600">
        © {new Date().getFullYear()} Aditi Singla · Built with Next.js, deployed on GitHub Pages
      </div>
    </footer>
  );
}
