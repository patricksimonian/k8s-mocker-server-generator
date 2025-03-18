/**
* VolumeResourceRequirements describes the storage resource requirements for a volume.
*/
export interface io_k8s_api_core_v1_VolumeResourceRequirements {
/**
* Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
*/
limits?: Record<string, any>;
/**
* Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
*/
requests?: Record<string, any>;
}

/**
* Create a new io_k8s_api_core_v1_VolumeResourceRequirements with default values
*/
export function createio_k8s_api_core_v1_VolumeResourceRequirements(data?: Partial<io_k8s_api_core_v1_VolumeResourceRequirements>): io_k8s_api_core_v1_VolumeResourceRequirements {
  return {
    limits: data?.limits !== undefined ? data.limits : {},
    requests: data?.requests !== undefined ? data.requests : {},
  };
}
