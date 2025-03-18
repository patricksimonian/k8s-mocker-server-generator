/**
* PodDNSConfigOption defines DNS resolver options of a pod.
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
* Create a new io_k8s_api_core_v1_PodDNSConfigOption with default values
*/
export function createio_k8s_api_core_v1_PodDNSConfigOption(data?: Partial<io_k8s_api_core_v1_PodDNSConfigOption>): io_k8s_api_core_v1_PodDNSConfigOption {
  return {
    name: data?.name !== undefined ? data.name : '',
    value: data?.value !== undefined ? data.value : '',
  };
}
