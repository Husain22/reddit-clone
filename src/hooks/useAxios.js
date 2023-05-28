import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useAxios;
