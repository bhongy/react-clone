declare global {
  namespace JSX {
    // this interface is expected to provide the supported jsx interfaces
    // these are ReactDOM intrinsics so should actually come from react-dom
    interface IntrinsicElements {
      span: any;
    }
  }
}

export { createElement } from './ReactElement';
