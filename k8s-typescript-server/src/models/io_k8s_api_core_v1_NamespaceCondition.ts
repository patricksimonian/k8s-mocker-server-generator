/**
* NamespaceCondition contains details about state of namespace.
*/
export interface io_k8s_api_core_v1_NamespaceCondition {
/**
* Human-readable message indicating details about last transition.
*/
message?: string;
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* Status of the condition, one of True, False, Unknown.
*/
status: string;
/**
* Type of namespace controller condition.
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
}

/**
* Create a new io_k8s_api_core_v1_NamespaceCondition with default values
*/
export function createio_k8s_api_core_v1_NamespaceCondition(data?: Partial<io_k8s_api_core_v1_NamespaceCondition>): io_k8s_api_core_v1_NamespaceCondition {
  return {
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
  };
}
