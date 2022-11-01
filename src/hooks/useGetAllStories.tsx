import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { hideLoaderSpinner } from "../redux/actions";

const api = axios.create({
  baseURL: "https://staging.femtasy.com",
  headers: {
    "Access-Control-Allow-Origin": true,
    withCredentials: true,
  },
});

const useGetAllStories = () => {
  const dispatch = useDispatch();
  const [stories, setStories] = useState([] as any[]);

  if (stories) {
    dispatch(hideLoaderSpinner());
  }

  useEffect(() => {
    api
      .get("/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm")
      .then((response) => {
        setStories(response.data);
      })
      .catch((err) => {
        console.log("error", err);
        return [];
      });
  }, []);

  return stories;
};

export default useGetAllStories;
