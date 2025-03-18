/**
* ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR {
/**
* The CIDR with which clients can match their IP to figure out the server address that they should use.
*/
clientCIDR: string;
/**
* Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
*/
serverAddress: string;
}

/**
* Create a new io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR with default values
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR>): io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR {
  return {
    clientCIDR: data?.clientCIDR !== undefined ? data.clientCIDR : '',
    serverAddress: data?.serverAddress !== undefined ? data.serverAddress : '',
  };
}
