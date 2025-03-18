/**
* DaemonSetSpec is the specification of a daemon set.
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
*/
selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
*/
template: { metadata?: { selfLink?: string; generation?: number; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; finalizers?: string[]; creationTimestamp?: Date; deletionTimestamp?: Date; uid?: string; labels?: Record<string, any>; namespace?: string; generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number }; spec?: Record<string, any> };
/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' };
}

/**
* Create a new io_k8s_api_apps_v1_DaemonSetSpec with default values
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
