/**
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference {
/**
* If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
*/
port?: number;
/**
* Name is the name of the service
*/
name?: string;
/**
* Namespace is the namespace of the service
*/
namespace?: string;
}

/**
* Create a new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference with default values
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference {
  return {
    port: data?.port !== undefined ? data.port : 0,
    name: data?.name !== undefined ? data.name : '',
    namespace: data?.namespace !== undefined ? data.namespace : '',
  };
}
