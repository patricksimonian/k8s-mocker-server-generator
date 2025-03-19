/**
* CronJob represents the configuration of a single cron job.
* @resourceType cronjob
* @kind Cronjob
*/
export interface io_k8s_api_batch_v1_CronJob {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; creationTimestamp?: Date; generateName?: string; name?: string; selfLink?: string; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; resourceVersion?: string };
/**
* CronJobSpec describes how the job execution will look like and when it will actually run.
* @isObject
*/
spec?: { schedule: string; startingDeadlineSeconds?: number; successfulJobsHistoryLimit?: number; suspend?: boolean; timeZone?: string; concurrencyPolicy?: 'Allow' | 'Forbid' | 'Replace'; failedJobsHistoryLimit?: number; jobTemplate: { metadata?: { creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; name?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; annotations?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number; selfLink?: string; uid?: string }; spec?: Record<string, any> } };
/**
* CronJobStatus represents the current state of a cron job.
* @isObject
*/
status?: { active?: Array<{ fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string }>; lastScheduleTime?: Date; lastSuccessfulTime?: Date };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Cronjob with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_CronJob instance with defaults applied
*/
export function createio_k8s_api_batch_v1_CronJob(data?: Partial<io_k8s_api_batch_v1_CronJob>): io_k8s_api_batch_v1_CronJob {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { jobTemplate: {}, schedule: '' },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
