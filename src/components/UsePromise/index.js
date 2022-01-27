import { useEffect, useState } from "react";

export const usePromise = (callApi) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi()
      .then((res) => {
        setData(res?.data?.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [callApi]);
  return { error, data, loading };
};
