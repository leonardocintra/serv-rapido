import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-primary/5 to-secondary/5",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
