"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-text text-background hover:bg-text-secondary",
    secondary: "bg-accent text-text hover:bg-accent/80",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
