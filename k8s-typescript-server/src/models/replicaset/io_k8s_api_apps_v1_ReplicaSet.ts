/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
* @resourceType replicaset
* @kind Replicaset
*/
export interface io_k8s_api_apps_v1_ReplicaSet {
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
metadata?: { resourceVersion?: string; deletionGracePeriodSeconds?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; generation?: number; deletionTimestamp?: Date; finalizers?: string[]; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; labels?: Record<string, any>; namespace?: string; generateName?: string; name?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date };
/**
* ReplicaSetSpec is the specification of a ReplicaSet.
* @isObject
*/
spec?: { minReadySeconds?: number; replicas?: number; selector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; template?: { metadata?: { selfLink?: string; finalizers?: string[]; generation?: number; uid?: string; deletionGracePeriodSeconds?: number; name?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionTimestamp?: Date }; spec?: Record<string, any> } };
/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
* @isObject
*/
status?: { observedGeneration?: number; readyReplicas?: number; replicas: number; availableReplicas?: number; conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; fullyLabeledReplicas?: number };
}

/**
* Create a new Replicaset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSet(data?: Partial<io_k8s_api_apps_v1_ReplicaSet>): io_k8s_api_apps_v1_ReplicaSet {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {} },
   status: data?.status !== undefined ? data.status : { replicas: 0 },
 };
}
