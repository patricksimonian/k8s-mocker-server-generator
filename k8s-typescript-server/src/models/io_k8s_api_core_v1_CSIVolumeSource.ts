/**
* Represents a source location of a volume to mount, managed by an external CSI driver
*/
export interface io_k8s_api_core_v1_CSIVolumeSource {
/**
* readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
*/
readOnly?: boolean;
/**
* volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
*/
volumeAttributes?: Record<string, any>;
/**
* driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
*/
driver: string;
/**
* fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
*/
fsType?: string;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
nodePublishSecretRef?: { name?: string };
}

/**
* Create a new io_k8s_api_core_v1_CSIVolumeSource with default values
*/
export function createio_k8s_api_core_v1_CSIVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIVolumeSource>): io_k8s_api_core_v1_CSIVolumeSource {
  return {
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
    driver: data?.driver !== undefined ? data.driver : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
    nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : {},
  };
}
