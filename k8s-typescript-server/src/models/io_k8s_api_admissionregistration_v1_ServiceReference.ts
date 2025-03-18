/**
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
export interface io_k8s_api_admissionregistration_v1_ServiceReference {
/**
* `path` is an optional URL path which will be sent in any request to this service.
*/
path?: string;
/**
* If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
*/
port?: number;
/**
* `name` is the name of the service. Required
*/
name: string;
/**
* `namespace` is the namespace of the service. Required
*/
namespace: string;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_ServiceReference with default values
*/
export function createio_k8s_api_admissionregistration_v1_ServiceReference(data?: Partial<io_k8s_api_admissionregistration_v1_ServiceReference>): io_k8s_api_admissionregistration_v1_ServiceReference {
  return {
    path: data?.path !== undefined ? data.path : '',
    port: data?.port !== undefined ? data.port : 0,
    name: data?.name !== undefined ? data.name : '',
    namespace: data?.namespace !== undefined ? data.namespace : '',
  };
}
