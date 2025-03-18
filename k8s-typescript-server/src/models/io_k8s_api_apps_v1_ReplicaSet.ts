/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
*/
export interface io_k8s_api_apps_v1_ReplicaSet {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { resourceVersion?: string; annotations?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; uid?: string; name?: string; creationTimestamp?: Date; labels?: Record<string, any>; finalizers?: string[]; generateName?: string; generation?: number; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date };
/**
* ReplicaSetSpec is the specification of a ReplicaSet.
*/
spec?: { selector: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; template?: { metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; deletionTimestamp?: Date; generation?: number; uid?: string; generateName?: string; name?: string; resourceVersion?: string; selfLink?: string }; spec?: Record<string, any> }; minReadySeconds?: number; replicas?: number };
/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
*/
status?: { observedGeneration?: number; readyReplicas?: number; replicas: number; availableReplicas?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; fullyLabeledReplicas?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_apps_v1_ReplicaSet with default values
*/
export function createio_k8s_api_apps_v1_ReplicaSet(data?: Partial<io_k8s_api_apps_v1_ReplicaSet>): io_k8s_api_apps_v1_ReplicaSet {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { selector: {} },
    status: data?.status !== undefined ? data.status : { replicas: 0 },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
