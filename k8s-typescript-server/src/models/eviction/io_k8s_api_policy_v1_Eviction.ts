/**
* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
* @resourceType eviction
* @kind Eviction
*/
export interface io_k8s_api_policy_v1_Eviction {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; selfLink?: string; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; name?: string; resourceVersion?: string; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; namespace?: string; generation?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* DeleteOptions may be provided when deleting an API object.
* @isObject
*/
deleteOptions?: { kind?: string; orphanDependents?: boolean; preconditions?: { resourceVersion?: string; uid?: string }; propagationPolicy?: string; apiVersion?: string; dryRun?: string[]; gracePeriodSeconds?: number; ignoreStoreReadErrorWithClusterBreakingPotential?: boolean };
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Eviction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_Eviction instance with defaults applied
*/
export function createio_k8s_api_policy_v1_Eviction(data?: Partial<io_k8s_api_policy_v1_Eviction>): io_k8s_api_policy_v1_Eviction {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   deleteOptions: data?.deleteOptions !== undefined ? data.deleteOptions : {},
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
