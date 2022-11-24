import { combineReducers } from "redux";

import open from "./handleOpenReducer";
import loading from "./loaderSpinnerReducer";
import stories from "./setStoriesReducer";
import storyId from "./setStoryIdReducer";

export const rootReducer = combineReducers({ loading, stories, open, storyId });
