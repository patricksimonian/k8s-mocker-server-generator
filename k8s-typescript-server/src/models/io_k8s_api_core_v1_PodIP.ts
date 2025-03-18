/**
* PodIP represents a single IP address allocated to the pod.
*/
export interface io_k8s_api_core_v1_PodIP {
/**
* IP is the IP address assigned to the pod
*/
ip: string;
}

/**
* Create a new io_k8s_api_core_v1_PodIP with default values
*/
export function createio_k8s_api_core_v1_PodIP(data?: Partial<io_k8s_api_core_v1_PodIP>): io_k8s_api_core_v1_PodIP {
  return {
    ip: data?.ip !== undefined ? data.ip : '',
  };
}
