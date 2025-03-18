/**
* GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery {
/**
* groupVersion specifies the API group and version in the form "group/version"
*/
groupVersion: string;
/**
* version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
*/
version: string;
}

/**
* Create a new io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery with default values
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery>): io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery {
  return {
    groupVersion: data?.groupVersion !== undefined ? data.groupVersion : '',
    version: data?.version !== undefined ? data.version : '',
  };
}
