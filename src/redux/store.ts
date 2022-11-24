import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
