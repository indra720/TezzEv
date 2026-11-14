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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200 py-8 md:py-12">
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-semibold">
              <Link to="/" className="hover:text-[#1647E8] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[#1647E8] font-extrabold">{breadcrumb}</span>
            </nav>

            {/* Title */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1B4D] tracking-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4B587C] font-sans max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Scooter Preview Graphic on Right */}
          <div className="hidden md:block relative w-48 h-32 shrink-0">
            <img
              src={scooterCutout}
              alt="TezzEV Scooter"
              className="w-full h-full object-cover rounded-2xl shadow-md border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
