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
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-3 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  }[size];

  const variantClasses = {
    // Blue gradient (main call to action)
    primary:
      "bg-blue-grad text-white shadow-lg shadow-[#0288d1]/30 hover:shadow-[#0288d1]/45 hover:-translate-y-0.5 focus-visible:ring-[#03a9f4]",
    // White with soft border
    secondary:
      "bg-white text-[#0b1220] border border-[#dbe7f5] hover:border-[#03a9f4] hover:text-[#0288d1] shadow-sm focus-visible:ring-[#0288d1]",
    // White button for dark or gradient bands
    accent:
      "bg-white text-[#0277bd] hover:bg-[#f0f9ff] shadow-lg shadow-black/15 hover:-translate-y-0.5 focus-visible:ring-white",
    "outline-white":
      "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white focus-visible:ring-white",
    ghost:
      "bg-transparent text-[#0288d1] hover:bg-[#e1f5fe] focus-visible:ring-[#0288d1]",
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
