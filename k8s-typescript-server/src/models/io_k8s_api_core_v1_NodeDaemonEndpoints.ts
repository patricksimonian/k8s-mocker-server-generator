/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
*/
export interface io_k8s_api_core_v1_NodeDaemonEndpoints {
/**
* DaemonEndpoint contains information about a single Daemon endpoint.
*/
kubeletEndpoint?: { Port: number };
}

/**
* Create a new io_k8s_api_core_v1_NodeDaemonEndpoints with default values
*/
export function createio_k8s_api_core_v1_NodeDaemonEndpoints(data?: Partial<io_k8s_api_core_v1_NodeDaemonEndpoints>): io_k8s_api_core_v1_NodeDaemonEndpoints {
  return {
    kubeletEndpoint: data?.kubeletEndpoint !== undefined ? data.kubeletEndpoint : { Port: 0 },
  };
}
