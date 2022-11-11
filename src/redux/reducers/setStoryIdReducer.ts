interface IInitialStateProps {
  storyId: number | undefined;
}

const initialState: IInitialStateProps = {
  storyId: undefined,
};

const setStoryIdReducer = (
  state = initialState,
  action: {
    type: string;
    payload?: number;
  }
) => {
  if (action.type === "SET_STORY_ID") {
    return {
      ...state,
      storyId: action.payload,
    };
  }
  return state;
};

export default setStoryIdReducer;
