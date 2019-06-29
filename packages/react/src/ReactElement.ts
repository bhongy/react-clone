import { REACT_ELEMENT_TYPE } from './ReactSymbols';

// type ReactElementKey = string | number;
// type IntrinsicElements = {};

type ReactChild = string | number | ReactElement;
type ReactNode =
  | undefined
  | null
  | ReactChild; /* ReactFragement | ReactPortal */

class ReactElement<T extends string = string, P extends {} = {}> {
  private readonly $$typeof = REACT_ELEMENT_TYPE;
  constructor(readonly type: T, readonly props: P, readonly key: string) {}
}

// different than React. we will never call this with `config == null`
export function createElement<T extends string, C extends { key?: string | number }>(
  type: T,
  config: C,
  ...children: ReactNode[]
) {
  const { key, ...props } = config;
  return new ReactElement(type, { children, ...props }, `${key}`);
}
