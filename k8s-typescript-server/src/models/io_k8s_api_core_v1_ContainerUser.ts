/**
* ContainerUser represents user identity information
*/
export interface io_k8s_api_core_v1_ContainerUser {
/**
* LinuxContainerUser represents user identity information in Linux containers
*/
linux?: { gid: number; supplementalGroups?: number[]; uid: number };
}

/**
* Create a new io_k8s_api_core_v1_ContainerUser with default values
*/
export function createio_k8s_api_core_v1_ContainerUser(data?: Partial<io_k8s_api_core_v1_ContainerUser>): io_k8s_api_core_v1_ContainerUser {
  return {
    linux: data?.linux !== undefined ? data.linux : { uid: 0, gid: 0 },
  };
}
