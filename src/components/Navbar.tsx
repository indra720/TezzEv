import { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  ArrowRight,
  User,
  ChevronDown,
  Zap,
  Battery,
  Sparkles,
  MapPin,
} from "lucide-react";
import newHeadLogo from "@/TezzEv/NewHeadlogo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/our-scooter", label: "Our Scooter" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/savings", label: "Savings" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Scroll to top and close menus on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMobileMenuOpen(false);
    setExploreOpen(false);
  }, [currentPath]);

  // Click outside to close explore menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xs">
      {/* Container with exact 50px desktop padding and fluid responsive layout */}
      <div className="w-full max-w-[1680px] mx-auto px-3.5 sm:px-8 lg:px-[50px]">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo - Directly from src/TezzEv/NewHeadlogo.png */}
          <div className="shrink-0 flex items-center">
            <Link
              to="/"
              className="inline-flex items-center select-none group transition-transform duration-150 hover:scale-[1.01]"
              aria-label="TezzEV - Go Green Go Far"
            >
              <img
                src={newHeadLogo}
                alt="TezzEV - Go Green Go Far"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain block bg-white max-w-[145px] sm:max-w-[200px] md:max-w-none"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Only on lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? "text-[#1647E8] bg-blue-50 font-extrabold shadow-xs"
                      : "text-[#3A4668] hover:text-[#1647E8] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Quick Explore Dropdown */}
            <div className="relative" ref={exploreRef}>
              <button
                type="button"
                onClick={() => setExploreOpen(!exploreOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  exploreOpen
                    ? "text-[#1647E8] bg-blue-50"
                    : "text-[#3A4668] hover:text-[#1647E8] hover:bg-slate-50"
                }`}
                aria-expanded={exploreOpen}
              >
                <span>Explore</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {exploreOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white p-4 shadow-2xl border border-blue-100 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <Link
                      to="/register"
                      onClick={() => setExploreOpen(false)}
                      className="p-3 rounded-xl hover:bg-blue-50 transition-colors flex flex-col gap-1 border border-slate-100"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B4D]">
                        <Zap className="h-3.5 w-3.5 text-[#1647E8]" />
                        <span>Pre-Register</span>
                      </div>
                      <span className="text-[11px] text-slate-500">
                        Fast 2-min rider onboarding
                      </span>
                    </Link>

                    <Link
                      to="/guess-rent"
                      onClick={() => setExploreOpen(false)}
                      className="p-3 rounded-xl hover:bg-emerald-50 transition-colors flex flex-col gap-1 border border-slate-100"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B4D]">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Guess Rent</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Interactive launch game</span>
                    </Link>

                    <Link
                      to="/blog"
                      onClick={() => setExploreOpen(false)}
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex flex-col gap-1 border border-slate-100"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B4D]">
                        <Battery className="h-3.5 w-3.5 text-[#1647E8]" />
                        <span>Rider Blog</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Savings & battery tips</span>
                    </Link>

                    <Link
                      to="/rider-dashboard"
                      onClick={() => setExploreOpen(false)}
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex flex-col gap-1 border border-slate-100"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B4D]">
                        <User className="h-3.5 w-3.5 text-[#1647E8]" />
                        <span>Rider Cockpit</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Wallet, streak & SOS</span>
                    </Link>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Launching in Jaipur</span>
                    </span>
                    <Link
                      to="/waitlist"
                      onClick={() => setExploreOpen(false)}
                      className="text-[#1647E8] font-bold hover:underline"
                    >
                      Join Waitlist →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Action Buttons (Only on lg: 1024px+) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/rider-dashboard"
              className="btn-outline-blue text-xs sm:text-sm py-2 px-4 whitespace-nowrap"
            >
              <User className="h-4 w-4" />
              <span>Rider Login</span>
            </Link>

            <Link
              to="/waitlist"
              className="btn-primary text-xs sm:text-sm py-1 px-5 whitespace-nowrap"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Tablet & Mobile Right Bar (< lg: below 1024px) */}
          {/* Exactly ONE clean CTA button + hamburger menu. Strictly prevented from clipping or overflowing */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-3 shrink-0">
            <Link
              to="/waitlist"
              className="btn-primary text-[11px] sm:text-sm py-1.5 sm:py-2 px-2.5 sm:px-4.5 whitespace-nowrap shrink-0 rounded-full shadow-xs"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="h-3.5 w-3.5 hidden sm:inline-block" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8.5 w-8.5 sm:h-10 sm:w-10 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              ) : (
                <Menu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Thin Brand-Gradient Bottom Border Accent */}
      <div className="h-[2.5px] w-full bg-brand-gradient" />

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 sm:px-8 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? "text-[#1647E8] bg-blue-50 font-extrabold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Features in Mobile Drawer */}
          <div className="grid grid-cols-3 gap-2 pb-4 mb-4 border-b border-slate-100 text-center">
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors text-xs font-bold text-slate-700"
            >
              <Zap className="h-4 w-4 mx-auto mb-1 text-[#1647E8]" />
              <span>Register</span>
            </Link>
            <Link
              to="/guess-rent"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors text-xs font-bold text-slate-700"
            >
              <Sparkles className="h-4 w-4 mx-auto mb-1 text-emerald-600" />
              <span>Guess Rent</span>
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-xs font-bold text-slate-700"
            >
              <Battery className="h-4 w-4 mx-auto mb-1 text-[#1647E8]" />
              <span>Blog</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              to="/rider-dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-outline-blue flex-1 justify-center text-sm py-2.5"
            >
              <User className="h-4 w-4" />
              <span>Rider Login / Cockpit</span>
            </Link>
            <Link
              to="/waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary flex-1 justify-center text-sm py-2.5"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
