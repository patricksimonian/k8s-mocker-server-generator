/**
* HostIP represents a single IP address allocated to the host.
*/
export interface io_k8s_api_core_v1_HostIP {
/**
* IP is the IP address assigned to the host
*/
ip: string;
}

/**
* Create a new io_k8s_api_core_v1_HostIP with default values
*/
export function createio_k8s_api_core_v1_HostIP(data?: Partial<io_k8s_api_core_v1_HostIP>): io_k8s_api_core_v1_HostIP {
  return {
    ip: data?.ip !== undefined ? data.ip : '',
  };
}
