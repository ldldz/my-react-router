import { useContext } from "react";
import { RouterContext } from "./Router";

export function Link({ to, children }: { to: string; children: React.ReactElement | string }): JSX.Element {
  const { changePath } = useContext(RouterContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    changePath(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
