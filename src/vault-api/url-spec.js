// @flow
export default class UrlSpec {
  prefix: string;

  queryParams: { [string]: any };

  constructor(prefix: string = '', queryParams: { [string]: any } = {}) {
    this.prefix = prefix;
    this.queryParams = queryParams;
  }

  prefixPath(prefix: string) {
    return new UrlSpec(`${prefix}${this.prefix}`, this.queryParams);
  }

  suffixPathParam(suffix: string) {
    return new UrlSpec(`${this.prefix}${encodeURIComponent(suffix)}`, this.queryParams);
  }

  addParams(params: { [string]: string }) {
    return new UrlSpec(this.prefix, {
      ...this.queryParams,
      ...params,
    });
  }

  build() {
    const queryParams = Object.entries(this.queryParams).map(
      e => `${encodeURIComponent(e[0])}=${encodeURIComponent(String(e[1]))}`,
    ).join('&');
    return this.prefix + (queryParams ? '?' : '') + queryParams;
  }
}
