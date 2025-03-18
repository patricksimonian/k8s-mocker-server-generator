/**
* DaemonSet represents the configuration of a daemon set.
*/
export interface io_k8s_api_apps_v1_DaemonSet {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionTimestamp?: Date; generateName?: string; deletionGracePeriodSeconds?: number; name?: string; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; labels?: Record<string, any>; selfLink?: string; creationTimestamp?: Date; finalizers?: string[]; generation?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; resourceVersion?: string; annotations?: Record<string, any> };
/**
* DaemonSetSpec is the specification of a daemon set.
*/
spec?: { minReadySeconds?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; template: { metadata?: { generateName?: string; generation?: number; labels?: Record<string, any>; resourceVersion?: string; selfLink?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; name?: string; namespace?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; uid?: string }; spec?: Record<string, any> }; updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' } };
/**
* DaemonSetStatus represents the current status of a daemon set.
*/
status?: { observedGeneration?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentNumberScheduled: number; numberMisscheduled: number; numberReady: number; updatedNumberScheduled?: number; collisionCount?: number; desiredNumberScheduled: number; numberAvailable?: number; numberUnavailable?: number };
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
* Create a new io_k8s_api_apps_v1_DaemonSet with default values
*/
export function createio_k8s_api_apps_v1_DaemonSet(data?: Partial<io_k8s_api_apps_v1_DaemonSet>): io_k8s_api_apps_v1_DaemonSet {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
    status: data?.status !== undefined ? data.status : { desiredNumberScheduled: 0, currentNumberScheduled: 0, numberMisscheduled: 0, numberReady: 0 },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
