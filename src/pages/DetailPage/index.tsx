import React from "react";

import PageSkeleton from "../../components/PageSkeleton";
import useGetStory from "../../hooks/useGetStory";

import "./styles.scss";

const StoryDetailCard = () => {
  const story = useGetStory();
  console.log(story);
  return (
    <div className="StoryDetailCard">
      {/* <h3 className="StoryCard__title">{story.title}</h3> */}
      {/* <div className="StoryCard__details">
        <h4 className="StoryCard__speaker">{story.speaker_name}</h4>
        <h4 className="StoryCard__themeTag">{story.theme}</h4>
        <h4 className="StoryCard__durationTag">{story.duration} Min.</h4>
        <h4 className="StoryCard__intensityTag">{story.intensity}</h4>
      </div>
      <div className="StoryCard__description">{story.description}</div> */}
    </div>
  );
};

export default function StoryDetailPage() {
  return (
    <div className="Home__bg">
      <PageSkeleton title={"Story Details"}>
        <StoryDetailCard />
      </PageSkeleton>
    </div>
  );
}
