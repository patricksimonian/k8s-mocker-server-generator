/**
* IngressClassSpec provides information about the class of an Ingress.
*/
export interface io_k8s_api_networking_v1_IngressClassSpec {
/**
* controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
*/
controller?: string;
/**
* IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.
*/
parameters?: { apiGroup?: string; kind: string; name: string; namespace?: string; scope?: string };
}

/**
* Create a new io_k8s_api_networking_v1_IngressClassSpec with default values
*/
export function createio_k8s_api_networking_v1_IngressClassSpec(data?: Partial<io_k8s_api_networking_v1_IngressClassSpec>): io_k8s_api_networking_v1_IngressClassSpec {
  return {
    controller: data?.controller !== undefined ? data.controller : '',
    parameters: data?.parameters !== undefined ? data.parameters : { kind: '', name: '' },
  };
}
