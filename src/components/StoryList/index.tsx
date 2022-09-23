import React from "react";

import Header from "../Header";

import useGetAllStories from "../../api";

export default function StoryList() {
  const stories = useGetAllStories();

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      {stories.map((story) => {
        return (
          <>
            <h3>{story.title}</h3>
            <div>{story.description}</div>
          </>
        );
      })}
    </div>
  );
}
