/**
* LinuxContainerUser represents user identity information in Linux containers
*/
export interface io_k8s_api_core_v1_LinuxContainerUser {
/**
* GID is the primary gid initially attached to the first process in the container
*/
gid: number;
/**
* SupplementalGroups are the supplemental groups initially attached to the first process in the container
*/
supplementalGroups?: number[];
/**
* UID is the primary uid initially attached to the first process in the container
*/
uid: number;
}

/**
* Create a new io_k8s_api_core_v1_LinuxContainerUser with default values
*/
export function createio_k8s_api_core_v1_LinuxContainerUser(data?: Partial<io_k8s_api_core_v1_LinuxContainerUser>): io_k8s_api_core_v1_LinuxContainerUser {
  return {
    gid: data?.gid !== undefined ? data.gid : 0,
    supplementalGroups: data?.supplementalGroups !== undefined ? data.supplementalGroups : [],
    uid: data?.uid !== undefined ? data.uid : 0,
  };
}
