/**
* CSINodeSpec holds information about the specification of all CSI drivers installed on a node
*/
export interface io_k8s_api_storage_v1_CSINodeSpec {
/**
* drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
*/
drivers: Array<{ allocatable?: { count?: number }; name: string; nodeID: string; topologyKeys?: string[] }>;
}

/**
* Create a new io_k8s_api_storage_v1_CSINodeSpec with default values
*/
export function createio_k8s_api_storage_v1_CSINodeSpec(data?: Partial<io_k8s_api_storage_v1_CSINodeSpec>): io_k8s_api_storage_v1_CSINodeSpec {
  return {
    drivers: data?.drivers !== undefined ? data.drivers : [],
  };
}
