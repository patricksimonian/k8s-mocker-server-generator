/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
* @resourceType rbdpersistentvolumesource
* @kind Rbdpersistentvolumesource
*/
export interface io_k8s_api_core_v1_RBDPersistentVolumeSource {
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
*/
fsType?: string;
/**
* image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
* @required
*/
image: string;
/**
* keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
keyring?: string;
/**
* monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
* @required
* @isArray
*/
monitors: string[];
/**
* pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
pool?: string;
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
readOnly?: boolean;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
secretRef?: { namespace?: string; name?: string };
/**
* user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
user?: string;
}

/**
* Create a new Rbdpersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_RBDPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_RBDPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_RBDPersistentVolumeSource>): io_k8s_api_core_v1_RBDPersistentVolumeSource {
 return {
   fsType: data?.fsType !== undefined ? data.fsType : '',
   image: data?.image !== undefined ? data.image : '',
   keyring: data?.keyring !== undefined ? data.keyring : '',
   monitors: data?.monitors !== undefined ? data.monitors : [],
   pool: data?.pool !== undefined ? data.pool : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
   user: data?.user !== undefined ? data.user : '',
 };
}
