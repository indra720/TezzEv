import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/our-bike")({
  beforeLoad: () => {
    throw redirect({ to: "/our-scooter" });
  },
});
