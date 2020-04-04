import { JSXElementConstructor } from './types';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';

export class ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  /**
   * "createElement" (renamed to "ReactElement.create")
   */
  // TODO overload this for better typing
  public static create<P extends {}>(
    type: any, // TODO type this
    props: P,
    key: null | string = null
  ): ReactElement<P> {
    return new ReactElement(type, props, key);
  }

  /**
   * "isValidElement" (renamed to "ReactElement.is")
   *
   * Verifies the object is a ReactElement.
   * See https://reactjs.org/docs/react-api.html#isvalidelement
   */
  public static is(maybeElement: unknown): boolean {
    return maybeElement instanceof ReactElement;
  }

  public readonly $$typeof: symbol;

  private constructor(
    // either intrinsic 'div' or MyComponent
    public readonly type: T,
    public readonly props: P,
    public readonly key: null | string
  ) {
    this.$$typeof = REACT_ELEMENT_TYPE;
  }
}
