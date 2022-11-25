// import axios from "axios";
// import { useDispatch } from "react-redux";
import { Story } from "../types/Story";

export const HIDE_LOADERSPINNER = "HIDE_LOADERSPINNER";
export const SET_STORIES_DATA = "SET_STORIES_DATA";
export const SET_STORY_ID = "SET_STORY_ID";
export const TOGGLE_DESCRIPTION = "TOGGLE_DESCRIPTION";

export const storiesActions = {
  hideLoaderSpinner: () => {
    console.log("loader Spinner action");
    return {
      type: "HIDE_LOADERSPINNER",
    };
  },

  setStories: (payload: Story[]) => {
    console.log("set data action");
    return { type: "SET_STORIES_DATA", payload };
  },

  // fetchStories: (payload: Story[]) => {
  //   const api = axios.create({
  //     baseURL: "https://staging.femtasy.com",
  //     headers: {
  //       "Access-Control-Allow-Origin": true,
  //       withCredentials: true,
  //     },
  //   });

  //   const getData = async () => {
  //     try {
  //       const response = await api.get(
  //         "/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm"
  //       );
  //       console.log("data", response.data);
  //       // dispatch(storiesActions.setStories(response.data));
  //     } catch (err) {
  //       console.log("error", err);
  //       return [];
  //     } finally {
  //       // dispatch(storiesActions.hideLoaderSpinner());
  //     }
  //   };
  //   getData();
  // },

  setStoryId: (payload: number) => {
    return { type: "SET_STORY_ID", payload };
  },

  toggleOpen: () => {
    console.log("toggle open action");
    return {
      type: "TOGGLE_DESCRIPTION",
    };
  },
};
