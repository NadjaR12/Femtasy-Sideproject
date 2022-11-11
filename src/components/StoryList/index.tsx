import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import useGetAllStories from "../../hooks/useGetAllStories";
import { Story } from "../../redux/reducers/setStoriesReducer";

import Header from "../Header";
import LoaderSpinner from "../LoaderSpinner";
import StoryCard from "../StoryCard";

import "./styles.scss";

export default function StoryList() {
  const isLoading = useSelector<any, boolean>(
    ({ loading: { isLoading } }) => isLoading
  );
  const stories = useSelector<any, Story[]>(
    ({ stories: { storiesData } }) => storiesData
  );

  // useEffect(() => {
  //   console.log("componentDidMount");
  // }, []);

  // useEffect(() => {
  //   console.log("componentDidMount and componentDidUpdate");
  // });

  // useEffect(() => {
  //   console.log("componentDidUpdate - loading");
  // }, [loading]);

  useEffect(() => {
    console.log("componentDidUpdate - stories");
  }, [stories]);

  useGetAllStories();

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />

      {isLoading && <LoaderSpinner />}

      {!isLoading && stories && (
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
