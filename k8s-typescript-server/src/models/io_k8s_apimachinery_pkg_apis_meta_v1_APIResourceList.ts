/**
* APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList {
/**
* resources contains the name of the resources and if they are namespaced.
*/
resources: Array<{ namespaced: boolean; singularName: string; categories?: string[]; group?: string; name: string; verbs: string[]; version?: string; kind: string; shortNames?: string[]; storageVersionHash?: string }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* groupVersion is the group and version this APIResourceList is for.
*/
groupVersion: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList with default values
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList>): io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList {
  return {
    resources: data?.resources !== undefined ? data.resources : [],
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    groupVersion: data?.groupVersion !== undefined ? data.groupVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
