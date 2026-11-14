import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Phone, Mail, Clock, MapPin, Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { toast } from "sonner";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — TezzEV Jaipur Hub" },
      {
        name: "description",
        content: "Get in touch with TezzEV for electric scooter rentals, support, and waitlist inquiries in Jaipur.",
      },
    ],
  }),
});

function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      toast.error("Please enter your name and mobile number.");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    toast.success("Message Transmitted!", {
      description: `Thank you, ${name}. Our Jaipur fleet desk will call you back shortly.`,
    });
    setName("");
    setMobile("");
    setMessage("");
  };

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="Contact"
        title="Contact TezzEV"
        subtitle="Have questions about vehicle booking, battery swapping, or waitlist? We're here to help."
      />

      {/* 2. Contact Cards & Form (Soft Slate Background) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Cols: Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Phone */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1647E8] flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Phone Helpline</div>
                  <a href={`tel:${TEZZ_CONFIG.launch.phone}`} className="font-heading font-bold text-base text-[#0B1B4D] hover:text-[#1647E8] block mt-0.5">
                    {TEZZ_CONFIG.launch.phone}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Support & 24/7 Breakdown</div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1647E8] flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Email Us</div>
                  <a href={`mailto:${TEZZ_CONFIG.launch.email}`} className="font-heading font-bold text-base text-[#0B1B4D] hover:text-[#1647E8] block mt-0.5">
                    {TEZZ_CONFIG.launch.email}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">General & business inquiries</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">WhatsApp Chat</div>
                  <a
                    href={TEZZ_CONFIG.launch.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading font-bold text-base text-emerald-700 hover:underline block mt-0.5"
                  >
                    Chat on WhatsApp
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Fast message response</div>
                </div>
              </div>

              {/* Address & Hours */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed">
                    <strong>Jaipur Hub:</strong> {TEZZ_CONFIG.launch.headquarters}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed">
                    <strong>Support Hours:</strong> {TEZZ_CONFIG.launch.supportHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 sm:p-8">
                <h3 className="font-heading font-bold text-xl text-[#0B1B4D] mb-2">
                  Send us a message
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details and we will get back to you within 2 to 4 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amit Sharma"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message or Question
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your question here..."
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 text-sm justify-center disabled:opacity-60"
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
