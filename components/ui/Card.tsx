import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-accent p-6 rounded-lg ${className}`}>
      {children}
    </div>
  );
}
