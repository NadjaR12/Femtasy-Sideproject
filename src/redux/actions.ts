import { Story } from "./reducers/setStoriesReducer";

export const hideLoaderSpinner = () => {
  console.log("loader Spinner action");
  return {
    type: "HIDE_LOADERSPINNER",
  };
};

export const setStoriesData = (payload: Story[]) => {
  console.log("set data action");

  return { type: "SET_STORIES_DATA", payload };
};
