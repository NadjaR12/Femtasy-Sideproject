import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from ".";

interface IProps {
  className?: string;
  title: string;
  subtitle?: string;
}
const mountComponent = ({ title, subtitle, className }: IProps) => {
  return render(
    <Header title={title} subtitle={subtitle} className={className} />
  );
};

describe("Header", () => {
  const title = "Title of Header";

  it("renders the title", () => {
    mountComponent({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  // context("has a subtitle passed", () => {
  it("renders the subtitle", () => {
    const subtitle = "Subtitle of Header";

    mountComponent({ subtitle, title });

    expect(
      screen.getByRole("heading", { name: "Subtitle of Header" })
    ).toBeInTheDocument();
  });
  // });

  // context("has no subtitle passed", () => {
  it("renders no subtitle", () => {
    mountComponent({ title });

    expect(
      screen.queryByRole("heading", { name: "Subtitle of Header" })
    ).not.toBeInTheDocument();
  });
  // });
});
