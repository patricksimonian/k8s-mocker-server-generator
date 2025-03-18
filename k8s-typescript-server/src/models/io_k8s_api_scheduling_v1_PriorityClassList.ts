/**
* PriorityClassList is a collection of priority classes.
*/
export interface io_k8s_api_scheduling_v1_PriorityClassList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of PriorityClasses
*/
items: Array<{ description?: string; globalDefault?: boolean; kind?: string; metadata?: { annotations?: Record<string, any>; generation?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string; uid?: string; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; name?: string; selfLink?: string }; preemptionPolicy?: 'Never' | 'PreemptLowerPriority'; value: number; apiVersion?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new io_k8s_api_scheduling_v1_PriorityClassList with default values
*/
export function createio_k8s_api_scheduling_v1_PriorityClassList(data?: Partial<io_k8s_api_scheduling_v1_PriorityClassList>): io_k8s_api_scheduling_v1_PriorityClassList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
