/**
* CronJob represents the configuration of a single cron job.
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
*/
metadata?: { generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; uid?: string; annotations?: Record<string, any>; namespace?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; name?: string; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; generation?: number };
/**
* CronJobSpec describes how the job execution will look like and when it will actually run.
*/
spec?: { startingDeadlineSeconds?: number; successfulJobsHistoryLimit?: number; suspend?: boolean; timeZone?: string; concurrencyPolicy?: 'Allow' | 'Forbid' | 'Replace'; failedJobsHistoryLimit?: number; jobTemplate: { spec?: Record<string, any>; metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; namespace?: string; selfLink?: string; uid?: string; deletionTimestamp?: Date; creationTimestamp?: Date; generateName?: string; name?: string; resourceVersion?: string; annotations?: Record<string, any>; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }> } }; schedule: string };
/**
* CronJobStatus represents the current state of a cron job.
*/
status?: { active?: Array<{ resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string }>; lastScheduleTime?: Date; lastSuccessfulTime?: Date };
}

/**
* Create a new io_k8s_api_batch_v1_CronJob with default values
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
