/**
* Binding ties one object to another; for example, a pod is bound to a node by a scheduler.
*/
export interface io_k8s_api_core_v1_Binding {
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
*/
metadata?: { creationTimestamp?: Date; name?: string; resourceVersion?: string; selfLink?: string; deletionTimestamp?: Date; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; finalizers?: string[]; generateName?: string; generation?: number; labels?: Record<string, any>; namespace?: string };
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
*/
target: { kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string };
}

/**
* Create a new io_k8s_api_core_v1_Binding with default values
*/
export function createio_k8s_api_core_v1_Binding(data?: Partial<io_k8s_api_core_v1_Binding>): io_k8s_api_core_v1_Binding {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    target: data?.target !== undefined ? data.target : {},
  };
}
