/**
* DaemonEndpoint contains information about a single Daemon endpoint.
* @resourceType daemonendpoint
* @kind Daemonendpoint
*/
export interface io_k8s_api_core_v1_DaemonEndpoint {
/**
* Port number of the given endpoint.
* @required
*/
Port: number;
}

/**
* Create a new Daemonendpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_DaemonEndpoint instance with defaults applied
*/
export function createio_k8s_api_core_v1_DaemonEndpoint(data?: Partial<io_k8s_api_core_v1_DaemonEndpoint>): io_k8s_api_core_v1_DaemonEndpoint {
 return {
   Port: data?.Port !== undefined ? data.Port : 0,
 };
}
