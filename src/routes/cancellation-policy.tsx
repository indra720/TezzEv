import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cancellation-policy")({
  component: CancellationPolicyPage,
  head: () => ({
    meta: [{ title: "Cancellation Policy — TezzEV" }],
  }),
});

function CancellationPolicyPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      <PageHeader
        breadcrumb="Cancellation Policy"
        title="Cancellation Policy"
        subtitle="Zero lock-in. Cancel or pause your rental anytime with no penalty."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-4xl mx-auto">
            <div className="clean-card p-6 sm:p-10 text-sm text-slate-700 space-y-6 leading-relaxed">
              <p>
                We know delivery work can change. TezzEV has zero long lock-ins so you are always in control.
              </p>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  1. Cancel Anytime
                </h3>
                <p>
                  Riders can surrender or pause their rental scooter at any authorized Tezz Hub with simple 24-hour advance notice. There are zero penalty deductions.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  2. Pre-Booking Cancellation
                </h3>
                <p>
                  If you pre-register and later decide not to take delivery, you can cancel your reservation before handover for an immediate 100% full refund.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  3. Temporary Pauses for Holidays
                </h3>
                <p>
                  Going to your hometown for a festival or vacation? Park your scooter safely at our hub and pause your daily/weekly rent so you never pay when you are not riding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
