import UrlSpec from './url-spec';

describe('UrlSpec', () => {
  it('should build up URL paths right to left', () => {
    const spec = new UrlSpec('a').prefixPath('b');
    expect(spec.build()).toEqual('ba');
  });
  it('should create a new object for each modification of the path', () => {
    const original = new UrlSpec('a');
    expect(original.prefixPath('b')).not.toBe(original);
  });
  describe('with query parameters', () => {
    it('should add query parameters to the end of the url', () => {
      const spec = new UrlSpec('path', { param: 'foo' });
      expect(spec.build()).toMatch(/param=foo$/);
    });
    it('should allow multiple calls to addParams to build up parameters', () => {
      const actual = new UrlSpec('path', { param: 'foo' })
        .addParams({ bar: 'baz' })
        .addParams({ quux: 'value' })
        .build();
      expect(actual).toMatch(/param=foo/);
      expect(actual).toMatch(/bar=baz/);
      expect(actual).toMatch(/quux=value/);
    });
    it('should allow setting of multiple parameters in one call', () => {
      const actual = new UrlSpec('path', { param: 'foo', bar: 'baz' }).build();
      expect(actual).toMatch(/param=foo/);
      expect(actual).toMatch(/bar=baz/);
    });
    it('should override same-named parameters', () => {
      const actual = new UrlSpec('path', { param: 'foo' })
        .addParams({ param: 'bar' })
        .build();
      expect(actual).toMatch(/param=bar$/);
    });
    it('should separate parameters with \'&\'', () => {
      const actual = new UrlSpec('path', { params: 'foo', bar: 'baz' }).build();
      expect(actual).toMatch(/params=foo&bar=baz$/);
    });
    it('should start the query parameters with \'?\'', () => {
      const actual = new UrlSpec('path', { param: 'foo' }).build();
      expect(actual).toEqual('path?param=foo');
    });
    it('should return a new object on each modification to the query params', () => {
      const original = new UrlSpec('path', { param: 'foo' });
      expect(original.addParams({ bar: 'baz' })).not.toBe(original);
    });
  });
});
