import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducers";

const reduxStore = configureStore({
  reducer: loaderReducer,
});

export default reduxStore;
