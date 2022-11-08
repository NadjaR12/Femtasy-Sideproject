import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducers/loaderSpinnerReducer";
import setStoriesReducer from "./reducers/setStoriesReducer";

const reduxStore = configureStore({
  reducer: { loaderReducer, setStoriesReducer },
});

export default reduxStore;
