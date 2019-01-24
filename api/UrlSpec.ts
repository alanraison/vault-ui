export interface IUrlSpec {
  prefixPath: (pre: string) => IUrlSpec;
  suffixPathParam: (suffix: string) => IUrlSpec;
  addParams: (params: any) => IUrlSpec;
  build: () => string;
}

export function UrlSpec(prefix: string = '', queryParams?: any): IUrlSpec {
  return {
    prefixPath: (pre: string) => {
      return UrlSpec(`${pre}${prefix}`, queryParams);
    },
    suffixPathParam: (suffix: string) => {
      return UrlSpec(`${prefix}${encodeURIComponent(suffix)}`, queryParams);
    },
    addParams: (params: any) => {
      return UrlSpec(prefix, {
        ...queryParams,
        ...params,
      });
    },
    build: () => {
      const qps = Object.entries(queryParams).map(
        e => `${encodeURIComponent(e[0])}=${encodeURIComponent(String(e[1]))}`
      ).join('&');
      return prefix + (qps ? '?' : '') + qps;
    }
  };
}