/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus {
/**
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
*/
acceptedNames?: { shortNames?: string[]; singular?: string; categories?: string[]; kind: string; listKind?: string; plural: string };
/**
* conditions indicate state for particular aspects of a CustomResourceDefinition
*/
conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>;
/**
* storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
*/
storedVersions?: string[];
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus {
  return {
    acceptedNames: data?.acceptedNames !== undefined ? data.acceptedNames : { kind: '', plural: '' },
    conditions: data?.conditions !== undefined ? data.conditions : [],
    storedVersions: data?.storedVersions !== undefined ? data.storedVersions : [],
  };
}
