import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const api = axios.create({
  baseURL: "https://staging.femtasy.com",
  headers: {
    "Access-Control-Allow-Origin": true,
    withCredentials: true,
  },
});

const useGetStory = () => {
  const [story, setStory] = useState([] as any[]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    api
      .get("/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm")
      .then((response) => {
        // console.log(
        //   response.data.filter(
        //     (entry: { story_id: number }) => entry.story_id === id
        //   )
        // );
        setStory(response.data);
      })
      .catch((err) => {
        console.log("error", err);
        return [];
      });
  }, []);

  return story;
};

export default useGetStory;
