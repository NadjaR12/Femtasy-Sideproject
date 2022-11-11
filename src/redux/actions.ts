import { Story } from "./reducers/setStoriesReducer";

export const hideLoaderSpinner = () => {
  console.log("loader Spinner action");
  return {
    type: "HIDE_LOADERSPINNER",
  };
};

export const setStories = (payload: Story[]) => {
  console.log("set data action");

  return { type: "SET_STORIES_DATA", payload };
};

export const setStory = (payload: Story) => {
  console.log("set story data action");

  return { type: "SET_STORY_DATA", payload };
};

export const toggleOpen = () => {
  console.log("toggle open action");
  return {
    type: "TOGGLE_DESCRIPTION",
  };
};
