/**
* APIResource specifies the name of a resource and whether it is namespaced.
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIResource {
/**
* categories is a list of the grouped resources this resource belongs to (e.g. 'all')
*/
categories?: string[];
/**
* group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".
*/
group?: string;
/**
* kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
*/
kind: string;
/**
* name is the plural name of the resource.
*/
name: string;
/**
* shortNames is a list of suggested short names of the resource.
*/
shortNames?: string[];
/**
* version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".
*/
version?: string;
/**
* namespaced indicates if a resource is namespaced or not.
*/
namespaced: boolean;
/**
* singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
*/
singularName: string;
/**
* The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.
*/
storageVersionHash?: string;
/**
* verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)
*/
verbs: string[];
}

/**
* Create a new io_k8s_apimachinery_pkg_apis_meta_v1_APIResource with default values
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIResource(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIResource>): io_k8s_apimachinery_pkg_apis_meta_v1_APIResource {
  return {
    categories: data?.categories !== undefined ? data.categories : [],
    group: data?.group !== undefined ? data.group : '',
    kind: data?.kind !== undefined ? data.kind : '',
    name: data?.name !== undefined ? data.name : '',
    shortNames: data?.shortNames !== undefined ? data.shortNames : [],
    version: data?.version !== undefined ? data.version : '',
    namespaced: data?.namespaced !== undefined ? data.namespaced : false,
    singularName: data?.singularName !== undefined ? data.singularName : '',
    storageVersionHash: data?.storageVersionHash !== undefined ? data.storageVersionHash : '',
    verbs: data?.verbs !== undefined ? data.verbs : [],
  };
}
