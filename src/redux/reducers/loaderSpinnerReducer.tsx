interface IInitialStateProps {
  isLoading: boolean;
}

const initialState: IInitialStateProps = {
  isLoading: true,
};

const isLoading = (state = initialState, action: { type: string }) => {
  console.log("loaderReducer called");
  if (action.type === "HIDE_LOADERSPINNER") {
    return {
      ...state,
      isLoading: false,
    };
  }
  return state;
};

export default isLoading;
