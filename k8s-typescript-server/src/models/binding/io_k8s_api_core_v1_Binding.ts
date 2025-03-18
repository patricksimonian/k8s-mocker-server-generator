/**
* Binding ties one object to another; for example, a pod is bound to a node by a scheduler.
* @resourceType binding
* @kind Binding
*/
export interface io_k8s_api_core_v1_Binding {
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @required
* @isObject
*/
target: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string };
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
metadata?: { generateName?: string; finalizers?: string[]; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; selfLink?: string; creationTimestamp?: Date; generation?: number; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; uid?: string; annotations?: Record<string, any> };
}

/**
* Create a new Binding with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Binding instance with defaults applied
*/
export function createio_k8s_api_core_v1_Binding(data?: Partial<io_k8s_api_core_v1_Binding>): io_k8s_api_core_v1_Binding {
 return {
   target: data?.target !== undefined ? data.target : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
