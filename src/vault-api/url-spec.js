export default class UrlSpec {
  constructor(prefix = '', queryParams = {}) {
    this.prefix = prefix;
    this.queryParams = queryParams;
  }
  prefixPath(prefix) {
    return new UrlSpec(`${prefix}${this.prefix}`, this.queryParams);
  }
  suffixPathParam(suffix) {
    return new UrlSpec(`${this.prefix}${encodeURIComponent(suffix)}`, this.queryParams);
  }
  addParams(params) {
    return new UrlSpec(this.prefix, {
      ...this.queryParams,
      ...params,
    });
  }
  build() {
    const queryParams = Object.entries(this.queryParams).map(e =>
      `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`).join('&');
    return this.prefix + (queryParams ? '?' : '') + queryParams;
  }
}
