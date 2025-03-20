/**
* CronJob represents the configuration of a single cron job.
* @resourceType cronjob
* @kind Cronjob
*/
export interface io_k8s_api_batch_v1_CronJob {
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
metadata?: { creationTimestamp?: Date; generateName?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; deletionGracePeriodSeconds?: number; resourceVersion?: string; selfLink?: string; uid?: string; finalizers?: string[]; generation?: number; labels?: Record<string, any>; namespace?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; name?: string };
/**
* CronJobSpec describes how the job execution will look like and when it will actually run.
* @isObject
*/
spec?: { failedJobsHistoryLimit?: number; jobTemplate: { metadata?: { deletionTimestamp?: Date; generateName?: string; generation?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; deletionGracePeriodSeconds?: number; finalizers?: string[]; namespace?: string; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; labels?: Record<string, any>; name?: string; uid?: string }; spec?: Record<string, any> }; schedule: string; startingDeadlineSeconds?: number; successfulJobsHistoryLimit?: number; suspend?: boolean; timeZone?: string; concurrencyPolicy?: 'Allow' | 'Forbid' | 'Replace' };
/**
* CronJobStatus represents the current state of a cron job.
* @isObject
*/
status?: { active?: Array<{ fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string }>; lastScheduleTime?: Date; lastSuccessfulTime?: Date };
}

/**
* Create a new Cronjob with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_CronJob instance with defaults applied
*/
export function createio_k8s_api_batch_v1_CronJob(data?: Partial<io_k8s_api_batch_v1_CronJob>): io_k8s_api_batch_v1_CronJob {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { jobTemplate: {}, schedule: '' },
   status: data?.status !== undefined ? data.status : {},
 };
}
