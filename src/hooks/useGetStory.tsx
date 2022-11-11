import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStory } from "../redux/actions";
import { Story } from "../redux/reducers/setStoryReducer";

const api = axios.create({
  baseURL: "https://staging.femtasy.com",
  headers: {
    "Access-Control-Allow-Origin": true,
    withCredentials: true,
  },
});

const useGetStory = (storyId: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm")
      .then((response) => {
        response.data.filter((entry: Story) => {
          if (entry.story_id === storyId) {
            dispatch(setStory(entry));
          }
          return console.log("story dispatched");
        });
      })
      .catch((err) => {
        console.log("error", err);
        return [];
      });
  }, [dispatch, storyId]);
};

export default useGetStory;
