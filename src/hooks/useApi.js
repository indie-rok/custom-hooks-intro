import { useState, useEffect } from "react";

export default function useApi(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getStuff() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.toString());
      }
    }

    getStuff();
  }, []);

  return { data, isLoading, error };
}
