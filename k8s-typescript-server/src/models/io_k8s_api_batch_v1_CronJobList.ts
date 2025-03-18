/**
* CronJobList is a collection of cron jobs.
*/
export interface io_k8s_api_batch_v1_CronJobList {
/**
* items is the list of CronJobs.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { generateName?: string; resourceVersion?: string; uid?: string; creationTimestamp?: Date; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; deletionTimestamp?: Date; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; generation?: number; deletionGracePeriodSeconds?: number; finalizers?: string[]; name?: string; selfLink?: string; annotations?: Record<string, any> }; spec?: { suspend?: boolean; timeZone?: string; concurrencyPolicy?: 'Allow' | 'Forbid' | 'Replace'; failedJobsHistoryLimit?: number; jobTemplate: { metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; resourceVersion?: string; uid?: string; generateName?: string; deletionGracePeriodSeconds?: number; generation?: number; labels?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; namespace?: string; selfLink?: string }; spec?: Record<string, any> }; schedule: string; startingDeadlineSeconds?: number; successfulJobsHistoryLimit?: number }; status?: { lastScheduleTime?: Date; lastSuccessfulTime?: Date; active?: Array<{ namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string }> } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_batch_v1_CronJobList with default values
*/
export function createio_k8s_api_batch_v1_CronJobList(data?: Partial<io_k8s_api_batch_v1_CronJobList>): io_k8s_api_batch_v1_CronJobList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
