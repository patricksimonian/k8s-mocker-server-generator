/**
* ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
* @resourceType serveraddressbyclientcidr
* @kind Serveraddressbyclientcidr
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR {
/**
* The CIDR with which clients can match their IP to figure out the server address that they should use.
* @required
*/
clientCIDR: string;
/**
* Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
* @required
*/
serverAddress: string;
}

/**
* Create a new Serveraddressbyclientcidr with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR>): io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR {
 return {
   clientCIDR: data?.clientCIDR !== undefined ? data.clientCIDR : '',
   serverAddress: data?.serverAddress !== undefined ? data.serverAddress : '',
 };
}
