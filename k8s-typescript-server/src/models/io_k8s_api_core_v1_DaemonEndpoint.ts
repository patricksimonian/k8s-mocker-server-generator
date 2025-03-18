/**
* DaemonEndpoint contains information about a single Daemon endpoint.
*/
export interface io_k8s_api_core_v1_DaemonEndpoint {
/**
* Port number of the given endpoint.
*/
Port: number;
}

/**
* Create a new io_k8s_api_core_v1_DaemonEndpoint with default values
*/
export function createio_k8s_api_core_v1_DaemonEndpoint(data?: Partial<io_k8s_api_core_v1_DaemonEndpoint>): io_k8s_api_core_v1_DaemonEndpoint {
  return {
    Port: data?.Port !== undefined ? data.Port : 0,
  };
}
