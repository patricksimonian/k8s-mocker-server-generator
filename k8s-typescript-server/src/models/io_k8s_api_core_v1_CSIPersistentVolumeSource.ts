/**
* Represents storage that is managed by an external CSI volume driver
*/
export interface io_k8s_api_core_v1_CSIPersistentVolumeSource {
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
nodeExpandSecretRef?: { name?: string; namespace?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
nodeStageSecretRef?: { name?: string; namespace?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
controllerExpandSecretRef?: { namespace?: string; name?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
controllerPublishSecretRef?: { name?: string; namespace?: string };
/**
* driver is the name of the driver to use for this volume. Required.
*/
driver: string;
/**
* volumeAttributes of the volume to publish.
*/
volumeAttributes?: Record<string, any>;
/**
* volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
*/
volumeHandle: string;
/**
* fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
*/
fsType?: string;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
nodePublishSecretRef?: { name?: string; namespace?: string };
/**
* readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
*/
readOnly?: boolean;
}

/**
* Create a new io_k8s_api_core_v1_CSIPersistentVolumeSource with default values
*/
export function createio_k8s_api_core_v1_CSIPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIPersistentVolumeSource>): io_k8s_api_core_v1_CSIPersistentVolumeSource {
  return {
    nodeExpandSecretRef: data?.nodeExpandSecretRef !== undefined ? data.nodeExpandSecretRef : {},
    nodeStageSecretRef: data?.nodeStageSecretRef !== undefined ? data.nodeStageSecretRef : {},
    controllerExpandSecretRef: data?.controllerExpandSecretRef !== undefined ? data.controllerExpandSecretRef : {},
    controllerPublishSecretRef: data?.controllerPublishSecretRef !== undefined ? data.controllerPublishSecretRef : {},
    driver: data?.driver !== undefined ? data.driver : '',
    volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
    volumeHandle: data?.volumeHandle !== undefined ? data.volumeHandle : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
    nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : {},
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
  };
}
