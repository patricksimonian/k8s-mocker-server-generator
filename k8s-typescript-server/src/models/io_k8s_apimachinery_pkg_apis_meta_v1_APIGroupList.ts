/**
* APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* groups is a list of APIGroup.
*/
groups: Array<{ name: string; preferredVersion?: { groupVersion: string; version: string }; serverAddressByClientCIDRs?: Array<{ clientCIDR: string; serverAddress: string }>; versions: Array<{ groupVersion: string; version: string }>; apiVersion?: string; kind?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList with default values
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList>): io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    groups: data?.groups !== undefined ? data.groups : [],
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
