import Link from "next/link";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "outline-white" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonAsLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 select-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  }[size];

  const variantClasses = {
    // Solid brand pill
    primary:
      "bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-lg shadow-[#7c3aed]/30 hover:-translate-y-0.5 focus-visible:ring-[#7c3aed]",
    // Outline pill on light backgrounds
    secondary:
      "bg-white text-[#0f172a] border border-[#dddbe8] hover:border-[#7c3aed] hover:text-[#6d28d9] focus-visible:ring-[#7c3aed]",
    // Solid white pill for dark bands
    accent:
      "bg-white text-[#4c1d95] hover:bg-[#f3effe] shadow-lg shadow-black/20 hover:-translate-y-0.5 focus-visible:ring-white",
    // Outline pill for dark bands
    "outline-white":
      "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70 focus-visible:ring-white",
    ghost:
      "bg-transparent text-[#6d28d9] hover:bg-[#f3effe] focus-visible:ring-[#7c3aed]",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props as ButtonAsLinkProps;
    if (external) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {renderContent()}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonAsButtonProps)}>
      {renderContent()}
    </button>
  );
}
