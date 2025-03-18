/**
* NodeAddress contains information for the node's address.
* @resourceType nodeaddress
* @kind Nodeaddress
*/
export interface io_k8s_api_core_v1_NodeAddress {
/**
* The node address.
* @required
*/
address: string;
/**
* Node address type, one of Hostname, ExternalIP or InternalIP.
* @required
*/
type: string;
}

/**
* Create a new Nodeaddress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeAddress instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeAddress(data?: Partial<io_k8s_api_core_v1_NodeAddress>): io_k8s_api_core_v1_NodeAddress {
 return {
   address: data?.address !== undefined ? data.address : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
