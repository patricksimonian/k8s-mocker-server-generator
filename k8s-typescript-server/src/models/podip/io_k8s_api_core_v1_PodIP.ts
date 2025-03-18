/**
* PodIP represents a single IP address allocated to the pod.
* @resourceType podip
* @kind Podip
*/
export interface io_k8s_api_core_v1_PodIP {
/**
* IP is the IP address assigned to the pod
* @required
*/
ip: string;
}

/**
* Create a new Podip with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodIP instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodIP(data?: Partial<io_k8s_api_core_v1_PodIP>): io_k8s_api_core_v1_PodIP {
 return {
   ip: data?.ip !== undefined ? data.ip : '',
 };
}
