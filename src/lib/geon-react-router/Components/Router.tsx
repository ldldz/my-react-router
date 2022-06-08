import { useState, createContext, useEffect } from "react";

type RouterContextProps = {
  path: string;
  changePath(newPath: string): void;
};

export const RouterContext = createContext<RouterContextProps>({ path: "", changePath: () => {} });

export function Router({ children }: { children: React.ReactElement | React.ReactElement[] }): JSX.Element {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = (newPath: string) => {
    setPath(newPath);
    window.history.pushState({ path: newPath }, "", newPath);
  };

  const contextValue = {
    path,
    changePath,
  };

  useEffect(() => {
    const handleOnpopstate = (e: PopStateEvent) => {
      console.log(e);
      setPath(e.state?.path || "/");
    };

    window.addEventListener("popstate", handleOnpopstate);

    return () => {
      window.removeEventListener("popstate", handleOnpopstate);
    };
  }, []);

  return <RouterContext.Provider value={contextValue}>{children}</RouterContext.Provider>;
}
