interface IInitialStateProps {
  storiesData: Story[] | undefined;
}

const initialState: IInitialStateProps = {
  storiesData: [],
};
export type Story = {
  story_id: number;
  title: string;
  genre_id?: number;
  genre_name?: string;
  speaker_id?: number;
  spaeker_name?: string;
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

const setStoriesReducer = (
  state = initialState,
  action: {
    type: string;
    payload?: Story[];
  }
) => {
  if (action.type === "SET_STORIES_DATA") {
    console.log("storiesReducer called");
    console.log("action.payload", action.payload);
    return {
      ...state,
      storiesData: action.payload,
    };
  }
  return state;
};

export default setStoriesReducer;
