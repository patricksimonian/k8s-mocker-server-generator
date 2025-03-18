/**
* Local represents directly-attached storage with node affinity
*/
export interface io_k8s_api_core_v1_LocalVolumeSource {
/**
* fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a filesystem if unspecified.
*/
fsType?: string;
/**
* path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
*/
path: string;
}

/**
* Create a new io_k8s_api_core_v1_LocalVolumeSource with default values
*/
export function createio_k8s_api_core_v1_LocalVolumeSource(data?: Partial<io_k8s_api_core_v1_LocalVolumeSource>): io_k8s_api_core_v1_LocalVolumeSource {
  return {
    fsType: data?.fsType !== undefined ? data.fsType : '',
    path: data?.path !== undefined ? data.path : '',
  };
}
