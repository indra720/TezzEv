import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHeader title="Privacy Policy" subtitle="Your privacy matters to us. Here's how we handle your data." />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12 prose prose-sm sm:prose-base text-muted-foreground">
        <h3 className="text-xl font-medium text-ink">1. Information We Collect</h3>
        <p>We collect information you provide during rider registration, including your name, mobile number, email, address, PAN/Aadhar/driving licence details, bank account information, and profile photo, as well as usage data when you interact with our website and mobile app.</p>

        <h3 className="text-xl font-medium text-ink mt-8">2. How We Use Your Information</h3>
        <p>We use your information to verify your identity, process rider registration and token recharges, operate the referral program, provide customer support, and improve our Services.</p>

        <h3 className="text-xl font-medium text-ink mt-8">3. Data Storage & Security</h3>
        <p>Your data is stored on secured servers with restricted access. We use industry standard measures such as encrypted connections (HTTPS) and access controls to protect your information, though no method of transmission is 100% secure.</p>

        <h3 className="text-xl font-medium text-ink mt-8">4. Sharing of Information</h3>
        <p>We do not sell your personal information. We may share data with trusted service providers (e.g. payment processors) strictly to operate our Services, or when required by law.</p>

        <h3 className="text-xl font-medium text-ink mt-8">5. OTP & Communications</h3>
        <p>We use your mobile number to send one-time passwords (OTPs) for login and verification, and may send service-related updates. We do not use your number for unsolicited marketing without consent.</p>

        <h3 className="text-xl font-medium text-ink mt-8">6. Your Rights</h3>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us at the email below, subject to any legal or regulatory retention requirements.</p>

        <h3 className="text-xl font-medium text-ink mt-8">7. Cookies</h3>
        <p>Our website may use cookies and similar technologies to remember preferences and improve your browsing experience.</p>

        <h3 className="text-xl font-medium text-ink mt-8">8. Changes to This Policy</h3>
        <p>We may update this Privacy Policy periodically. Material changes will be reflected on this page with an updated effective date.</p>

        <h3 className="text-xl font-medium text-ink mt-8">9. Contact Us</h3>
        <p>For privacy-related questions, contact us at support@sorarider.com.</p>
      </div>
    </div>
  );
}
