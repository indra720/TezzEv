import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, UserPlus, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/newchatlogo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/our-bike", label: "Our Bike" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-2xl rounded-bl-2xl rounded-br-2xl">
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="SoraRider"
            className="h-20 w-24 object-contain border-none "
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{
                className: "text-brand font-semibold",
              }}
              className="text-md font-bold text-gray-600 transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            to="/register"
            className="flex items-center gap-2 rounded-full border border-brand px-6 py-2.5 text-brand font-semibold transition-all hover:bg-[#ff7221] hover:text-white hover:-translate-y-0.5"
          >
            <UserPlus size={18} />
            Register
          </Link>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-white font-semibold shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30"
          >
            <Smartphone size={18} />
            Get App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden rounded-md p-2 border"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t bg-white xl:hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                 className="flex items-center gap-2 rounded-full border border-brand px-6 py-2.5 text-brand
         font-semibold transition-all hover:bg-[#ff7221] hover:text-white hover:-translate-y-0.5"
              >
                <UserPlus size={16} />
                Register
              </Link>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md bg-brand py-2 text-white font-medium"
              >
                
                Get App
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}