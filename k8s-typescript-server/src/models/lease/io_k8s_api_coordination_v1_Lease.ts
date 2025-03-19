/**
* Lease defines a lease concept.
* @resourceType lease
* @kind Lease
*/
export interface io_k8s_api_coordination_v1_Lease {
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
metadata?: { finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generation?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; deletionTimestamp?: Date; generateName?: string; creationTimestamp?: Date; selfLink?: string; uid?: string; name?: string; resourceVersion?: string };
/**
* LeaseSpec is a specification of a Lease.
* @isObject
*/
spec?: { acquireTime?: Date; holderIdentity?: string; leaseDurationSeconds?: number; leaseTransitions?: number; preferredHolder?: string; renewTime?: Date; strategy?: string };
}

/**
* Create a new Lease with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_coordination_v1_Lease instance with defaults applied
*/
export function createio_k8s_api_coordination_v1_Lease(data?: Partial<io_k8s_api_coordination_v1_Lease>): io_k8s_api_coordination_v1_Lease {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
