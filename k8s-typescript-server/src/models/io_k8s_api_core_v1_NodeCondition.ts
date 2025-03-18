/**
* NodeCondition contains condition information for a node.
*/
export interface io_k8s_api_core_v1_NodeCondition {
/**
* Type of node condition.
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastHeartbeatTime?: Date;
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
*/
status: string;
}

/**
* Create a new io_k8s_api_core_v1_NodeCondition with default values
*/
export function createio_k8s_api_core_v1_NodeCondition(data?: Partial<io_k8s_api_core_v1_NodeCondition>): io_k8s_api_core_v1_NodeCondition {
  return {
    type: data?.type !== undefined ? data.type : '',
    lastHeartbeatTime: data?.lastHeartbeatTime !== undefined ? data.lastHeartbeatTime : '',
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
  };
}
