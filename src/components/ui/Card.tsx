import React from "react";
import Image from "next/image";

interface CardProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
  className?: string;
}

export default function Card({
  icon,
  image,
  title,
  description,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${className}`}
    >
      {image ? (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : icon ? (
        <div className="text-primary pt-6 mb-4 flex justify-center">{icon}</div>
      ) : null}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
