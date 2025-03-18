/**
* HostIP represents a single IP address allocated to the host.
* @resourceType hostip
* @kind Hostip
*/
export interface io_k8s_api_core_v1_HostIP {
/**
* IP is the IP address assigned to the host
* @required
*/
ip: string;
}

/**
* Create a new Hostip with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_HostIP instance with defaults applied
*/
export function createio_k8s_api_core_v1_HostIP(data?: Partial<io_k8s_api_core_v1_HostIP>): io_k8s_api_core_v1_HostIP {
 return {
   ip: data?.ip !== undefined ? data.ip : '',
 };
}
