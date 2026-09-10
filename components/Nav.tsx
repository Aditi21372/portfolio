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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold tracking-tight text-zinc-100 flex items-center gap-2.5 group"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent2 grid place-items-center text-[13px] font-bold text-white shadow-md shadow-accent/30 group-hover:scale-105 transition-transform">
            A
          </span>
          <span className="text-[15px]">
            Aditi Singla
            <span className="text-zinc-500 font-normal hidden sm:inline">
              {" "}
              · AI/ML
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href.replace(/\/$/, ""));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-[13.5px] rounded-full transition-colors ${
                  active
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/[0.06]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.55 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
          <a
            href="/portfolio/Aditi_Singla_Resume.pdf"
            className="ml-3 px-4 py-2 text-[13.5px] rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Resume
          </a>
          <a
            href="https://github.com/Aditi21372"
            target="_blank"
            rel="noreferrer"
            className="ml-1 px-4 py-2 text-[13.5px] rounded-full glass text-zinc-200 hover:bg-white/[0.09] transition-colors"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-lg glass"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-4.5 h-px bg-zinc-300 transition-all ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} style={{ width: 18 }} />
            <span className={`block w-4.5 h-px bg-zinc-300 transition-all ${open ? "opacity-0" : ""}`} style={{ width: 18 }} />
            <span className={`block w-4.5 h-px bg-zinc-300 transition-all ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} style={{ width: 18 }} />
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
