/**
* APIServiceCondition describes the state of an APIService at a particular point
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition {
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
* Status is the status of the condition. Can be True, False, Unknown.
*/
status: string;
/**
* Type is the type of the condition.
*/
type: string;
}

/**
* Create a new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition with default values
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition {
  return {
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
  };
}
