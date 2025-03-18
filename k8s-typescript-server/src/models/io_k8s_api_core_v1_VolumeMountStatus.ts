/**
* VolumeMountStatus shows status of volume mounts.
*/
export interface io_k8s_api_core_v1_VolumeMountStatus {
/**
* ReadOnly corresponds to the original VolumeMount.
*/
readOnly?: boolean;
/**
* RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
*/
recursiveReadOnly?: string;
/**
* MountPath corresponds to the original VolumeMount.
*/
mountPath: string;
/**
* Name corresponds to the name of the original VolumeMount.
*/
name: string;
}

/**
* Create a new io_k8s_api_core_v1_VolumeMountStatus with default values
*/
export function createio_k8s_api_core_v1_VolumeMountStatus(data?: Partial<io_k8s_api_core_v1_VolumeMountStatus>): io_k8s_api_core_v1_VolumeMountStatus {
  return {
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    recursiveReadOnly: data?.recursiveReadOnly !== undefined ? data.recursiveReadOnly : '',
    mountPath: data?.mountPath !== undefined ? data.mountPath : '',
    name: data?.name !== undefined ? data.name : '',
  };
}
