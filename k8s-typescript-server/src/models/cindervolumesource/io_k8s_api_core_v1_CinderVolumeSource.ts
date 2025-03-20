/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
* @resourceType cindervolumesource
* @kind Cindervolumesource
*/
export interface io_k8s_api_core_v1_CinderVolumeSource {
/**
* volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
* @required
*/
volumeID: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
*/
fsType?: string;
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
*/
readOnly?: boolean;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
* @isObject
*/
secretRef?: { name?: string };
}

/**
* Create a new Cindervolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CinderVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CinderVolumeSource(data?: Partial<io_k8s_api_core_v1_CinderVolumeSource>): io_k8s_api_core_v1_CinderVolumeSource {
 return {
   volumeID: data?.volumeID !== undefined ? data.volumeID : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
 };
}
