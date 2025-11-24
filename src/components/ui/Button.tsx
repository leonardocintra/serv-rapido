import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark shadow-lg hover:shadow-xl hover:scale-105",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
