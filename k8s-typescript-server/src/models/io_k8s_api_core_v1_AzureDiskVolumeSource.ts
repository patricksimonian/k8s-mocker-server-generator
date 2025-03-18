/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
*/
export interface io_k8s_api_core_v1_AzureDiskVolumeSource {
/**
* diskName is the Name of the data disk in the blob storage
*/
diskName: string;
/**
* diskURI is the URI of data disk in the blob storage
*/
diskURI: string;
/**
* fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
/**
* kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared

Possible enum values:
 - `"Dedicated"`
 - `"Managed"`
 - `"Shared"`
*/
kind?: 'Dedicated' | 'Managed' | 'Shared';
/**
* readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* cachingMode is the Host Caching mode: None, Read Only, Read Write.

Possible enum values:
 - `"None"`
 - `"ReadOnly"`
 - `"ReadWrite"`
*/
cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite';
}

/**
* Create a new io_k8s_api_core_v1_AzureDiskVolumeSource with default values
*/
export function createio_k8s_api_core_v1_AzureDiskVolumeSource(data?: Partial<io_k8s_api_core_v1_AzureDiskVolumeSource>): io_k8s_api_core_v1_AzureDiskVolumeSource {
  return {
    diskName: data?.diskName !== undefined ? data.diskName : '',
    diskURI: data?.diskURI !== undefined ? data.diskURI : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
    kind: data?.kind !== undefined ? data.kind : '',
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    cachingMode: data?.cachingMode !== undefined ? data.cachingMode : '',
  };
}
