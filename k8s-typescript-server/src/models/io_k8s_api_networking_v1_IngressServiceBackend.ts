/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
*/
export interface io_k8s_api_networking_v1_IngressServiceBackend {
/**
* name is the referenced service. The service must exist in the same namespace as the Ingress object.
*/
name: string;
/**
* ServiceBackendPort is the service port being referenced.
*/
port?: { number?: number; name?: string };
}

/**
* Create a new io_k8s_api_networking_v1_IngressServiceBackend with default values
*/
export function createio_k8s_api_networking_v1_IngressServiceBackend(data?: Partial<io_k8s_api_networking_v1_IngressServiceBackend>): io_k8s_api_networking_v1_IngressServiceBackend {
  return {
    name: data?.name !== undefined ? data.name : '',
    port: data?.port !== undefined ? data.port : {},
  };
}
