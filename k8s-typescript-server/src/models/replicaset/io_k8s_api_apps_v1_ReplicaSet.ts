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
metadata?: { deletionTimestamp?: Date; finalizers?: string[]; generation?: number; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; namespace?: string; deletionGracePeriodSeconds?: number; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string; selfLink?: string; uid?: string };
/**
* ReplicaSetSpec is the specification of a ReplicaSet.
* @isObject
*/
spec?: { selector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; template?: { metadata?: { deletionTimestamp?: Date; uid?: string; annotations?: Record<string, any>; finalizers?: string[]; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; name?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; resourceVersion?: string; selfLink?: string }; spec?: Record<string, any> }; minReadySeconds?: number; replicas?: number };
/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
* @isObject
*/
status?: { availableReplicas?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number };
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
