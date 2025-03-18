/**
* AttachedVolume describes a volume attached to a node
* @resourceType attachedvolume
* @kind Attachedvolume
*/
export interface io_k8s_api_core_v1_AttachedVolume {
/**
* DevicePath represents the device path where the volume should be available
* @required
*/
devicePath: string;
/**
* Name of the attached volume
* @required
*/
name: string;
}

/**
* Create a new Attachedvolume with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_AttachedVolume instance with defaults applied
*/
export function createio_k8s_api_core_v1_AttachedVolume(data?: Partial<io_k8s_api_core_v1_AttachedVolume>): io_k8s_api_core_v1_AttachedVolume {
 return {
   devicePath: data?.devicePath !== undefined ? data.devicePath : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
