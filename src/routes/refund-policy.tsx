import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHeader title="Refund Policy" subtitle="Details on how refunds are handled for token recharges and payments." />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12 prose prose-sm sm:prose-base text-muted-foreground">
        <h3 className="text-xl font-medium text-ink">1. Token Recharge Payments</h3>
        <p>Token recharge payments made during rider registration are used to activate your rider account and vehicle allocation. Once a token recharge is successfully processed and a rider ID is issued, it is generally non-refundable.</p>

        <h3 className="text-xl font-medium text-ink mt-8">2. Eligible Refund Cases</h3>
        <p>Refunds may be considered in cases of duplicate payment, a technical error resulting in a failed registration, or where SORA RIDER is unable to allocate a vehicle after payment has been received.</p>

        <h3 className="text-xl font-medium text-ink mt-8">3. How to Request a Refund</h3>
        <p>To request a refund, contact our support team at support@sorarider.com with your rider ID, payment receipt number, and reason for the request within 7 days of the transaction.</p>

        <h3 className="text-xl font-medium text-ink mt-8">4. Processing Time</h3>
        <p>Approved refunds are processed back to the original payment method within 7–14 business days, subject to your bank's or payment provider's processing timelines.</p>

        <h3 className="text-xl font-medium text-ink mt-8">5. Non-Refundable Situations</h3>
        <p>Refunds will not be issued for recharges already utilized, accounts suspended due to violation of our Terms & Conditions, or requests made after the eligibility window.</p>

        <h3 className="text-xl font-medium text-ink mt-8">6. Contact Us</h3>
        <p>For any refund-related queries, reach us at support@sorarider.com or call +91 12345 67890.</p>
      </div>
    </div>
  );
}
