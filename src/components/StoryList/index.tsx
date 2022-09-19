import axios from "axios";

import React, { useEffect, useState } from "react";

import Header from "../Header";

const api = axios.create({
  baseURL: "https://staging.femtasy.com",
  headers: {
    "Access-Control-Allow-Origin": true,
    withCredentials: true,
  },
});

export default function StoryList() {
  const [stories, setStories] = useState([] as any[]);

  useEffect(() => {
    api
      .get("/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm")
      .then((response) => {
        console.log("response.data", response.data);
        setStories(response.data);
      })
      .catch((err) => {
        console.log("error", err);
        return [];
      });
  }, []);

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      {stories.map((story) => {
        return (
          <>
            <h3>{story.title}</h3>
            <div>{story.description}</div>
          </>
        );
      })}
    </div>
  );
}
