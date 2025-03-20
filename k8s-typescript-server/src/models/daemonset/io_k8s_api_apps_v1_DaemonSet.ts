/**
* DaemonSet represents the configuration of a daemon set.
* @resourceType daemonset
* @kind Daemonset
*/
export interface io_k8s_api_apps_v1_DaemonSet {
/**
* DaemonSetStatus represents the current status of a daemon set.
* @isObject
*/
status?: { conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentNumberScheduled: number; desiredNumberScheduled: number; numberMisscheduled: number; numberUnavailable?: number; updatedNumberScheduled?: number; collisionCount?: number; numberAvailable?: number; numberReady: number; observedGeneration?: number };
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
metadata?: { deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; uid?: string; annotations?: Record<string, any>; generation?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; selfLink?: string; creationTimestamp?: Date; generateName?: string; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; finalizers?: string[]; resourceVersion?: string };
/**
* DaemonSetSpec is the specification of a daemon set.
* @isObject
*/
spec?: { template: { metadata?: { creationTimestamp?: Date; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; deletionTimestamp?: Date; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; name?: string; uid?: string }; spec?: Record<string, any> }; updateStrategy?: { type?: 'OnDelete' | 'RollingUpdate'; rollingUpdate?: { maxSurge?: string; maxUnavailable?: string } }; minReadySeconds?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
}

/**
* Create a new Daemonset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSet(data?: Partial<io_k8s_api_apps_v1_DaemonSet>): io_k8s_api_apps_v1_DaemonSet {
 return {
   status: data?.status !== undefined ? data.status : { numberReady: 0, numberMisscheduled: 0, currentNumberScheduled: 0, desiredNumberScheduled: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { template: {}, selector: {} },
 };
}
