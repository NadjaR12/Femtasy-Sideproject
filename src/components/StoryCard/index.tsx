import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ClockIcon from "../../assets/icons/clock.png";
import { toggleOpen } from "../../redux/actions";

import "./styles.scss";

interface IProps {
  story: {
    title: string;
    story_id: number;
    description: string;
    theme?: string;
    speaker_name?: string;
    intensity?: string;
    duration?: number;
  };
}

export default function StoryCard({ story }: IProps) {
  const dispatch = useDispatch();

  const isOpen = useSelector<any, boolean>(({ open: { isOpen } }) => isOpen);

  const handleOpen = () => {
    dispatch(toggleOpen());
  };

  return (
    <div className="StoryCard" data-testid="StoryCard">
      <h3 className="StoryCard__title">{story.title}</h3>
      <div>
        <div className="StoryCard__theme">
          <h4 className="StoryCard__themeTag">Theme: {story.theme}</h4>
          <h4 className="StoryCard__intensityTag">
            {" "}
            Intensity: {story.intensity}
          </h4>
        </div>
        <h4 className="StoryCard__speaker">Speaker: {story.speaker_name}</h4>
        <h4 className="StoryCard__durationTag">
          <img src={ClockIcon} alt="Clock Icon" className="StoryCard__icon" />{" "}
          {story.duration} Min.
        </h4>
      </div>
      {!isOpen && (
        <button className="StoryCard__button" onClick={handleOpen}>
          show more
        </button>
      )}
      {isOpen && (
        <>
          <div className="StoryCard__description">{story.description}</div>
          <button className="StoryCard__button" onClick={handleOpen}>
            show less
          </button>
        </>
      )}
      <button className="StoryCard__button">
        <a href={`/home/${story.story_id}`}>show details</a>
      </button>
    </div>
  );
}
