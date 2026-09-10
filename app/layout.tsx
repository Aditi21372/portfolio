import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditi Singla | AI/ML Engineer",
  description:
    "Portfolio of Aditi Singla: AI/ML engineer building RAG systems, LLM agents, and data pipelines. IIIT-Delhi, Integrated B.Tech + M.Tech CSE.",
  metadataBase: new URL("https://aditi21372.github.io/portfolio/"),
  openGraph: {
    title: "Aditi Singla | AI/ML Engineer",
    description:
      "RAG systems, LLM agents, and full-stack engineering. IIIT-Delhi. Try the projects live.",
    url: "https://aditi21372.github.io/portfolio/",
    siteName: "Aditi Singla",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${grotesk.variable} font-sans bg-base text-zinc-200 antialiased min-h-screen`}
      >
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
