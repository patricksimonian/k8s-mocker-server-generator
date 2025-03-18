/**
* Represents a StorageOS persistent volume resource.
*/
export interface io_k8s_api_core_v1_StorageOSVolumeSource {
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
secretRef?: { name?: string };
/**
* volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
*/
volumeName?: string;
/**
* volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
*/
volumeNamespace?: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
}

/**
* Create a new io_k8s_api_core_v1_StorageOSVolumeSource with default values
*/
export function createio_k8s_api_core_v1_StorageOSVolumeSource(data?: Partial<io_k8s_api_core_v1_StorageOSVolumeSource>): io_k8s_api_core_v1_StorageOSVolumeSource {
  return {
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    volumeName: data?.volumeName !== undefined ? data.volumeName : '',
    volumeNamespace: data?.volumeNamespace !== undefined ? data.volumeNamespace : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
  };
}
