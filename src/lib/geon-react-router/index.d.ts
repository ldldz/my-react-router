declare module "geon-react-router" {
  export function Link({ to, children }: { to: string; children: React.ReactElement | string }): JSX.Element;

  export function Route({ path, element }: { path: string; element: React.ReactElement }): null;

  export function Router({ children }: { children: React.ReactElement | React.ReactElement[] }): JSX.Element;

  export function Routes({ children }: { children: React.ReactElement | React.ReactElement[] }): JSX.Element;

  export function useNavigate(nextState: string): void;
}
