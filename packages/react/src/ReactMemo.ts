// declare const __DEV__: boolean;

import { JSXElementConstructor } from './types';
import {REACT_MEMO_TYPE} from 'shared/ReactSymbols';

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

  public readonly $$typeof: Symbol;

  private constructor(
    public readonly type: T
  ) // public readonly compare: null | ReactMemoCompareFn<Props> = null
  {
    this.$$typeof = REACT_MEMO_TYPE;
  }
}

export const memo = ReactMemo.create;
