import React from "react";

import { useSelector } from "react-redux";
import useGetAllStories from "../../hooks/useGetAllStories";
import { Story } from "../../redux/reducers/setStoriesReducer";

import Header from "../Header";
import LoaderSpinner from "../LoaderSpinner";
import StoryCard from "../StoryCard";

import "./styles.scss";

export default function StoryList() {
  useGetAllStories();
  const loading = useSelector<any, boolean>(
    ({ loaderReducer: { loading } }) => loading
  );
  const stories = useSelector<any, Story[]>(
    ({ setStoriesReducer: { storiesData } }) => storiesData
  );

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      {loading || stories === undefined ? (
        <LoaderSpinner />
      ) : (
        <div className="StoryList">
          {stories.map((story) => {
            return (
              <div key={story.story_id}>
                <StoryCard story={story} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
