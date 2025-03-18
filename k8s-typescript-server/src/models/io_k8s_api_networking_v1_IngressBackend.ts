/**
* IngressBackend describes all endpoints for a given service and port.
*/
export interface io_k8s_api_networking_v1_IngressBackend {
/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
*/
resource?: { apiGroup?: string; kind: string; name: string };
/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
*/
service?: { name: string; port?: { name?: string; number?: number } };
}

/**
* Create a new io_k8s_api_networking_v1_IngressBackend with default values
*/
export function createio_k8s_api_networking_v1_IngressBackend(data?: Partial<io_k8s_api_networking_v1_IngressBackend>): io_k8s_api_networking_v1_IngressBackend {
  return {
    resource: data?.resource !== undefined ? data.resource : { kind: '', name: '' },
    service: data?.service !== undefined ? data.service : { name: '' },
  };
}
