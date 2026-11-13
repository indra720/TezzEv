import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy Policy — TezzEV" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      <PageHeader
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        subtitle="How we collect, protect, and handle your rider and vehicle telemetry data."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-4xl mx-auto">
            <div className="clean-card p-6 sm:p-10 text-sm text-slate-700 space-y-5 leading-relaxed">
            <p>
              TezzEV Mobility Pvt Ltd ("TezzEV") is committed to protecting your privacy. This policy outlines how we handle personal identity and vehicle telemetry data.
            </p>

            <h3 className="font-heading font-bold text-lg text-[#081330] pt-2">
              1. Information We Collect
            </h3>
            <p>
              We collect identity information (Name, Mobile, Aadhaar, PAN, Driving Licence), banking details for refundable deposit return, and basic vehicle telemetry (battery levels, vehicle location) to provide 15-minute roadside breakdown help.
            </p>

            <h3 className="font-heading font-bold text-lg text-[#081330] pt-2">
              2. Data Protection
            </h3>
            <p>
              All submitted documents and information are stored securely on protected cloud servers following Indian data security regulations.
            </p>

            <h3 className="font-heading font-bold text-lg text-[#081330] pt-2">
              3. No Third-Party Selling
            </h3>
            <p>
              We never sell or rent your personal contact information to third-party telemarketers or advertisers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
