/**
* ReplicaSetList is a collection of ReplicaSets.
*/
export interface io_k8s_api_apps_v1_ReplicaSetList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
*/
items: Array<{ status?: { availableReplicas?: number; conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>; fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number }; apiVersion?: string; kind?: string; metadata?: { annotations?: Record<string, any>; generateName?: string; generation?: number; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; creationTimestamp?: Date; deletionTimestamp?: Date; selfLink?: string; uid?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string }; spec?: { template?: { metadata?: { deletionTimestamp?: Date; name?: string; uid?: string; generateName?: string; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string }; spec?: Record<string, any> }; minReadySeconds?: number; replicas?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }>;
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
* Create a new io_k8s_api_apps_v1_ReplicaSetList with default values
*/
export function createio_k8s_api_apps_v1_ReplicaSetList(data?: Partial<io_k8s_api_apps_v1_ReplicaSetList>): io_k8s_api_apps_v1_ReplicaSetList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
