/**
* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
*/
export interface io_k8s_api_networking_v1_HTTPIngressRuleValue {
/**
* paths is a collection of paths that map requests to backends.
*/
paths: Array<{ backend: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { port?: { name?: string; number?: number }; name: string } }; path?: string; pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix' }>;
}

/**
* Create a new io_k8s_api_networking_v1_HTTPIngressRuleValue with default values
*/
export function createio_k8s_api_networking_v1_HTTPIngressRuleValue(data?: Partial<io_k8s_api_networking_v1_HTTPIngressRuleValue>): io_k8s_api_networking_v1_HTTPIngressRuleValue {
  return {
    paths: data?.paths !== undefined ? data.paths : [],
  };
}
