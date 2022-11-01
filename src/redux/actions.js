// ACTON CREATORS
export const hideLoaderSpinner = () => {
  console.log("hello");
  return {
    type: "HIDE_LOADERSPINNER",
  };
};

export const setStoriesData = (payload) => {
  return { type: "SET_STORIES_DATA", payload };
};
