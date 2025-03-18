/**
* Adds and removes POSIX capabilities from running containers.
*/
export interface io_k8s_api_core_v1_Capabilities {
/**
* Added capabilities
*/
add?: string[];
/**
* Removed capabilities
*/
drop?: string[];
}

/**
* Create a new io_k8s_api_core_v1_Capabilities with default values
*/
export function createio_k8s_api_core_v1_Capabilities(data?: Partial<io_k8s_api_core_v1_Capabilities>): io_k8s_api_core_v1_Capabilities {
  return {
    add: data?.add !== undefined ? data.add : [],
    drop: data?.drop !== undefined ? data.drop : [],
  };
}
