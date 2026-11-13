import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { OurBike } from "@/components/sections/OurBike";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Requirements } from "@/components/sections/Requirements";
import { ReferBanner } from "@/components/sections/ReferBanner";
import { DownloadApp } from "@/components/sections/DownloadApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <OurBike />
      <HowItWorks />
      <Requirements />
      <ReferBanner />
      <DownloadApp />
    </>
  );
}
