/**
* ReplicationControllerList is a collection of replication controllers.
*/
export interface io_k8s_api_core_v1_ReplicationControllerList {
/**
* List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { creationTimestamp?: Date; generateName?: string; generation?: number; namespace?: string; annotations?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; deletionTimestamp?: Date; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; resourceVersion?: string; selfLink?: string }; spec?: { minReadySeconds?: number; replicas?: number; selector?: Record<string, any>; template?: { metadata?: { uid?: string; creationTimestamp?: Date; generateName?: string; name?: string; namespace?: string; annotations?: Record<string, any>; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; resourceVersion?: string; generation?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }> }; spec?: Record<string, any> } }; status?: { conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number; availableReplicas?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_core_v1_ReplicationControllerList with default values
*/
export function createio_k8s_api_core_v1_ReplicationControllerList(data?: Partial<io_k8s_api_core_v1_ReplicationControllerList>): io_k8s_api_core_v1_ReplicationControllerList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
