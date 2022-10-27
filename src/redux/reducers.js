import { initialState } from "./state";

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADERSPINNER":
      return {
        ...state,
        loading: true,
      };
    case "HIDE_LOADERSPINNER":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
