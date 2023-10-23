import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, customParams = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3",
    url: url,
    params: {
      api_key: "f7083149ad71aa68e3e270bdfcaad937",
      ...customParams,
    },
  };
  const { page } = customParams;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios(options);
        setData(data);
        setLoading();
      } catch (error) {
        setError(error.messege);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return [data, loading, error];
};
