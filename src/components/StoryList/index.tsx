import React from "react";

import { useSelector } from "react-redux";

import Header from "../Header";
import LoaderSpinner from "../LoaderSpinner";
import StoryCard from "../StoryCard";

import useGetAllStories from "../../hooks/useGetAllStories";

import "./styles.scss";

export default function StoryList() {
  const loading = useSelector((state: { loading: boolean }) => state.loading);
  const stories = useGetAllStories();

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="StoryList">
          {stories.map((story) => {
            return (
              <div key={story.id}>
                <StoryCard story={story} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
