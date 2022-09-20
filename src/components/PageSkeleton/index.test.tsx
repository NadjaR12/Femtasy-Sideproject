import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PageSkeleton from ".";
import Header from "../Header";
import StoryList from "../StoryList";

interface IProps {
  className?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}
const mountComponent = ({ title, subtitle, className, children }: IProps) => {
  return render(
    <PageSkeleton
      title={title}
      subtitle={subtitle}
      className={className}
      children={children}
    />
  );
};

describe("PageSkeleton", () => {
  const title = "Title Test";
  const subtitle = "Subtitle Test";
  const children = <StoryList />;

  it("renders Header with title and subtitle", () => {
    mountComponent({ title, subtitle, children });

    expect(
      screen.getByRole("heading", { name: "Title Test" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Subtitle Test" })
    ).toBeInTheDocument();
  });

  it("renders StoryList as a child of PageSkeleton", () => {
    mountComponent({ title, subtitle, children });

    expect(
      screen.getByRole("heading", { name: "Femtasy Audios" })
    ).toBeInTheDocument();
  });
});
