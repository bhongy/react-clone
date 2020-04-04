// declare const __DEV__: boolean;

import { JSXElementConstructor } from './types';

// TEMPORARY: a component's type i.e. intrinsics ('div') or custom components
type ReactElementType<Props = any> = string | JSXElementConstructor<Props>;
// type ReactMemoCompareFn<Props> = (oldProps: Props, newProps: Props) => boolean;

export class ReactMemo<T extends ReactElementType> {
  public static create<T extends ReactElementType>(
    type: T
    // compare?: ReactMemoCompareFn<Props>
  ) {
    return new ReactMemo(type);
    // return new ReactMemo(type, compare);
  }

  private constructor(
    public readonly type: T
  ) // public readonly compare: null | ReactMemoCompareFn<Props> = null
  {}
}

export const memo = ReactMemo.create;
