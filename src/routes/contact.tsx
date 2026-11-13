import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RegistrationForm } from "@/components/RegistrationForm";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | SoraRider" },
      {
        name: "description",
        content: "Reach the SoraRider team. Support 24/7 across all our cities.",
      },
    ],
  }),
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you | on the road"
        subtitle="Register as a rider or ask us anything — we usually reply within a few hours."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Reach Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              We're here <span className="text-brand">24/7</span>
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Pick the channel that suits you — every message is answered by a real human.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: Phone, label: "Phone", value: "+91 9950455461" },
                { Icon: Mail, label: "Email", value: "support@SoraRider.com" },
                {
                  Icon: MapPin,
                  label: "Headquarters",
                  value: "Sora Ev Pvt Ltd,B-18, 2nd Floor, Shiv Marg, Bani Park, Jaipur, Rajasthan 302015, India",
                },
                { Icon: Clock, label: "Support Hours", value: "Monday to Sunday, 9:00 AM to 7:00 PM" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-linear-to-br from-brand to-brand/70 text-white shadow-md shadow-brand/30">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-bold text-ink">{c.value}</div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Follow the ride
              </div>
              <div className="mt-3 flex gap-3">
                {[Instagram, Twitter, Facebook, MessageCircle].map((Ic, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-ink transition hover:-translate-y-1 hover:border-brand hover:text-brand hover:shadow-lg"
                  >
                    <Ic className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="SoraRider HQ"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.75%2C26.85%2C75.85%2C26.95&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </>
  );
}
