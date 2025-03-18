/**
* DaemonSetList is a collection of daemon sets.
*/
export interface io_k8s_api_apps_v1_DaemonSetList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* A list of daemon sets.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { deletionGracePeriodSeconds?: number; generation?: number; namespace?: string; selfLink?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; finalizers?: string[]; name?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any> }; spec?: { minReadySeconds?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; template: { metadata?: { ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; namespace?: string; labels?: Record<string, any>; generateName?: string; generation?: number; name?: string; deletionTimestamp?: Date }; spec?: Record<string, any> }; updateStrategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'OnDelete' | 'RollingUpdate' } }; status?: { desiredNumberScheduled: number; numberMisscheduled: number; numberReady: number; numberUnavailable?: number; observedGeneration?: number; updatedNumberScheduled?: number; collisionCount?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentNumberScheduled: number; numberAvailable?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new io_k8s_api_apps_v1_DaemonSetList with default values
*/
export function createio_k8s_api_apps_v1_DaemonSetList(data?: Partial<io_k8s_api_apps_v1_DaemonSetList>): io_k8s_api_apps_v1_DaemonSetList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
