/**
* Represents storage that is managed by an external CSI volume driver
* @resourceType csipersistentvolumesource
* @kind Csipersistentvolumesource
*/
export interface io_k8s_api_core_v1_CSIPersistentVolumeSource {
/**
* volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
* @required
*/
volumeHandle: string;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
nodePublishSecretRef?: { namespace?: string; name?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
nodeStageSecretRef?: { name?: string; namespace?: string };
/**
* readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
*/
readOnly?: boolean;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
controllerExpandSecretRef?: { name?: string; namespace?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
controllerPublishSecretRef?: { namespace?: string; name?: string };
/**
* driver is the name of the driver to use for this volume. Required.
* @required
*/
driver: string;
/**
* fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
*/
fsType?: string;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
nodeExpandSecretRef?: { namespace?: string; name?: string };
/**
* volumeAttributes of the volume to publish.
*/
volumeAttributes?: Record<string, any>;
}

/**
* Create a new Csipersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CSIPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CSIPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIPersistentVolumeSource>): io_k8s_api_core_v1_CSIPersistentVolumeSource {
 return {
   volumeHandle: data?.volumeHandle !== undefined ? data.volumeHandle : '',
   nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : {},
   nodeStageSecretRef: data?.nodeStageSecretRef !== undefined ? data.nodeStageSecretRef : {},
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   controllerExpandSecretRef: data?.controllerExpandSecretRef !== undefined ? data.controllerExpandSecretRef : {},
   controllerPublishSecretRef: data?.controllerPublishSecretRef !== undefined ? data.controllerPublishSecretRef : {},
   driver: data?.driver !== undefined ? data.driver : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   nodeExpandSecretRef: data?.nodeExpandSecretRef !== undefined ? data.nodeExpandSecretRef : {},
   volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
 };
}
