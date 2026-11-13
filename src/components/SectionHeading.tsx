import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  align = "center",
  underline = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "center" | "left";
  underline?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl ${underline ? "inline-block border-b-4 border-brand pb-1" : ""}`}>
        {children}
      </h2>
    </div>
  );
}