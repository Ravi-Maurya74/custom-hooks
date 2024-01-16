import { useState, useEffect } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (err) {
        setError({ message: err.message || "Something went wrong" });
      }
      setIsFetching(false);
    }
  }, [fetchFn]);
  return { isFetching, fetchedData, error };
}
