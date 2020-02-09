// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts

import { ReactComponent } from './ReactComponent';
import { ReactElement } from './ReactElement';

export type JSXElementConstructor<P> =
  | ((props: P) => ReactElement | null)
  | (new (props: P) => ReactComponent<P, any>);

export type ComponentType<P = {}> = ClassComponent<P> | FunctionComponent<P>;

export interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>): ReactElement | null;
  // contextTypes?
  displayName?: string;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

interface ClassComponent<P = {}, S = {}> {
  new (props: P): ReactComponent<P, S>;
  // contextTypes?
  displayName?: string;
}

//
// React Nodes
// http://facebook.github.io/react/docs/glossary.html
// ----------------------------------------------------------------------

export type ReactText = string | number;
export type ReactChild = /* ReactElement | */ ReactText;

// type resolution of an interface is deferred so it can be recursively chained.
export interface ReactNodeArray extends Array<ReactNode> {}
export type ReactFragment = {} | ReactNodeArray;
export type ReactNode =
  | ReactChild
  | ReactFragment
  | /* ReactPortal |*/ boolean
  | null
  | undefined;

declare global {
  namespace JSX {
    // this interface is expected to provide the supported jsx interfaces
    // these are ReactDOM intrinsics so should actually come from react-dom
    interface IntrinsicElements {
      // HTML
      span: any;
    }
  }
}
