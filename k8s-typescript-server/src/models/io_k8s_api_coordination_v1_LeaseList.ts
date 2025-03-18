/**
* LeaseList is a list of Lease objects.
*/
export interface io_k8s_api_coordination_v1_LeaseList {
/**
* items is a list of schema objects.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { finalizers?: string[]; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; generateName?: string; namespace?: string; resourceVersion?: string; name?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; annotations?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; uid?: string }; spec?: { preferredHolder?: string; renewTime?: Date; strategy?: string; acquireTime?: Date; holderIdentity?: string; leaseDurationSeconds?: number; leaseTransitions?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_coordination_v1_LeaseList with default values
*/
export function createio_k8s_api_coordination_v1_LeaseList(data?: Partial<io_k8s_api_coordination_v1_LeaseList>): io_k8s_api_coordination_v1_LeaseList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
