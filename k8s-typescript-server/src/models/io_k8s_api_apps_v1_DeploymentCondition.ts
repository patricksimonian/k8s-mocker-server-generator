/**
* DeploymentCondition describes the state of a deployment at a certain point.
*/
export interface io_k8s_api_apps_v1_DeploymentCondition {
/**
* Status of the condition, one of True, False, Unknown.
*/
status: string;
/**
* Type of deployment condition.
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastUpdateTime?: Date;
/**
* A human readable message indicating details about the transition.
*/
message?: string;
/**
* The reason for the condition's last transition.
*/
reason?: string;
}

/**
* Create a new io_k8s_api_apps_v1_DeploymentCondition with default values
*/
export function createio_k8s_api_apps_v1_DeploymentCondition(data?: Partial<io_k8s_api_apps_v1_DeploymentCondition>): io_k8s_api_apps_v1_DeploymentCondition {
  return {
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
    lastUpdateTime: data?.lastUpdateTime !== undefined ? data.lastUpdateTime : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
  };
}
