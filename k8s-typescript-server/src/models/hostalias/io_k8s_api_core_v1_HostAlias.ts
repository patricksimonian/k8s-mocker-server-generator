/**
* HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
* @resourceType hostalias
* @kind Hostalias
*/
export interface io_k8s_api_core_v1_HostAlias {
/**
* Hostnames for the above IP address.
* @isArray
*/
hostnames?: string[];
/**
* IP address of the host file entry.
* @required
*/
ip: string;
}

/**
* Create a new Hostalias with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_HostAlias instance with defaults applied
*/
export function createio_k8s_api_core_v1_HostAlias(data?: Partial<io_k8s_api_core_v1_HostAlias>): io_k8s_api_core_v1_HostAlias {
 return {
   hostnames: data?.hostnames !== undefined ? data.hostnames : [],
   ip: data?.ip !== undefined ? data.ip : '',
 };
}
