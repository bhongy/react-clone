import { ReactElement } from './ReactElement';

describe('ReactElement', () => {
  it('allows a string to be passed as the type', () => {
    const element = ReactElement.create('div', {});
    expect(element.type).toBe('div');
    expect(element.props).toEqual({});
    expect(element.key).toBeNull();
  });
});
