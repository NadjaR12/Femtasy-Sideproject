import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";

import "./styles.scss";

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
    <div className="PageSkeleton">
      <NavBar />
      <Header title={title} subtitle={subtitle} className={className} />
      {children}
    </div>
  );
}
