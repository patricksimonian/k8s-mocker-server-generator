/**
* DaemonSetSpec is the specification of a daemon set.
* @resourceType daemonsetspec
* @kind Daemonsetspec
*/
export interface io_k8s_api_apps_v1_DaemonSetSpec {
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @required
* @isObject
*/
template: { spec?: Record<string, any>; metadata?: { name?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; deletionTimestamp?: Date; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; selfLink?: string; finalizers?: string[]; generateName?: string; namespace?: string; labels?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; uid?: string } };
/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
* @isObject
*/
updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' };
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
}

/**
* Create a new Daemonsetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSetSpec(data?: Partial<io_k8s_api_apps_v1_DaemonSetSpec>): io_k8s_api_apps_v1_DaemonSetSpec {
 return {
   template: data?.template !== undefined ? data.template : {},
   updateStrategy: data?.updateStrategy !== undefined ? data.updateStrategy : {},
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   selector: data?.selector !== undefined ? data.selector : {},
 };
}
