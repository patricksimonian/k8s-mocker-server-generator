/**
* HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
*/
export interface io_k8s_api_core_v1_HostAlias {
/**
* Hostnames for the above IP address.
*/
hostnames?: string[];
/**
* IP address of the host file entry.
*/
ip: string;
}

/**
* Create a new io_k8s_api_core_v1_HostAlias with default values
*/
export function createio_k8s_api_core_v1_HostAlias(data?: Partial<io_k8s_api_core_v1_HostAlias>): io_k8s_api_core_v1_HostAlias {
  return {
    hostnames: data?.hostnames !== undefined ? data.hostnames : [],
    ip: data?.ip !== undefined ? data.ip : '',
  };
}
