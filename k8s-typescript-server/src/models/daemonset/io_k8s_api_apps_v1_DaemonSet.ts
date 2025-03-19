/**
* DaemonSet represents the configuration of a daemon set.
* @resourceType daemonset
* @kind Daemonset
*/
export interface io_k8s_api_apps_v1_DaemonSet {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generation?: number; name?: string; namespace?: string; finalizers?: string[]; generateName?: string; deletionTimestamp?: Date; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; annotations?: Record<string, any> };
/**
* DaemonSetSpec is the specification of a daemon set.
* @isObject
*/
spec?: { revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; template: { metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; name?: string; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; uid?: string }; spec?: Record<string, any> }; updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' }; minReadySeconds?: number };
/**
* DaemonSetStatus represents the current status of a daemon set.
* @isObject
*/
status?: { collisionCount?: number; conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>; currentNumberScheduled: number; numberReady: number; observedGeneration?: number; desiredNumberScheduled: number; numberAvailable?: number; numberMisscheduled: number; numberUnavailable?: number; updatedNumberScheduled?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Daemonset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSet(data?: Partial<io_k8s_api_apps_v1_DaemonSet>): io_k8s_api_apps_v1_DaemonSet {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
   status: data?.status !== undefined ? data.status : { desiredNumberScheduled: 0, numberMisscheduled: 0, currentNumberScheduled: 0, numberReady: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
