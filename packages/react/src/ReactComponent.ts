declare const __DEV__: boolean;

import { ReactNode } from './types';

export class ReactComponent<P = {}, S = {}> {
  constructor(
    public readonly props: P,
    public readonly context: any,
    public readonly updater: Updater
  ) {}

  // forceUpdate() {}
  // setState() {}
}

interface Updater {
  // enqueueForceUpdate(): void;
  // enqueueSetState(): void;
}
