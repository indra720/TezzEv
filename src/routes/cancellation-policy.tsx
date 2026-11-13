import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cancellation-policy")({
  component: CancellationPolicy,
});

function CancellationPolicy() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHeader title="Cancellation Policy" subtitle="How cancellations work for rider registration and vehicle allocation." />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12 prose prose-sm sm:prose-base text-muted-foreground">
        <h3 className="text-xl font-medium text-ink">1. Cancelling Rider Registration</h3>
        <p>You may cancel your rider registration at any stage before completing the token recharge step by simply not proceeding further — no charges apply until payment is made.</p>

        <h3 className="text-xl font-medium text-ink mt-8">2. Cancellation After Payment</h3>
        <p>Once a token recharge is paid and a rider ID is issued, cancellation is subject to our Refund Policy. Contact support within 7 days if you wish to cancel and request a refund.</p>

        <h3 className="text-xl font-medium text-ink mt-8">3. Vehicle Allocation Cancellation</h3>
        <p>If SORA RIDER is unable to allocate a vehicle within the promised timeframe after registration, you may cancel and request a full refund of your token recharge.</p>

        <h3 className="text-xl font-medium text-ink mt-8">4. Account Suspension</h3>
        <p>SORA RIDER reserves the right to cancel or suspend a rider account found to be in violation of our Terms & Conditions, including fraudulent KYC documents or misuse of the referral program.</p>

        <h3 className="text-xl font-medium text-ink mt-8">5. How to Cancel</h3>
        <p>To cancel your registration or request account closure, email support@sorarider.com with your rider ID and mobile number.</p>

        <h3 className="text-xl font-medium text-ink mt-8">6. Contact Us</h3>
        <p>For any cancellation-related questions, reach us at support@sorarider.com or call +91 12345 67890.</p>
      </div>
    </div>
  );
}
