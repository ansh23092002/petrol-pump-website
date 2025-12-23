import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 active:scale-95";

  const variantClasses = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70",
    secondary:
      "bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 hover:bg-blue-900/20",
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
