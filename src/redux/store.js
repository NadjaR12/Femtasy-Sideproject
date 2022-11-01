import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSpinnerReducer";

const reduxStore = configureStore({
  reducer: loaderReducer,
});

export default reduxStore;
