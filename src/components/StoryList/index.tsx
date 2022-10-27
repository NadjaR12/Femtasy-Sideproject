import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { showLoaderSpinner } from "../../redux/actions";
import { hideLoaderSpinner } from "../../redux/actions";

import Header from "../Header";
import LoaderSpinner from "../LoaderSpinner";
import StoryCard from "../StoryCard";

import useGetAllStories from "../../hooks/useGetAllStories";

import "./styles.scss";

export default function StoryList() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);

  const stories = useGetAllStories();

  if (stories) {
    dispatch(hideLoaderSpinner());
  }

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
