import { configureStore } from "@reduxjs/toolkit";
import handleOpenReducer from "./reducers/handleOpenReducer";
import loaderReducer from "./reducers/loaderSpinnerReducer";
// import setStoryReducer from "./reducers/setStoryReducer";
import setStoriesReducer from "./reducers/setStoriesReducer";

const reduxStore = configureStore({
  reducer: { loaderReducer, setStoriesReducer, handleOpenReducer },
});

export default reduxStore;
