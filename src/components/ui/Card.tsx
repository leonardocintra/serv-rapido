import React from "react";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function Card({
  icon,
  title,
  description,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center ${className}`}
    >
      {icon && (
        <div className="text-primary mb-4 flex justify-center">{icon}</div>
      )}
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
