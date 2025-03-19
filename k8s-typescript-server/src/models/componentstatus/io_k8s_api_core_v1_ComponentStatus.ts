/**
* ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
* @resourceType componentstatus
* @kind Componentstatus
*/
export interface io_k8s_api_core_v1_ComponentStatus {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of component conditions observed
* @isArray
*/
conditions?: Array<{ type: string; error?: string; message?: string; status: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generateName?: string; generation?: number; namespace?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; selfLink?: string; finalizers?: string[]; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }> };
}

/**
* Create a new Componentstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ComponentStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ComponentStatus(data?: Partial<io_k8s_api_core_v1_ComponentStatus>): io_k8s_api_core_v1_ComponentStatus {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   conditions: data?.conditions !== undefined ? data.conditions : [],
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
