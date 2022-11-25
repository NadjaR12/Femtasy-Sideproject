import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import useGetAllStories from "../../hooks/useGetAllStories";
import { Story } from "../../types/Story";

import Header from "../Header";
import LoaderSpinner from "../LoaderSpinner";
import StoryCard from "../StoryCard";

import "./styles.scss";

export default function StoryList() {
  console.log("storylist");

  const isLoading = useSelector<any, boolean>(
    ({ stories: { isLoading } }) => isLoading
  );

  const stories = useSelector<any, Story[]>(
    ({ stories: { storiesData } }) => storiesData
  );

  useGetAllStories();

  useEffect(() => {
    console.log("componentDidMount and componentDidUpdate");
  }, []);

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      {isLoading ? (
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
