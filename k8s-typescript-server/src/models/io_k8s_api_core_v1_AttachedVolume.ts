/**
* AttachedVolume describes a volume attached to a node
*/
export interface io_k8s_api_core_v1_AttachedVolume {
/**
* DevicePath represents the device path where the volume should be available
*/
devicePath: string;
/**
* Name of the attached volume
*/
name: string;
}

/**
* Create a new io_k8s_api_core_v1_AttachedVolume with default values
*/
export function createio_k8s_api_core_v1_AttachedVolume(data?: Partial<io_k8s_api_core_v1_AttachedVolume>): io_k8s_api_core_v1_AttachedVolume {
  return {
    devicePath: data?.devicePath !== undefined ? data.devicePath : '',
    name: data?.name !== undefined ? data.name : '',
  };
}
