import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  breadcrumb,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumb?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary text-white">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-6  sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-5 flex items-center gap-1.5 text-xs font-medium text-white/60">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-brand">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">{breadcrumb ?? title}</span>
        </nav>

        {eyebrow && (
          <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand">
            {eyebrow}
          </span>
        )}
        <h1
          className={`${eyebrow ? "mt-4" : ""} max-w-3xl text-4xl text-white  leading-[1.05] tracking-tight `}
        >
          {title.includes("|") ? (
            <>
              {title.split("|")[0]}
              <span className="text-brand">{
              title.split("|")[1]}</span>
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      {/* Bottom fade to page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background/0" />
    </section>
  );
}
