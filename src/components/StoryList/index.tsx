import axios from "axios";

import React, { useEffect, useState } from "react";

import Header from "../Header";

export default function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.femtasy.com/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm"
      )
      .then((response) => {
        // console.log('response.data', response.data.results);
        setStories(response.data);
      })
      .catch((err) => {
        return [];
      });
  }, []);

  return (
    <div>
      <Header title="Femtasy Audios" subtitle="List of All Audios" />
      <div>{stories[0]}</div>
    </div>
  );
}
