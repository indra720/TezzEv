import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {  ChevronRight } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  component: Faqs,
  head: () => ({
    meta: [
      { title: "FAQs — Everything You Need to Know | SoraRider" },
      { name: "description", content: "Answers to common questions about SoraRider rentals, documents, deposits, insurance and support." },
    ],
  }),
});

const faqs = [
  { 
    q: "How much does it cost to rent a bike?", 
    a: "A flat ₹250 per day, plus a refundable security deposit. Maintenance and insurance are included." 
  },
  { 
    q: "What documents do I need to register?", 
    a: "Valid Driving License, Aadhaar Card, PAN Card, Bank Account Details and a passport-size photo." 
  },
  { 
    q: "How long does approval take?", 
    a: "Most riders are approved within 24 hours after document verification." 
  },
  { 
    q: "Who pays for battery/charging?", 
    a: "The rider covers charging costs; everything else is on us." 
  },
  { 
    q: "Is the security deposit refundable?", 
    a: "Yes, the security deposit is fully refundable at the end of your rental, subject to T&C." 
  },
  { 
    q: "Can I cancel my rental?", 
    a: "Yes. See our Cancellation Policy for details on timelines and refunds." 
  },
];

function Faqs() {
  return (
    <div className="bg-background min-h-screen pb-16">
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find quick answers to common questions about your SoraRider rental, documents, and support." 
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 p-6 rounded-3xl bg-card border border-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-brand/10 rounded-full text-brand shrink-0">
              <HelpCircle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">Still have questions?</h3>
              <p className="text-sm text-muted-foreground">
                Our support team is always ready to help. Reach out through our contact page.
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem 
                key={i} 
                value={`i${i}`} 
                className="overflow-hidden rounded-2xl border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md hover:border-brand/20"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-bold text-ink py-5 hover:no-underline flex justify-between items-center group">
                  <span className="group-hover:text-brand transition-colors">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 border-t border-border/40 pt-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}