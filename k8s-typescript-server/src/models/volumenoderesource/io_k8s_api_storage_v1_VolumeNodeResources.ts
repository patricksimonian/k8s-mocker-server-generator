/**
* VolumeNodeResources is a set of resource limits for scheduling of volumes.
* @resourceType volumenoderesource
* @kind Volumenoderesource
*/
export interface io_k8s_api_storage_v1_VolumeNodeResources {
/**
* count indicates the maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.
*/
count?: number;
}

/**
* Create a new Volumenoderesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeNodeResources instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeNodeResources(data?: Partial<io_k8s_api_storage_v1_VolumeNodeResources>): io_k8s_api_storage_v1_VolumeNodeResources {
 return {
   count: data?.count !== undefined ? data.count : 0,
 };
}
