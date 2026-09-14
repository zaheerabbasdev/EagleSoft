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
    "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#03a9f4] hover:bg-[#0288d1] text-white shadow-sm hover:shadow focus-visible:ring-[#03a9f4]",
    secondary:
      "bg-white text-[#0288d1] border border-[#0288d1] hover:bg-[#f0f9ff] hover:text-[#0288d1] focus-visible:ring-[#0288d1]",
    accent:
      "bg-[#448aff] hover:bg-[#0288d1] text-white shadow-sm hover:shadow focus-visible:ring-[#448aff]",
    "outline-white":
      "bg-transparent text-white border border-white/80 hover:bg-white/10 hover:border-white focus-visible:ring-white",
    ghost:
      "bg-transparent text-[#0288d1] hover:bg-[#b3e5fc]/30 focus-visible:ring-[#0288d1]",
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
