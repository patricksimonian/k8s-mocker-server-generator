/**
* APIGroup contains the name, the supported versions, and the preferred version of a group.
* @resourceType apigroup
* @kind Apigroup
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup {
/**
* GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
* @isObject
*/
preferredVersion?: { groupVersion: string; version: string };
/**
* a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
* @isArray
*/
serverAddressByClientCIDRs?: Array<{ clientCIDR: string; serverAddress: string }>;
/**
* versions are the versions supported in this group.
* @required
* @isArray
*/
versions: Array<{ groupVersion: string; version: string }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* name is the name of the group.
* @required
*/
name: string;
}

/**
* Create a new Apigroup with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIGroup(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup>): io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup {
 return {
   preferredVersion: data?.preferredVersion !== undefined ? data.preferredVersion : { groupVersion: '', version: '' },
   serverAddressByClientCIDRs: data?.serverAddressByClientCIDRs !== undefined ? data.serverAddressByClientCIDRs : [],
   versions: data?.versions !== undefined ? data.versions : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
