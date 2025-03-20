/**
* DaemonSetSpec is the specification of a daemon set.
* @resourceType daemonsetspec
* @kind Daemonsetspec
*/
export interface io_k8s_api_apps_v1_DaemonSetSpec {
/**
* The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
*/
minReadySeconds?: number;
/**
* The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
*/
revisionHistoryLimit?: number;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @required
* @isObject
*/
selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @required
* @isObject
*/
template: { metadata?: { resourceVersion?: string; selfLink?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; namespace?: string; uid?: string; annotations?: Record<string, any>; finalizers?: string[]; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; deletionGracePeriodSeconds?: number; generation?: number; generateName?: string; creationTimestamp?: Date; deletionTimestamp?: Date }; spec?: Record<string, any> };
/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
* @isObject
*/
updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' };
}

/**
* Create a new Daemonsetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSetSpec(data?: Partial<io_k8s_api_apps_v1_DaemonSetSpec>): io_k8s_api_apps_v1_DaemonSetSpec {
 return {
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   selector: data?.selector !== undefined ? data.selector : {},
   template: data?.template !== undefined ? data.template : {},
   updateStrategy: data?.updateStrategy !== undefined ? data.updateStrategy : {},
 };
}
