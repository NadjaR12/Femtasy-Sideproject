import React from "react";

interface IProps {
  className?: string;
  title: string;
  subtitle?: string;
}

export default function Header({ className, title, subtitle }: IProps) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}
