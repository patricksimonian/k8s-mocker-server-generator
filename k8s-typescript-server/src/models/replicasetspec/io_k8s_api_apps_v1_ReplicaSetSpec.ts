/**
* ReplicaSetSpec is the specification of a ReplicaSet.
* @resourceType replicasetspec
* @kind Replicasetspec
*/
export interface io_k8s_api_apps_v1_ReplicaSetSpec {
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
*/
replicas?: number;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @required
* @isObject
*/
selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @isObject
*/
template?: { metadata?: { name?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; selfLink?: string; annotations?: Record<string, any>; labels?: Record<string, any>; namespace?: string; uid?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string }; spec?: Record<string, any> };
}

/**
* Create a new Replicasetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSetSpec(data?: Partial<io_k8s_api_apps_v1_ReplicaSetSpec>): io_k8s_api_apps_v1_ReplicaSetSpec {
 return {
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   selector: data?.selector !== undefined ? data.selector : {},
   template: data?.template !== undefined ? data.template : {},
 };
}
