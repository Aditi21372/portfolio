"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <span className="w-7 h-7 rounded-[9px] bg-gradient-to-br from-accent to-accent2 grid place-items-center text-[13px] font-bold text-white transition-transform duration-500 group-hover:rotate-6">
            A
          </span>
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase">
            Aditi Singla
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href.replace(/\/$/, ""));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-[13.5px] transition-colors ${
                  active ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="/portfolio/Aditi_Singla_Resume.pdf"
            className="px-4 py-2 text-[13px] rounded-lg border border-white/15 text-zinc-100 font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-lg glass"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px bg-zinc-300 transition-all ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} style={{ width: 18 }} />
            <span className={`block h-px bg-zinc-300 transition-all ${open ? "opacity-0" : ""}`} style={{ width: 18 }} />
            <span className={`block h-px bg-zinc-300 transition-all ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} style={{ width: 18 }} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-line overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-zinc-300 hover:bg-white/[0.06] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="/portfolio/Aditi_Singla_Resume.pdf"
                className="block px-4 py-2.5 rounded-xl text-zinc-300 hover:bg-white/[0.06] transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
