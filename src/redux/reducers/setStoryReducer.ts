// interface IInitialStateProps {
//   story: Story | undefined;
// }

// const initialState: IInitialStateProps = {
//   story,
// };

export type Story = {
  story_id: number;
  title: string;
  genre_id?: number;
  genre_name?: string;
  speaker_id?: number;
  speaker_name?: string;
  theme?: string;
  kinkiness_score?: number;
  released_at?: string;
  published?: boolean;
  intensity_id?: number;
  intensity?: string;
  story_markets?: {
    0: string;
  };
  description: string;
  duration?: number;
  rating?: number;
  total_plays?: number;
  plays_in_last_7_days?: number;
  url?: string;
  image_url?: string;
};

// const setStoryReducer = (
//   state = initialState,
//   action: {
//     type: string;
//     payload?: Story;
//   }
// ) => {
//   if (action.type === "SET_STORY_DATA") {
//     console.log("storyReducer called");
//     console.log("action.payload", action.payload);
//     return {
//       ...state,
//       story: action.payload,
//     };
//   }
//   return state;
// };

// export default setStoryReducer;
