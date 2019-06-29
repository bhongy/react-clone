import * as React from 'react';

function Text_(props: { text: string }) {
  return <span>{props.text}</span>;
}

test('builds correct element', () => {
  expect(<Text_ text="foo" />).toEqual(<Text_ text="foo" />);
});
