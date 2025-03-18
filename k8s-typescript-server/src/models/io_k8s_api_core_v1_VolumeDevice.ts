/**
* volumeDevice describes a mapping of a raw block device within a container.
*/
export interface io_k8s_api_core_v1_VolumeDevice {
/**
* devicePath is the path inside of the container that the device will be mapped to.
*/
devicePath: string;
/**
* name must match the name of a persistentVolumeClaim in the pod
*/
name: string;
}

/**
* Create a new io_k8s_api_core_v1_VolumeDevice with default values
*/
export function createio_k8s_api_core_v1_VolumeDevice(data?: Partial<io_k8s_api_core_v1_VolumeDevice>): io_k8s_api_core_v1_VolumeDevice {
  return {
    devicePath: data?.devicePath !== undefined ? data.devicePath : '',
    name: data?.name !== undefined ? data.name : '',
  };
}
