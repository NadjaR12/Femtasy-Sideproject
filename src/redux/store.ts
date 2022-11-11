import { configureStore } from "@reduxjs/toolkit";
import open from "./reducers/handleOpenReducer";
import loading from "./reducers/loaderSpinnerReducer";
// import setStoryReducer from "./reducers/setStoryReducer";
import stories from "./reducers/setStoriesReducer";

const reduxStore = configureStore({
  reducer: { loading, stories, open },
});

export default reduxStore;
