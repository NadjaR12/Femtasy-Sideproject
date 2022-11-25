import React from "react";

import PageSkeleton from "../../components/PageSkeleton";
import StoryList from "../../components/StoryList";

import "./styles.scss";

export default function Home() {
  console.log("home");
  return (
    <div className="Home__bg">
      <div className="Home__layer">
        <PageSkeleton
          title="Home"
          subtitle="This is a side-project to experiment and learn new things!"
        >
          <StoryList />
        </PageSkeleton>
      </div>
    </div>
  );
}
