/**
* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition {
/**
* message is a human-readable explanation containing details about the transition
*/
message?: string;
/**
* reason is the reason for the condition's last transition.
*/
reason?: string;
/**
* status is the status of the condition (True, False, Unknown)
*/
status: string;
/**
* type describes the current condition
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
}

/**
* Create a new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition with default values
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition {
  return {
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
  };
}
