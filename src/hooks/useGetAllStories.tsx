import axios from "axios";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { hideLoaderSpinner, setStories } from "../redux/actions";

const api = axios.create({
  baseURL: "https://staging.femtasy.com",
  headers: {
    "Access-Control-Allow-Origin": true,
    withCredentials: true,
  },
});

const useGetAllStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/api/v1/data_feeds/stories?locale=de&filters=tags.name_de:bdsm")
      .then((response) => {
        console.log("data", response.data);
        dispatch(setStories(response.data));
        dispatch(hideLoaderSpinner());
      })
      .catch((err) => {
        console.log("error", err);
        return [];
      });
  }, [dispatch]);
};

export default useGetAllStories;
