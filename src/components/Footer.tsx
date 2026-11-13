import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Smartphone } from "lucide-react";
import logo from "../assets/newchatlogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className=" ">
          <Link to="/">
            <img src={logo} alt="SoraRider" className="h-20 w-auto object-contain rounded-2xl" />
          </Link>
          <p className="mt-4 text-sm text-white/70">
            SoraRider provides affordable electric bike rentals to help riders earn more and ride
            smart.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="https://www.facebook.com/people/Sora-Rider/61592732654426/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/sorariderofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm text-white font-semibold shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 hover:-translate-y-0.5"
            >
              <Smartphone size={16} />
              Get App
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Bike", "/our-bike"],
              ["How It Works", "/how-it-works"],
              ["Pricing", "/pricing"],
              ["Blog", "/blog"],
              ["FAQs", "/faqs"],
              ["Contact Us", "/contact"],
            ].map(([l, to]) => (
              <li key={l}>
                <Link to={to} className="transition hover:text-brand">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">
            Information
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link to="/terms" className="hover:text-brand">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-brand">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-brand">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/cancellation-policy" className="hover:text-brand">
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" />
              <a href="tel:+919876543210" className="hover:text-brand">
                +91 9950455461
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" />
              <a href="mailto:support@sorarider.com" className="hover:text-brand">
                support@sorarider.com
              </a>
            </li>
            <li className=" flex items-start gap-2">
              <MapPin className="h-4 w-4 text-brand mt-0.5 shrink-0" />
              Sora Ev Pvt Ltd,B-18, 2nd Floor, Shiv Marg, Bani Park, Jaipur, Rajasthan 302015
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SoraRider. All Rights Reserved.</p>
          <p>
            Designed with <span className="text-brand">♥</span> for our riders.
          </p>
        </div>
      </div>
    </footer>
  );
}
