import { UrlSpec } from './UrlSpec';

describe('UrlSpec', () => {
  it('should allow a blank spec', () => {
    expect(UrlSpec().build()).toEqual('');
  });
});