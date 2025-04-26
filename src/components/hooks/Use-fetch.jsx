//custom hook
// The useFetch hook is a custom React hook that you can use to fetch data asynchronously and handle loading states, error handling, and data storage. It provides a cleaner and reusable way of performing API calls or any async operations
import { useState } from "react";
//here cb will be our login function i.e in apiAuth.js
const useFetch = (cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (options) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(options); //options are the parameters (or arguments) that you pass to the callback function (cb).

      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
};

export default useFetch;
