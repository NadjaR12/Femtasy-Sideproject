interface IInitialStateProps {
  loading: boolean;
}

const initialState: IInitialStateProps = {
  loading: true,
};

const loaderReducer = (state = initialState, action: { type: string }) => {
  console.log("loaderReducer called");
  if (action.type === "HIDE_LOADERSPINNER") {
    return {
      ...state,
      loading: false,
    };
  }
  return state;
};

export default loaderReducer;
