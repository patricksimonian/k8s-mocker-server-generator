/**
* Sysctl defines a kernel parameter to be set
*/
export interface io_k8s_api_core_v1_Sysctl {
/**
* Value of a property to set
*/
value: string;
/**
* Name of a property to set
*/
name: string;
}

/**
* Create a new io_k8s_api_core_v1_Sysctl with default values
*/
export function createio_k8s_api_core_v1_Sysctl(data?: Partial<io_k8s_api_core_v1_Sysctl>): io_k8s_api_core_v1_Sysctl {
  return {
    value: data?.value !== undefined ? data.value : '',
    name: data?.name !== undefined ? data.name : '',
  };
}
