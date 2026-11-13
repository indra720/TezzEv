import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHeader title="Terms & Conditions" subtitle="Please read these terms carefully before using SORA RIDER services." />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12 prose prose-sm sm:prose-base text-muted-foreground">
        <h3 className="text-xl font-medium text-ink">1. Acceptance of Terms</h3>
        <p>By accessing or using the SORA RIDER website, mobile application, or bike rental services ("Services"), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our Services.</p>

        <h3 className="text-xl font-medium text-ink mt-8">2. Eligibility</h3>
        <p>You must be at least 18 years old and hold a valid driving license to rent a vehicle or register as a SORA RIDER rider. Riders must provide accurate KYC documents (PAN, Aadhar, Driving Licence) during registration.</p>

        <h3 className="text-xl font-medium text-ink mt-8">3. Rider Registration</h3>
        <p>Rider registration requires accurate personal, bank, and vehicle details. SORA RIDER reserves the right to verify submitted information and reject or suspend any registration found to be fraudulent or incomplete.</p>

        <h3 className="text-xl font-medium text-ink mt-8">4. Token Recharge & Wallet</h3>
        <p>Token recharge amounts are non-transferable between riders. Wallet balances reflect successful recharges and are used solely for platform-related transactions as described at the time of purchase.</p>

        <h3 className="text-xl font-medium text-ink mt-8">5. Referral Program</h3>
        <p>Referral rewards are credited only after the referred rider successfully completes registration and any required verification. SORA RIDER may modify or discontinue the referral program at any time.</p>

        <h3 className="text-xl font-medium text-ink mt-8">6. Vehicle Use & Responsibility</h3>
        <p>Riders are responsible for the safe operation of any rented vehicle, compliance with traffic laws, and any damage or loss incurred during the rental period.</p>

        <h3 className="text-xl font-medium text-ink mt-8">7. Limitation of Liability</h3>
        <p>SORA RIDER is not liable for indirect, incidental, or consequential damages arising from the use of our Services, to the maximum extent permitted by law.</p>

        <h3 className="text-xl font-medium text-ink mt-8">8. Changes to Terms</h3>
        <p>We may update these Terms & Conditions from time to time. Continued use of our Services after changes are posted constitutes acceptance of the revised terms.</p>

        <h3 className="text-xl font-medium text-ink mt-8">9. Contact Us</h3>
        <p>For questions about these Terms & Conditions, contact us at support@sorarider.com.</p>
      </div>
    </div>
  );
}
