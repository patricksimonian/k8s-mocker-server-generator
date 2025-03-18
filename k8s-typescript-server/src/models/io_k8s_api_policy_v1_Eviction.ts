/**
* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
*/
export interface io_k8s_api_policy_v1_Eviction {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* DeleteOptions may be provided when deleting an API object.
*/
deleteOptions?: { kind?: string; orphanDependents?: boolean; preconditions?: { resourceVersion?: string; uid?: string }; propagationPolicy?: string; apiVersion?: string; dryRun?: string[]; gracePeriodSeconds?: number; ignoreStoreReadErrorWithClusterBreakingPotential?: boolean };
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; creationTimestamp?: Date; finalizers?: string[]; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; name?: string; namespace?: string; resourceVersion?: string; generateName?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string };
}

/**
* Create a new io_k8s_api_policy_v1_Eviction with default values
*/
export function createio_k8s_api_policy_v1_Eviction(data?: Partial<io_k8s_api_policy_v1_Eviction>): io_k8s_api_policy_v1_Eviction {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    deleteOptions: data?.deleteOptions !== undefined ? data.deleteOptions : {},
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
