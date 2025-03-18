/**
* NodeAddress contains information for the node's address.
*/
export interface io_k8s_api_core_v1_NodeAddress {
/**
* The node address.
*/
address: string;
/**
* Node address type, one of Hostname, ExternalIP or InternalIP.
*/
type: string;
}

/**
* Create a new io_k8s_api_core_v1_NodeAddress with default values
*/
export function createio_k8s_api_core_v1_NodeAddress(data?: Partial<io_k8s_api_core_v1_NodeAddress>): io_k8s_api_core_v1_NodeAddress {
  return {
    address: data?.address !== undefined ? data.address : '',
    type: data?.type !== undefined ? data.type : '',
  };
}
