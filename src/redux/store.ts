import { configureStore } from "@reduxjs/toolkit";
import open from "./reducers/handleOpenReducer";
import loading from "./reducers/loaderSpinnerReducer";
import stories from "./reducers/setStoriesReducer";
import storyId from "./reducers/setStoryIdReducer";

const reduxStore = configureStore({
  reducer: { loading, stories, open, storyId },
});

export default reduxStore;
