/**
* CustomResourceDefinitionCondition contains details for the current condition of this pod.
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* message is a human-readable message indicating details about last transition.
*/
message?: string;
/**
* reason is a unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* status is the status of the condition. Can be True, False, Unknown.
*/
status: string;
/**
* type is the type of the condition. Types include Established, NamesAccepted and Terminating.
*/
type: string;
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition {
  return {
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
  };
}
