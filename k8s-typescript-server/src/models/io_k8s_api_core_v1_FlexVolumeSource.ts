/**
* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
*/
export interface io_k8s_api_core_v1_FlexVolumeSource {
/**
* readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
secretRef?: { name?: string };
/**
* driver is the name of the driver to use for this volume.
*/
driver: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
*/
fsType?: string;
/**
* options is Optional: this field holds extra command options if any.
*/
options?: Record<string, any>;
}

/**
* Create a new io_k8s_api_core_v1_FlexVolumeSource with default values
*/
export function createio_k8s_api_core_v1_FlexVolumeSource(data?: Partial<io_k8s_api_core_v1_FlexVolumeSource>): io_k8s_api_core_v1_FlexVolumeSource {
  return {
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    driver: data?.driver !== undefined ? data.driver : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
    options: data?.options !== undefined ? data.options : {},
  };
}
