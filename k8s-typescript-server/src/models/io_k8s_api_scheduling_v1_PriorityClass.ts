/**
* PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
*/
export interface io_k8s_api_scheduling_v1_PriorityClass {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* description is an arbitrary string that usually provides guidelines on when this priority class should be used.
*/
description?: string;
/**
* globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
*/
globalDefault?: boolean;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionGracePeriodSeconds?: number; generation?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; selfLink?: string; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; resourceVersion?: string; uid?: string; name?: string; namespace?: string };
/**
* preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.

Possible enum values:
 - `"Never"` means that pod never preempts other pods with lower priority.
 - `"PreemptLowerPriority"` means that pod can preempt other pods with lower priority.
*/
preemptionPolicy?: 'Never' | 'PreemptLowerPriority';
/**
* value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
*/
value: number;
}

/**
* Create a new io_k8s_api_scheduling_v1_PriorityClass with default values
*/
export function createio_k8s_api_scheduling_v1_PriorityClass(data?: Partial<io_k8s_api_scheduling_v1_PriorityClass>): io_k8s_api_scheduling_v1_PriorityClass {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    description: data?.description !== undefined ? data.description : '',
    globalDefault: data?.globalDefault !== undefined ? data.globalDefault : false,
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    preemptionPolicy: data?.preemptionPolicy !== undefined ? data.preemptionPolicy : '',
    value: data?.value !== undefined ? data.value : 0,
  };
}
