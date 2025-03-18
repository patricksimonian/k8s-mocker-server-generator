/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
*/
export interface io_k8s_api_core_v1_RBDPersistentVolumeSource {
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
secretRef?: { name?: string; namespace?: string };
/**
* user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
user?: string;
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
*/
fsType?: string;
/**
* image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
image: string;
/**
* keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
*/
keyring?: string;
/**
* monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
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
}

/**
* Create a new io_k8s_api_core_v1_RBDPersistentVolumeSource with default values
*/
export function createio_k8s_api_core_v1_RBDPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_RBDPersistentVolumeSource>): io_k8s_api_core_v1_RBDPersistentVolumeSource {
  return {
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    user: data?.user !== undefined ? data.user : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
    image: data?.image !== undefined ? data.image : '',
    keyring: data?.keyring !== undefined ? data.keyring : '',
    monitors: data?.monitors !== undefined ? data.monitors : [],
    pool: data?.pool !== undefined ? data.pool : '',
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
  };
}
