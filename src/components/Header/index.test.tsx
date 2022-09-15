import React from "react";

import { render } from "@testing-library/react";
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
    const { getByText } = mountComponent({ title });

    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    const subtitle = "Subtitle of Header";

    const { getByText } = mountComponent({ subtitle, title });

    expect(getByText(subtitle)).toBeInTheDocument();
  });
});
