import React from "react";

import Header from "../Header";
import StoryCard from "../StoryCard";

import useGetAllStories from "../../hooks/useGetAllStories";

import "./styles.scss";

export default function StoryList() {
  const stories = useGetAllStories();

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      <div className="StoryList">
        {stories.map((story) => {
          return (
            <div key={story.id}>
              <StoryCard story={story} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
