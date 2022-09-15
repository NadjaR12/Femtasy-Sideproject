import React from "react";

import PageSkeleton from "../../components/PageSkeleton";
import StoryList from "../../components/StoryList";

export default function Home() {
  return (
    <div>
      <PageSkeleton title="Home" subtitle="Overview what to find on that side">
        <StoryList />
      </PageSkeleton>
    </div>
  );
}
