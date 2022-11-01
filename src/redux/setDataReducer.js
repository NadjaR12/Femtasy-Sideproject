import { initialState } from "./state";

const setStoriesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STORIES_DATA":
      return {
        ...state,
        storiesData: action.payload,
      };
    default:
      return state;
  }
};

export default setStoriesDataReducer;
