import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";

interface IProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageSkeleton({
  title,
  subtitle,
  className,
  children,
}: IProps) {
  return (
    <div>
      <NavBar />
      <Header title={title} subtitle={subtitle} className={className} />
      {children}
    </div>
  );
}
