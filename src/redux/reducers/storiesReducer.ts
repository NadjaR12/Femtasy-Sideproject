import { Story } from "../../types/Story";
import {
  HIDE_LOADERSPINNER,
  SET_STORIES_DATA,
  SET_STORY_ID,
  TOGGLE_DESCRIPTION,
} from "../actions";

interface IInitialStateProps {
  isLoading: boolean;
  isOpen: boolean;
  storyId: number | undefined;
  storiesData: Story[] | undefined;
}

const initialState: IInitialStateProps = {
  isLoading: true,
  isOpen: false,
  storyId: undefined,
  storiesData: [],
};

export default function stories(
  state = initialState,
  // HOW TO HANDLE 2 DIFFERENT PAYLOAD TYPES??
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case SET_STORIES_DATA: {
      return {
        ...state,
        storiesData: action.payload,
      };
    }
    case SET_STORY_ID: {
      return {
        ...state,
        storyId: action.payload,
      };
    }
    case HIDE_LOADERSPINNER: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case TOGGLE_DESCRIPTION: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    default:
      return state;
  }
}
