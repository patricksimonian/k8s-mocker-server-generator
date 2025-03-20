/**
* JobCondition describes current state of a job.
* @resourceType jobcondition
* @kind Jobcondition
*/
export interface io_k8s_api_batch_v1_JobCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastProbeTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Human readable message indicating details about last transition.
*/
message?: string;
/**
* (brief) reason for the condition's last transition.
*/
reason?: string;
/**
* Status of the condition, one of True, False, Unknown.
* @required
*/
status: string;
/**
* Type of job condition, Complete or Failed.
* @required
*/
type: string;
}

/**
* Create a new Jobcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_JobCondition instance with defaults applied
*/
export function createio_k8s_api_batch_v1_JobCondition(data?: Partial<io_k8s_api_batch_v1_JobCondition>): io_k8s_api_batch_v1_JobCondition {
 return {
   lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
