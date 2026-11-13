import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { RiderRegistrationForm } from "@/components/RiderRegistrationForm";

export const Route = createFileRoute("/register")({
  component: Register,
  head: () => ({
    meta: [
      { title: "Rider Registration | SoraRider" },
      { name: "description", content: "Register as a rider to start earning with SoraRider." },
    ],
  }),
});

function Register() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Rider Registration" subtitle="Fill in your details to get started with SoraRider." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RiderRegistrationForm />
        </div>
      </section>
    </div>
  );
}
