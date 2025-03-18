/**
* PodDNSConfigOption defines DNS resolver options of a pod.
* @resourceType poddnsconfigoption
* @kind Poddnsconfigoption
*/
export interface io_k8s_api_core_v1_PodDNSConfigOption {
/**
* Name is this DNS resolver option's name. Required.
*/
name?: string;
/**
* Value is this DNS resolver option's value.
*/
value?: string;
}

/**
* Create a new Poddnsconfigoption with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodDNSConfigOption instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodDNSConfigOption(data?: Partial<io_k8s_api_core_v1_PodDNSConfigOption>): io_k8s_api_core_v1_PodDNSConfigOption {
 return {
   name: data?.name !== undefined ? data.name : '',
   value: data?.value !== undefined ? data.value : '',
 };
}
