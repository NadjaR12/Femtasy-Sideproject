import React from "react";

import PageSkeleton from "../../components/PageSkeleton";
import StoryList from "../../components/StoryList";

import "./styles.scss";

export default function Home() {
  return (
    <div className="Home__bg">
      <PageSkeleton title="Home" subtitle="Overview what to find on that side">
        <StoryList />
      </PageSkeleton>
    </div>
  );
}
