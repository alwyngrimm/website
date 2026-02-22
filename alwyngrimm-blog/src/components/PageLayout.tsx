"use client";
import Link from "next/link";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto page-fade">
      {/* Back nav */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm tracking-widest mb-12 group"
        style={{ color: "#caa94f" }}
      >
        <span
          className="transition-transform group-hover:-translate-x-1"
          style={{ display: "inline-block" }}
        >
          ←
        </span>
        <span className="group-hover:text-white transition-colors">ALWYN GRIMM</span>
      </Link>

      <h1
        className="text-5xl md:text-6xl font-bold tracking-widest mb-2"
        style={{
          color: "#f3e6c8",
          textShadow: "0 0 25px rgba(255,215,120,0.25)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {title.toUpperCase()}
      </h1>

      {/* Decorative line */}
      <div
        className="my-8 h-px w-24"
        style={{
          background: "linear-gradient(to right, #caa94f, transparent)",
        }}
      />

      <div className="prose-dark">{children}</div>
    </main>
  );
}
