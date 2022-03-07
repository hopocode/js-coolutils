import { parse } from "query-string";

export interface IQueryParameters {
  [key: string]: any;
}

export const parseQueryParameters = (q: string): IQueryParameters => {
  return parse(q);
};

export interface INormalizeConfig {
  removeQueryArgs: string[];
  removeEndBackslash: boolean;
  removeHash: boolean;
}

const defaultNormalizeUrlConfig: INormalizeConfig = {
  removeQueryArgs: ["utm_source", "utm_campaign", "gclid"],
  removeEndBackslash: true,
  removeHash: true,
};

export interface IUrlObject extends URL {
  query: IQueryParameters;
  path: string;
  pathname: string;
}

export const createUrlObject = (url: string): IUrlObject => {
  const u = new URL(url);
  let ret: any = {
    host: u.host,
    pathname: u.pathname,
    protocol: u.protocol,
    port: u.port,
    hash: u.hash,
    query: {},
  };
  if (u.search) {
    const queryParams: any[] = [];
    const urlSearchParams = new URLSearchParams(u.search);
    urlSearchParams.forEach((val: any, key: string) => {
      queryParams.push({ key, val });
    });
    // order query params by alphabetical order
    const orderedQueryParams: any[] = queryParams.sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });
    const newQ: any = {};
    orderedQueryParams.forEach((queryParam) => {
      newQ[queryParam.key] = queryParam.val;
    });
    ret = { ...ret, query: newQ };
  }
  return ret as IUrlObject;
};

export const urlObjectToString = (urlObject: IUrlObject): string => {
  const queryArgs =
    Object.keys(urlObject.query).length > 0
      ? "?" + new URLSearchParams(urlObject.query).toString()
      : null;
  const port = urlObject.port ? ":" + urlObject.port : "";
  const ret = `${urlObject.protocol}//${urlObject.host}${port}${urlObject.path}${queryArgs}`;
  return ret;
};

export const normalizeUrl = (
  url: string,
  config: INormalizeConfig = defaultNormalizeUrlConfig
): string => {
  const urlObject = createUrlObject(url);
  // remove query parameters
  const removeQueryArgs: string[] = config.removeQueryArgs || [];
  const queryParams: any = {};
  for (let i in urlObject.query) {
    if (!removeQueryArgs.includes(i)) {
      queryParams[i] = urlObject.query[i];
    }
  }
  const newUrlObject = { ...urlObject, query: queryParams };
  return urlObjectToString(newUrlObject);
};
