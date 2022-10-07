import React, { useState } from "react";

import "./styles.scss";

interface IProps {
  story: {
    title: string;
    description: string;
    theme?: string;
    speaker_name?: string;
    intensity?: string;
    duration?: number;
  };
}

export default function StoryCard({ story }: IProps) {
  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen(!open);
  };

  console.log(open);
  return (
    <div className="StoryCard" data-testid="StoryCard">
      <h3 className="StoryCard__title">{story.title}</h3>
      <div className="StoryCard__details">
        <h4 className="StoryCard__speaker">{story.speaker_name}</h4>
        <h4 className="StoryCard__themeTag">{story.theme}</h4>
        <h4 className="StoryCard__durationTag">{story.duration} Min.</h4>
        <h4 className="StoryCard__intensityTag">{story.intensity}</h4>
      </div>
      {!open && (
        <button className="StoryCard__button" onClick={handleOpen}>
          Show more
        </button>
      )}
      {open && (
        <>
          <div className="StoryCard__description">{story.description}</div>
          <button className="StoryCard__button" onClick={handleOpen}>
            Show less
          </button>
        </>
      )}
    </div>
  );
}
