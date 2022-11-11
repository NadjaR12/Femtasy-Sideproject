interface IInitialStateProps {
  isOpen: boolean;
}

const initialState: IInitialStateProps = {
  isOpen: false,
};

const handleOpen = (state = initialState, action: { type: string }) => {
  console.log("openReducer called");
  if (action.type === "TOGGLE_DESCRIPTION") {
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  }
  return state;
};

export default handleOpen;
