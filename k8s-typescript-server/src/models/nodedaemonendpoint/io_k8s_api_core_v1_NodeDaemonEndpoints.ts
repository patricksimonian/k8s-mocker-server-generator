/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
* @resourceType nodedaemonendpoint
* @kind Nodedaemonendpoint
*/
export interface io_k8s_api_core_v1_NodeDaemonEndpoints {
/**
* DaemonEndpoint contains information about a single Daemon endpoint.
* @isObject
*/
kubeletEndpoint?: { Port: number };
}

/**
* Create a new Nodedaemonendpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeDaemonEndpoints instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeDaemonEndpoints(data?: Partial<io_k8s_api_core_v1_NodeDaemonEndpoints>): io_k8s_api_core_v1_NodeDaemonEndpoints {
 return {
   kubeletEndpoint: data?.kubeletEndpoint !== undefined ? data.kubeletEndpoint : { Port: 0 },
 };
}
