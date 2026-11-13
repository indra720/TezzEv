import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [{ title: "Terms & Conditions — TezzEV" }],
  }),
});

function TermsPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      <PageHeader
        breadcrumb="Terms & Conditions"
        title="Terms & Conditions"
        subtitle="Simple rules for renting and riding your TezzEV electric scooter."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-4xl mx-auto">
            <div className="clean-card p-6 sm:p-10 text-sm text-slate-700 space-y-6 leading-relaxed">
              <p>
                Welcome to TezzEV. By reserving, renting, or riding any TezzEV electric scooter, you
                agree to these simple terms.
              </p>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  1. Scooter Ownership
                </h3>
                <p>
                  All electric scooters, swappable battery packs, and charging accessories belong to{" "}
                  {TEZZ_CONFIG.brand.companyName}. You get a commercial rental license to ride and
                  earn.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  2. Who Can Rent
                </h3>
                <p>
                  Riders must be at least 18 years old and have a valid Indian Driving Licence (DL)
                  along with Aadhaar card.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  3. Daily & Weekly Rent
                </h3>
                <p>
                  Rental payments are made through your digital rider wallet or online payment.
                  Transparent rates with no hidden charges.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#081330] mb-2">
                  4. Safe Riding & Traffic Rules
                </h3>
                <p>
                  Always wear a helmet and follow traffic rules. Do not hand over the scooter to
                  unauthorized riders. Free roadside help is available 24/7 if you ever get stuck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
