import { Link } from "@tanstack/react-router";
import { FaInstagram, FaWhatsapp, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { TezzLogo } from "./TezzLogo";
import { TEZZ_CONFIG } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative bg-deep-gradient text-white overflow-hidden">
      {/* Brand-Gradient Top Border */}
      <div className="h-[3px] w-full bg-brand-gradient" />

      {/* Background Pattern & Glow */}
      <div className="pointer-events-none absolute inset-0 pattern-dots-dark opacity-20" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px] pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <TezzLogo size="lg" variant="dark" />
            <p className="text-sm text-slate-300 max-w-sm mt-3 leading-relaxed">
              {TEZZ_CONFIG.brand.subtext} Simple, affordable electric scooter rentals for India's delivery riders and city commuters.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-bold">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{TEZZ_CONFIG.placeholders.targetLaunch}</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={TEZZ_CONFIG.launch.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-gradient flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href={TEZZ_CONFIG.launch.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-gradient flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href={TEZZ_CONFIG.launch.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-gradient flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="YouTube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
              <a
                href={TEZZ_CONFIG.launch.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-gradient flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="Twitter X"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#19C8FF]">
              Explore TezzEV
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#19C8FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#19C8FF] transition-colors">
                  About TezzEV
                </Link>
              </li>
              <li>
                <Link to="/our-scooter" className="hover:text-[#19C8FF] transition-colors">
                  The Scooter Specs
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#19C8FF] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#19C8FF] transition-colors">
                  Rental Plans
                </Link>
              </li>
              <li>
                <Link to="/savings" className="hover:text-[#19C8FF] transition-colors">
                  Savings Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Rider Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#19C8FF]">
              Rider Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/waitlist" className="hover:text-[#19C8FF] transition-colors">
                  Join VIP Waitlist
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#19C8FF] transition-colors">
                  Rider Pre-Registration
                </Link>
              </li>
              <li>
                <Link to="/rider-dashboard" className="hover:text-[#19C8FF] transition-colors">
                  Rider Cockpit
                </Link>
              </li>
              <li>
                <Link to="/guess-rent" className="hover:text-[#19C8FF] transition-colors">
                  Guess Daily Rent Game
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#19C8FF] transition-colors">
                  Rider Guides & Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#19C8FF] transition-colors">
                  FAQs & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / HQ */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#19C8FF]">
              Jaipur Fleet Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#19C8FF] shrink-0 mt-0.5" />
                <span>{TEZZ_CONFIG.launch.hubAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#19C8FF] shrink-0" />
                <a href={`tel:${TEZZ_CONFIG.launch.phone}`} className="hover:text-[#19C8FF]">
                  {TEZZ_CONFIG.launch.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#19C8FF] shrink-0" />
                <a href={`mailto:${TEZZ_CONFIG.launch.email}`} className="hover:text-[#19C8FF]">
                  {TEZZ_CONFIG.launch.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/contact" className="btn-primary text-xs py-2 px-4 shadow-none">
                Contact Fleet Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} {TEZZ_CONFIG.brand.companyName}. Go Green Go Far.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/privacy" className="hover:text-[#19C8FF] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#19C8FF] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-[#19C8FF] transition-colors">
              Refund Policy
            </Link>
            <span>•</span>
            <Link to="/cancellation-policy" className="hover:text-[#19C8FF] transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
