/**
* JobList is a collection of jobs.
*/
export interface io_k8s_api_batch_v1_JobList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of Jobs.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { labels?: Record<string, any>; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; annotations?: Record<string, any>; generation?: number; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string; generateName?: string; finalizers?: string[]; deletionTimestamp?: Date; deletionGracePeriodSeconds?: number; selfLink?: string; uid?: string; creationTimestamp?: Date }; spec?: Record<string, any>; status?: { conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; failed?: number; failedIndexes?: string; startTime?: Date; succeeded?: number; active?: number; completedIndexes?: string; completionTime?: Date; uncountedTerminatedPods?: { failed?: string[]; succeeded?: string[] }; ready?: number; terminating?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_batch_v1_JobList with default values
*/
export function createio_k8s_api_batch_v1_JobList(data?: Partial<io_k8s_api_batch_v1_JobList>): io_k8s_api_batch_v1_JobList {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
