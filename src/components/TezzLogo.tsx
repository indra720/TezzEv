import { Link } from "@tanstack/react-router";
import headLogo from "../TezzEv/NewHeadlogo.png";
import footerLogo from "../TezzEv/Tezzev Go Green Logo.png";

interface TezzLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function TezzLogo({
  className = "",
  size = "lg",
  variant = "light",
}: TezzLogoProps) {
  // Fluid responsive sizing: compact on mobile so header controls never clip or overflow
  const heightClasses = {
    sm: "h-6 sm:h-7 md:h-8",
    md: "h-7 sm:h-8 md:h-10",
    lg: "h-7.5 sm:h-9 md:h-12",
  };

  const maxWidthClasses = {
    sm: "max-w-[120px] sm:max-w-[150px] md:max-w-none",
    md: "max-w-[130px] sm:max-w-[170px] md:max-w-none",
    lg: "max-w-[140px] sm:max-w-[190px] md:max-w-none",
  };

  // For header (light navbar): use clean white-background NewHeadlogo.png
  // For footer (dark section): use Tezzev Go Green Logo.png
  const logoSrc = variant === "dark" ? footerLogo : headLogo;

  return (
    <Link
      to="/"
      className={`inline-flex items-center select-none group transition-transform duration-150 hover:scale-[1.01] shrink-0 ${className}`}
      aria-label="TezzEV - Go Green Go Far"
    >
      <img
        src={logoSrc}
        alt="TezzEV - Go Green Go Far"
        className={`${heightClasses[size]} ${maxWidthClasses[size]} w-auto object-contain block`}
      />
    </Link>
  );
}
