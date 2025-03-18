/**
* PodOS defines the OS parameters of a pod.
* @resourceType podo
* @kind Podo
*/
export interface io_k8s_api_core_v1_PodOS {
/**
* Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null
* @required
*/
name: string;
}

/**
* Create a new Podo with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodOS instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodOS(data?: Partial<io_k8s_api_core_v1_PodOS>): io_k8s_api_core_v1_PodOS {
 return {
   name: data?.name !== undefined ? data.name : '',
 };
}
