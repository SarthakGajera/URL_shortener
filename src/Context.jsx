import { createContext, useContext, useEffect } from "react";
import useFetch from "./components/hooks/Use-fetch";
import { getCurrentUser } from "./db/apiAuth";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const { data: user, loading, fn: fetchUser } = useFetch(getCurrentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UrlContext.Provider value={{ data: user, loading, fn: fetchUser }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;
