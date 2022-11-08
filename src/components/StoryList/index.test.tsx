import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import StoryList from ".";

// set up data to get mocked
const stories = [
  {
    id: "1",
    title: "Story 1",
    description: "This story is about this and that.",
  },
  {
    id: "2",
    title: "Story 2",
    description: "This story is about this and that.",
  },
];

jest.mock("../../hooks/useGetAllStories", () => {
  return {
    __esModule: true,
    default: () => {
      return stories;
    },
  };
});

const mountComponent = () => {
  return render(<StoryList />);
};

describe("StoryList", () => {
  mountComponent();
  it("returns stories", () => {
    expect(
      screen.getByRole("heading", { name: `${stories[0].title}` })
    ).toBeInTheDocument();
  });
});
