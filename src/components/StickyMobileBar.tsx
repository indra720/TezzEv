import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg flex items-center gap-2">
      <a
        href={TEZZ_CONFIG.launch.socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="h-11 px-4 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 shrink-0"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-4 w-4 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/waitlist"
        className="btn-primary flex-1 h-11 text-sm uppercase tracking-wider py-0 justify-center"
      >
        <span className="text-[12px]">Join Waitlist</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
