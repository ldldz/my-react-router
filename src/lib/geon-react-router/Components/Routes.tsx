import { ReactElement, useContext } from "react";
import { RouterContext } from "./Router";

export function Routes({ children }: { children: ReactElement | ReactElement[] }) {
  const { path } = useContext(RouterContext);

  children = [children].flat();

  const targetElement = children.find((child) => child.props.path === path);

  return targetElement?.props.element;
}

// 한 npm 프로젝트에서 lib라는 폴더에 라이브러리를 개발 중
// 해당 프로젝트에서 lib에 작성한 코드를 import 해서 테스트 함
// lib 내에서 번들 후 배포를 위해 다시한번 npm 환경을 만듬
// 이 과정에서 react가 기존 프로젝트, lib 내부의 프로젝트
