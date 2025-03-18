/**
* Overhead structure represents the resource overhead associated with running a pod.
*/
export interface io_k8s_api_node_v1_Overhead {
/**
* podFixed represents the fixed resource overhead associated with running a pod.
*/
podFixed?: Record<string, any>;
}

/**
* Create a new io_k8s_api_node_v1_Overhead with default values
*/
export function createio_k8s_api_node_v1_Overhead(data?: Partial<io_k8s_api_node_v1_Overhead>): io_k8s_api_node_v1_Overhead {
  return {
    podFixed: data?.podFixed !== undefined ? data.podFixed : {},
  };
}
