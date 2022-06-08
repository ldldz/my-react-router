import { useContext, useCallback } from "react";
import { RouterContext } from "../Components/Router";

export function useNavigate() {
  const { path, changePath } = useContext(RouterContext);

  const navigate = useCallback(
    (nextPath: string) => {
      if (path === nextPath) {
        return;
      }
      changePath(nextPath);
    },
    [path, changePath]
  );

  return navigate;
}
