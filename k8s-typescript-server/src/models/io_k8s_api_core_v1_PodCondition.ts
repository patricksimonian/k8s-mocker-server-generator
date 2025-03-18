/**
* PodCondition contains details for the current condition of this pod.
*/
export interface io_k8s_api_core_v1_PodCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Human-readable message indicating details about last transition.
*/
message?: string;
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
*/
status: string;
/**
* Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastProbeTime?: Date;
}

/**
* Create a new io_k8s_api_core_v1_PodCondition with default values
*/
export function createio_k8s_api_core_v1_PodCondition(data?: Partial<io_k8s_api_core_v1_PodCondition>): io_k8s_api_core_v1_PodCondition {
  return {
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
    lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : '',
  };
}
