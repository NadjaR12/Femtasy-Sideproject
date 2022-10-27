import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import StoryCard from ".";

const mountComponent = () => {
  return render(
    <StoryCard
      story={{ title: "Story 1", description: "ghjehdjke", story_id: 1 }}
    />
  );
};

describe("StoryCard", () => {
  mountComponent();
  it("returns Story Details passed through props", () => {
    expect(
      screen.getByRole("heading", { name: "Story 1" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("This story is about this and that.")
    ).toBeInTheDocument();
  });
});
