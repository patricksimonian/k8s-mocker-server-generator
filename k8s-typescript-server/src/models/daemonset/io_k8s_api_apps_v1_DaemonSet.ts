/**
* DaemonSet represents the configuration of a daemon set.
* @resourceType daemonset
* @kind Daemonset
*/
export interface io_k8s_api_apps_v1_DaemonSet {
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
metadata?: { generateName?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; uid?: string; deletionTimestamp?: Date; generation?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; finalizers?: string[]; labels?: Record<string, any>; name?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; namespace?: string; creationTimestamp?: Date };
/**
* DaemonSetSpec is the specification of a daemon set.
* @isObject
*/
spec?: { minReadySeconds?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; template: { metadata?: { generateName?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; resourceVersion?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; name?: string; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; finalizers?: string[]; generation?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; selfLink?: string }; spec?: Record<string, any> }; updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' } };
/**
* DaemonSetStatus represents the current status of a daemon set.
* @isObject
*/
status?: { numberUnavailable?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; desiredNumberScheduled: number; numberAvailable?: number; numberMisscheduled: number; numberReady: number; collisionCount?: number; currentNumberScheduled: number; observedGeneration?: number; updatedNumberScheduled?: number };
}

/**
* Create a new Daemonset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSet(data?: Partial<io_k8s_api_apps_v1_DaemonSet>): io_k8s_api_apps_v1_DaemonSet {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
   status: data?.status !== undefined ? data.status : { desiredNumberScheduled: 0, numberMisscheduled: 0, numberReady: 0, currentNumberScheduled: 0 },
 };
}
