import axios from "axios";
import React, { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://staging.femtasy.com",
  headers: {
    "Access-Control-Allow-Origin": true,
    withCredentials: true,
  },
});

const useGetAllStories = () => {
  const [stories, setStories] = useState([] as any[]);

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
