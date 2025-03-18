/**
* LimitRange sets resource usage limits for each kind of resource in a Namespace.
* @resourceType limitrange
* @kind Limitrange
*/
export interface io_k8s_api_core_v1_LimitRange {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { labels?: Record<string, any>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; uid?: string; generation?: number; name?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; annotations?: Record<string, any> };
/**
* LimitRangeSpec defines a min/max usage limit for resources that match on kind.
* @isObject
*/
spec?: { limits: Array<{ default?: Record<string, any>; defaultRequest?: Record<string, any>; max?: Record<string, any>; maxLimitRequestRatio?: Record<string, any>; min?: Record<string, any>; type: string }> };
}

/**
* Create a new Limitrange with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LimitRange instance with defaults applied
*/
export function createio_k8s_api_core_v1_LimitRange(data?: Partial<io_k8s_api_core_v1_LimitRange>): io_k8s_api_core_v1_LimitRange {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { limits: [] },
 };
}
