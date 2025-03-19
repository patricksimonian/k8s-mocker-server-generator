/**
* IngressBackend describes all endpoints for a given service and port.
* @resourceType ingressbackend
* @kind Ingressbackend
*/
export interface io_k8s_api_networking_v1_IngressBackend {
/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
* @isObject
*/
service?: { name: string; port?: { number?: number; name?: string } };
/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
* @isObject
*/
resource?: { apiGroup?: string; kind: string; name: string };
}

/**
* Create a new Ingressbackend with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressBackend instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressBackend(data?: Partial<io_k8s_api_networking_v1_IngressBackend>): io_k8s_api_networking_v1_IngressBackend {
 return {
   service: data?.service !== undefined ? data.service : { name: '' },
   resource: data?.resource !== undefined ? data.resource : { kind: '', name: '' },
 };
}
