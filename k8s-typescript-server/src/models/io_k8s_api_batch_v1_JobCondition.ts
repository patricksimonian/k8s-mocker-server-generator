/**
* JobCondition describes current state of a job.
*/
export interface io_k8s_api_batch_v1_JobCondition {
/**
* Status of the condition, one of True, False, Unknown.
*/
status: string;
/**
* Type of job condition, Complete or Failed.
*/
type: string;
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
}

/**
* Create a new io_k8s_api_batch_v1_JobCondition with default values
*/
export function createio_k8s_api_batch_v1_JobCondition(data?: Partial<io_k8s_api_batch_v1_JobCondition>): io_k8s_api_batch_v1_JobCondition {
  return {
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
    lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : '',
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
  };
}
