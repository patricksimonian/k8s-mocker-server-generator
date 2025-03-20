/**
* Lease defines a lease concept.
* @resourceType lease
* @kind Lease
*/
export interface io_k8s_api_coordination_v1_Lease {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionTimestamp?: Date; labels?: Record<string, any>; uid?: string; selfLink?: string; annotations?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; generation?: number };
/**
* LeaseSpec is a specification of a Lease.
* @isObject
*/
spec?: { leaseTransitions?: number; preferredHolder?: string; renewTime?: Date; strategy?: string; acquireTime?: Date; holderIdentity?: string; leaseDurationSeconds?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Lease with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_coordination_v1_Lease instance with defaults applied
*/
export function createio_k8s_api_coordination_v1_Lease(data?: Partial<io_k8s_api_coordination_v1_Lease>): io_k8s_api_coordination_v1_Lease {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
