import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/scooter")({
  beforeLoad: () => {
    throw redirect({ to: "/our-scooter" });
  },
});
