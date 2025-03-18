/**
* CronJobSpec describes how the job execution will look like and when it will actually run.
*/
export interface io_k8s_api_batch_v1_CronJobSpec {
/**
* The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
*/
schedule: string;
/**
* Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
*/
startingDeadlineSeconds?: number;
/**
* The number of successful finished jobs to retain. Value must be non-negative integer. Defaults to 3.
*/
successfulJobsHistoryLimit?: number;
/**
* This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
*/
suspend?: boolean;
/**
* The time zone name for the given schedule, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. If not specified, this will default to the time zone of the kube-controller-manager process. The set of valid time zone names and the time zone offset is loaded from the system-wide time zone database by the API server during CronJob validation and the controller manager during execution. If no system-wide time zone database can be found a bundled version of the database is used instead. If the time zone name becomes invalid during the lifetime of a CronJob or due to a change in host configuration, the controller will stop creating new new Jobs and will create a system event with the reason UnknownTimeZone. More information can be found in https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#time-zones
*/
timeZone?: string;
/**
* Specifies how to treat concurrent executions of a Job. Valid values are:

- "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one

Possible enum values:
 - `"Allow"` allows CronJobs to run concurrently.
 - `"Forbid"` forbids concurrent runs, skipping next run if previous hasn't finished yet.
 - `"Replace"` cancels currently running job and replaces it with a new one.
*/
concurrencyPolicy?: 'Allow' | 'Forbid' | 'Replace';
/**
* The number of failed finished jobs to retain. Value must be non-negative integer. Defaults to 1.
*/
failedJobsHistoryLimit?: number;
/**
* JobTemplateSpec describes the data a Job should have when created from a template
*/
jobTemplate: { metadata?: { deletionTimestamp?: Date; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; resourceVersion?: string; annotations?: Record<string, any>; generateName?: string; creationTimestamp?: Date; selfLink?: string; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }> }; spec?: Record<string, any> };
}

/**
* Create a new io_k8s_api_batch_v1_CronJobSpec with default values
*/
export function createio_k8s_api_batch_v1_CronJobSpec(data?: Partial<io_k8s_api_batch_v1_CronJobSpec>): io_k8s_api_batch_v1_CronJobSpec {
  return {
    schedule: data?.schedule !== undefined ? data.schedule : '',
    startingDeadlineSeconds: data?.startingDeadlineSeconds !== undefined ? data.startingDeadlineSeconds : 0,
    successfulJobsHistoryLimit: data?.successfulJobsHistoryLimit !== undefined ? data.successfulJobsHistoryLimit : 0,
    suspend: data?.suspend !== undefined ? data.suspend : false,
    timeZone: data?.timeZone !== undefined ? data.timeZone : '',
    concurrencyPolicy: data?.concurrencyPolicy !== undefined ? data.concurrencyPolicy : '',
    failedJobsHistoryLimit: data?.failedJobsHistoryLimit !== undefined ? data.failedJobsHistoryLimit : 0,
    jobTemplate: data?.jobTemplate !== undefined ? data.jobTemplate : {},
  };
}
