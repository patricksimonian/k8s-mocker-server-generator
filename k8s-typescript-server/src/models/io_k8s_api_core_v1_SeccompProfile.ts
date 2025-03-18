/**
* SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
*/
export interface io_k8s_api_core_v1_SeccompProfile {
/**
* localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is "Localhost". Must NOT be set for any other type.
*/
localhostProfile?: string;
/**
* type indicates which kind of seccomp profile will be applied. Valid options are:

Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.

Possible enum values:
 - `"Localhost"` indicates a profile defined in a file on the node should be used. The file's location relative to <kubelet-root-dir>/seccomp.
 - `"RuntimeDefault"` represents the default container runtime seccomp profile.
 - `"Unconfined"` indicates no seccomp profile is applied (A.K.A. unconfined).
*/
type: 'Localhost' | 'RuntimeDefault' | 'Unconfined';
}

/**
* Create a new io_k8s_api_core_v1_SeccompProfile with default values
*/
export function createio_k8s_api_core_v1_SeccompProfile(data?: Partial<io_k8s_api_core_v1_SeccompProfile>): io_k8s_api_core_v1_SeccompProfile {
  return {
    localhostProfile: data?.localhostProfile !== undefined ? data.localhostProfile : '',
    type: data?.type !== undefined ? data.type : '',
  };
}
