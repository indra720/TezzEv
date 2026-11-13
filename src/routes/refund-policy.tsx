import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
  head: () => ({
    meta: [{ title: "Refund Policy — TezzEV" }],
  }),
});

function RefundPolicyPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      <PageHeader
        breadcrumb="Refund Policy"
        title="Refund Policy"
        subtitle="Quick, transparent security deposit returns with zero deduction surprises."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-4xl mx-auto">
            <div className="clean-card p-6 sm:p-10 text-sm text-slate-700 space-y-6 leading-relaxed">
              <p>
                At TezzEV, we believe your deposit is your money. Here is our straightforward refund process.
              </p>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  1. Security Deposit Refund
                </h3>
                <p>
                  When you return your scooter and battery at any Tezz Hub, our hub team does a quick 5-minute check. Your full refundable deposit is credited straight to your bank account within {TEZZ_CONFIG.placeholders.depositRefundHours}.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  2. Unused Wallet Balance
                </h3>
                <p>
                  Any unused prepaid balance in your rider wallet is 100% refundable to your UPI or bank account whenever you pause or end your subscription.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  3. Pre-Launch Waitlist Advance
                </h3>
                <p>
                  Any pre-registration or reservation tokens booked before physical vehicle delivery are 100% refundable at any time with no cancellation charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
