import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import scooterCutout from "@/assets/tezzev-light.jpg";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-skywash border-b border-blue-200/80 py-10 md:py-14">
      {/* Soft Background Glow Blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-cyan-400/20 blur-2xl" />
      <div className="pointer-events-none absolute inset-0 pattern-dots opacity-25" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-[#4B587C] mb-2 font-semibold">
              <Link to="/" className="hover:text-blue-700 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-blue-700 font-extrabold">{breadcrumb}</span>
            </nav>

            {/* Title */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1B4D] tracking-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#3A4668] font-sans max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Faint Scooter Preview Graphic on Right */}
          <div className="hidden md:block relative w-48 h-32 opacity-95 shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/25 to-cyan-400/20 blur-sm" />
            <img
              src={scooterCutout}
              alt="TezzEV Scooter"
              className="relative w-full h-full object-cover rounded-2xl shadow-lg border border-blue-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
