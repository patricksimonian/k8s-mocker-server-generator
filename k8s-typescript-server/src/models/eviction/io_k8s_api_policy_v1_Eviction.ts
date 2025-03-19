/**
* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
* @resourceType eviction
* @kind Eviction
*/
export interface io_k8s_api_policy_v1_Eviction {
/**
* DeleteOptions may be provided when deleting an API object.
* @isObject
*/
deleteOptions?: { kind?: string; orphanDependents?: boolean; preconditions?: { resourceVersion?: string; uid?: string }; propagationPolicy?: string; apiVersion?: string; dryRun?: string[]; gracePeriodSeconds?: number; ignoreStoreReadErrorWithClusterBreakingPotential?: boolean };
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; generation?: number; finalizers?: string[]; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; namespace?: string; uid?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; name?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Eviction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_Eviction instance with defaults applied
*/
export function createio_k8s_api_policy_v1_Eviction(data?: Partial<io_k8s_api_policy_v1_Eviction>): io_k8s_api_policy_v1_Eviction {
 return {
   deleteOptions: data?.deleteOptions !== undefined ? data.deleteOptions : {},
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
